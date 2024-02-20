import axios from 'axios'
import { apiUrl } from '../info'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'

export default function Blog() {
    const { title, id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        document.title = `Axera Blogs - Title: ${title}`
        axios.get(`${apiUrl}/api/blogs/${id}/`)
            .then(response => {
                setBlog(response.data)
            })
    }, [id])

    return (
        <Layout page={
            <>
                <h1 className='text-color1 font-bold'>{blog.title}</h1>
                <center>
                    <img src={blog.cover_image} alt="" className='object-cover w-[330px] m-3 rounded-3xl' />
                </center>
                <p className='text-lg' dangerouslySetInnerHTML={{ __html: blog.content }} />
            </>
        } />
    )
}
