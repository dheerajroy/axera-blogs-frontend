import React from 'react'

export default function Card({ item }) {
    return (
        <a href={item.link ? item.link : `${item.title}-${item.id}`} target={item.link ? '_blank' : ''} rel="noreferrer" className="w-[300px] text-gray-800">
            <div className="p-4 flex flex-col justify-between">
                <div className="mb-8">
                    <div className="text-gray-500 text-sm">{item.topic}</div>
                    <img src={item.cover_image} alt="" className='rounded-3xl' />
                    <div className="text-color1 font-bold text-xl mt-2 mb-2">{item.title}</div>
                    <p className="line-clamp-3" dangerouslySetInnerHTML={{__html: item.summary ? item.summary : item.content ? item.content.replace(/<[^>]*>/g, '') : ''}} />
                    <div className='text-color4 text-sm truncate mt-2'>{item.link ? item.link : ''}</div>
                </div>
            </div>
        </a>
    )
}
