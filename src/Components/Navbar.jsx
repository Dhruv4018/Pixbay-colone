import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
    const { ImageCatagory , setImageSearch } = useContext(PixabayContext)
    return (
        <>
            <div className='container text-center my-3'>
                <button onClick={() => ImageCatagory("nature")} type="button" className="btn btn-outline-primary  mx-3">Nature</button>
                <button onClick={() => ImageCatagory("science")} type="button" className="btn btn-outline-warning mx-3">Science</button>
                <button onClick={() => ImageCatagory("computer")} type="button" className="btn btn-outline-light mx-3">Computer</button>
                <button onClick={() => ImageCatagory("buliding")} type="button" className="btn btn-outline-info mx-3">Buliding</button>
                <button onClick={() => ImageCatagory("sports")} type="button" className="btn btn-outline-warning mx-3">Sports</button>
                <button onClick={() => ImageCatagory("transportation")} type="button" className="btn btn-outline-info mx-3">Transportation</button>
                <button onClick={() => ImageCatagory("travel")} type="button" className="btn btn-outline-light mx-3">Travel</button>
                <button onClick={() => ImageCatagory("food")} type="button" className="btn btn-outline-primary mx-3">Food</button>
            </div>

            <div className="container "  style={{width:"800px"}}>
                <input type="text" onChange={(e)=>setImageSearch(e.target.value)} className="form-control bg-dark text-light "  />

            </div>
        </>
    )
}

export default Navbar