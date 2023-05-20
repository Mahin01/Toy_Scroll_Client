import "./Banner.css";
import {Button} from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="banner-info">
            <h2 className='banner-heading'>Get the Best Deal on Toy Cars</h2>
            <p className='banner-info-text'>Welcome to Toy Scroll, the ultimate destination for toy car enthusiasts! Explore our extensive collection of toy cars, ranging from classic collectibles to modern marvels. Whether you are a passionate collector or a fan of miniature automotive marvels, our website is your gateway to the world of toy cars. Discover rare finds, browse through unique models, and connect with fellow enthusiasts in our vibrant community.</p>
            <Button className='banner-button'>Explore</Button>
        </div>
    );
};

export default Banner;