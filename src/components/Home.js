import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = ({displayImage = null, updateImage}) => {

    const navigate = useNavigate()


    return (
        <div className="home">
            <form>
                <input type="file" name="image" onChange={(e) => {updateImage(e)}} multiple />
                <button type="submit" onClick={() => {navigate("/recipes")}}>Submit</button>
            </form>
            <div className="img">
                {displayImage?<img src={URL.createObjectURL(displayImage)} alt="image" />:<p>Upload an image to start...</p>}
            </div>
        </div>
    );
}
 
export default Home;