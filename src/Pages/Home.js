import axios from 'axios'
import { apiUrl } from '../info'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardsContainer from '../Components/CardsContainer'
import Layout from './Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import SearchFilter from '../Components/SearchFilter'
import Loading from '../Components/Loading'

export default function Home() {
    const [blogs, setBlogs] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [nextPage, setNextPage] = useState(true)
    const queryParams = new URLSearchParams(window.location.search)
    const q = queryParams.get('q') ? queryParams.get('q') : ''
    const topic = queryParams.get('topic') ? queryParams.get('topic') : ''

    useEffect(() => {
        document.title = 'Axera Blogs - Home'
    }, [])

    useEffect(() => {
        if (nextPage) {
            axios.get(`${apiUrl}/api/blogs/`, { params: { page: pageNo, topic__topic: topic, search: q } })
                .then(response => {
                    setNextPage(response.data.next ? true : false)
                    setBlogs([...blogs, ...response.data.results])
                })
        }
    }, [pageNo, topic, q])

    return (
        <Layout page={
            <>
                <SearchFilter setPageNo={setPageNo} setNextPage={setNextPage} setBlogs={setBlogs} q={q} topic={topic} />
                <InfiniteScroll dataLength={blogs.length} next={() => setPageNo(pageNo + 1)} hasMore={true} loader={<Loading />}>
                    <CardsContainer items={blogs} />
                </InfiniteScroll>
                <center><Link to={`/explore?q=${q}&topic=${topic}`}>Check out articles from other sources.</Link></center>
            </>
        } />
    )
}
