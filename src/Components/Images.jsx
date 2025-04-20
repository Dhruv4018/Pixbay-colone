import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'
const Images = () => {
    const { Image } = useContext(PixabayContext)
    return (
        <div className="container my-5">
            <div className='flex'>
                {Image.map((image) => <div key={image.id}>
                    <div className='item'>
                        <img src={image.largeImageURL} alt={image.tags} />
                    </div>

                </div>)}
            </div>
        </div>

    )
}

export default Images