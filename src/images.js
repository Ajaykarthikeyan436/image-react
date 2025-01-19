import "./style.css"
import image1 from "./images/dog1.jpeg"
import image2 from "./images/dog2.jpeg"
import image3 from "./images/dog3.jpeg"
import image4 from "./images/dog4.jpeg"

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
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image3} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image4} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image2} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image1} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image4} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
                <div className="img1_container">
                    <img src={image3} alt="Dog1"></img>
                    <p>Cute Puppy Running</p>
                </div>
            </div>
        </div>
    )
}

export default Images