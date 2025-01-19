import "./style.css"
import image1 from "./images/dog1.jpeg"
import image2 from "./images/dog2.jpeg"
import image3 from "./images/dog3.jpeg"
import image4 from "./images/dog4.jpeg"
import image5 from "./images/dog5.jpeg"
import image6 from "./images/dog6.jpeg"
import image7 from "./images/dog7.jpeg"
import image8 from "./images/dog8.jpeg"

function Images() {
    return (
        <div className="container">
            <div className="container_title">
                <h1>Image Gallery</h1>
            </div>

            <div className="img_containers">
                <div className="img1_container">
                    <img src={image1} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image2} alt="Dog1"></img>
                    <p>Rottweiler</p>
                </div>
                <div className="img1_container">
                    <img src={image3} alt="Dog1"></img>
                    <p>Smiling Dog</p>
                </div>
                <div className="img1_container">
                    <img src={image4} alt="Dog1"></img>
                    <p>Shiba</p>
                </div>
                <div className="img1_container">
                    <img src={image5} alt="Dog1"></img>
                    <p>Dog lying in the Bed</p>
                </div>
                <div className="img1_container">
                    <img src={image6} alt="Dog1"></img>
                    <p>Innocent Look</p>
                </div>
                <div className="img1_container">
                    <img src={image7} alt="Dog1"></img>
                    <p>Jumping Dog</p>
                </div>
                <div className="img1_container">
                    <img src={image8} alt="Dog1"></img>
                    <p>Dog is Sitting</p>
                </div>
            </div>
        </div>
    )
}

export default Images