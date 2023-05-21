import { Button, Card, Col } from "react-bootstrap";
import "./AllToysCard.css";
import { Link } from "react-router-dom";

const AllToysCard = ({toyItem}) => {
    console.log(toyItem);

    const {_id, ToyName, Seller, SubCategory, AvailableQuantity, Price, Photo_URL } = toyItem;
    return (
              <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'200px' }} variant="top" src={Photo_URL} />
                    <Card.Body>
                        <Card.Title className='title'> {ToyName} </Card.Title>
                        <Card.Text className="recipe-info">
                        {Seller}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                            {SubCategory}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                            Available Quantity : {AvailableQuantity}
                        </Card.Text>
                        <Card.Text className="recipe-info">
                            Price : {Price}
                        </Card.Text>

                        <Link to={`/toy-details/${_id}`} className='btn btn-primary view-recipe'>
                            View Recipes
                        </Link>
                    </Card.Body>
                </Card>  
            </Col>
    );
};

export default AllToysCard;