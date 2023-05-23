import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Error.css"
import { Helmet } from 'react-helmet';

const Error = () => {
    const dynamicTitle = "Toy Scroll|Error";
    return (
        <Container>
            <Helmet> {dynamicTitle} </Helmet>
            <Row className='mt-5'>
                <Col className='mt-5' xs={12} md={6}>
                    <h1 className='text-uppercase error-title'>Sorry No Pages Found</h1>
                    <Link to="/">
                        <button className='home-btn'>
                            Go To Home
                        </button>
                    </Link>
                </Col>
                <Col xs={12} md={6}>
                    <img className='img-fluid' src="error.jpg" />
                </Col>
            </Row>
        </Container>
    );
};

export default Error;