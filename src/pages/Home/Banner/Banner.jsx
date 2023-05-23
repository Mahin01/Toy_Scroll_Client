import "./Banner.css";
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import bannerImage from "../../../../public/banner.jpg";
const Banner = () => {
    return (
        <Container className='banner'>
            <Row className="mt-3">
                <Col className="mt-5" xs={12} md={6}>
                    <h2 className='banner-heading'>Get the Best Deal on Toy Cars</h2>
                    <p className='banner-info-text'>Welcome to Toy Scroll, the ultimate destination for toy car enthusiasts! Explore our extensive collection of toy cars, ranging from classic collectibles to modern marvels. Whether you're a passionate collector or a fan of miniature automotive marvels, our website is your gateway to the world of toy cars. Discover rare finds, browse through unique models, and connect with fellow enthusiasts in our vibrant community.</p>
                    <Button className='explore-button'>Explore</Button>
                </Col>
                <Col xs={12} md={6}>
                    <Figure>
                        <Figure.Image className='rounded' src={bannerImage} />
                    </Figure>                 
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;