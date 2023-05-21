import { Button, Card, Col } from "react-bootstrap";
import "./AllToysCard.css";
import { Link } from "react-router-dom";

const AllToysCard = ({toyItem}) => {
    console.log(toyItem);

    const {_id, ToyName, seller_name, seller_email, SubCategory, quantity, price, Photo_URL } = toyItem;
    return (
              <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'200px' }} variant="top" src={Photo_URL} />
                    <Card.Body>
                        <Card.Title className='title'> {ToyName} </Card.Title>
                        <Card.Text className="recipe-info">
                        Seller Name : {seller_name}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                           E-mail : {seller_email}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                            Available Quantity : {quantity}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                            Price : {price}
                        </Card.Text>

                        <Link to={`/toy-details/${_id}`} className='btn btn-primary view-recipe'>
                            View Details
                        </Link>
                    </Card.Body>
                </Card>  
            </Col>
    );
};

export default AllToysCard;