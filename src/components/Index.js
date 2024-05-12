import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Index = () => {

    const [image, setImages] = useState([])

    const handleImageChange = (e) => {
        setImages(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (image) {
            console.log(image)
        }
    }




    return (
        <div className="index">
            <form>
                <input type="file" name="image" onChange={handleImageChange} multiple />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default Index;