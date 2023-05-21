import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToyDetails = useLoaderData();
    console.log(singleToyDetails);
    const {_id, ToyName, seller_name, seller_email,  SubCategory, ToyDetails, quantity, price, Photo_URL } = singleToyDetails;
    return (
        <Container className='banner'>
            <Row className="my-5">

            <Col xs={12} md={6}>
                    <Figure>
                        <Figure.Image className='rounded' src={Photo_URL} />
                    </Figure>                 
            </Col>

                <Col xs={12} md={6}>
                    <h5 className='product-title'> {ToyName} </h5>
                    <h6 className="seller-name"> Seller: {seller_name} </h6>
                    <h6 className="seller-name"> E-mail Address: {seller_email} </h6>
                    <p className='product-description'> {ToyDetails} </p>
                    <h6 className='quantity'> Available Quantity : {quantity} </h6>
                    <h6 className='price'> Price : {price} </h6>
                    <Button className='explore-button'>Add to Favorite</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ToyDetails;