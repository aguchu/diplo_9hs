var express = require('express');
var router = express.Router();
var blogModel = require('../models/blogModel');
var cloudinary = require('cloudinary').v2;
var nodemailer= require ('nodemailer');


router.get('/blog', async function (req, res, next) {
    let blog = await blogModel.getBlog();

    blog = blog.map(blog => {
        if (blog.img_id) {
            const imagen = cloudinary.url(blog.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...blog,
                imagen
            }
        } else {
            return {
                ...blog,
                imagen: ''
            }
        }
    });
    res.json(blog);
});

router.post ('/contacto', async (req,res) =>{
    const mail = {
        to: 'info@empiriacomunicacion.com.ar',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email}
        <br> Además, se hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });
    
    await transport.sendMail(mail)

    res.status(201).json ({
        error: false,
        message: 'Mensaje Enviado'
    });
});

module.exports = router;