import React from 'react'
import Card from './Card'

export default function CardsContainer({ items }) {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                items.map((item, index) => {
                    return (<Card item={item} key={index} />)
                })
            }
        </div>
    )
}
