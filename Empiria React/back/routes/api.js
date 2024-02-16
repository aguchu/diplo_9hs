const express = require('express');
const router = express.Router();
const blogModel = require('../models/blogModel');
const cloudinary = require('cloudinary').v2;

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

module.exports = router;