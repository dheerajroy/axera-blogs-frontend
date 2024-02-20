import axios from 'axios'
import { apiUrl } from '../info'
import React, { useEffect, useState } from 'react'

export default function SearchFilter({ setPageNo, setNextPage, setBlogs, q, topic }) {
    const [topics, setTopics] = useState([])
    const [searchText, setSearchText] = useState(q)

    useEffect(() => {
        axios.get(`${apiUrl}/api/topics/`)
            .then((response) => {
                setTopics([...topics, ...response.data])
            })
    }, [])

    return (
        <form className='search-form flex justify-center items-center flex-wrap text-xl'>
            <input type="search" name='q' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search' autoComplete='off' className='border-2 border-color5 focus:outline-none rounded-3xl p-2 m-[2px]' />
            <select name='topic' value={topic} onChange={() => { setPageNo(1); setBlogs([]); setNextPage(true); document.querySelector('.search-form').submit() }} className='border-2 border-color5 bg-white focus:outline-none rounded-3xl p-2 m-[2px]'>
                <option value=''>All</option>
                {
                    topics.map((topic) => {
                        return (<option key={topic.id} value={topic.topic}>{topic.topic}</option>)
                    })
                }
            </select>
        </form>
    )
}
