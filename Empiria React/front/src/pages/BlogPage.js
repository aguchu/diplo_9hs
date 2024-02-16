import React, { useEffect, useState } from "react";
import '../styles/BlogPage.css';
import axios from 'axios';
import BlogItem from "../componentes/blog/BlogItem";

const BlogPage= (props)=> {

    const [loading,setLoading] = useState (false);
    const [blog,setBlog] = useState ([]);

    useEffect (() =>{
        const cargarBlog =async () =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/blog');
            setBlog(response.data);
            setLoading(false);
        };
        cargarBlog();
    }, []);

    return (
        <section className="holder">
            <h2>Blog</h2>
            {loading ?(
                <p>Cargando...</p>
            ) : (
                blog.map (item=> <BlogItem 
                    key ={item.id}
                    title={item.titulo} 
                    subtitle={item.subtitulo} 
                    imagen={item.imagen} 
                    body={item.cuerpo}
                    />)
            )}
        </section>
    );
    }
    
    export default BlogPage;