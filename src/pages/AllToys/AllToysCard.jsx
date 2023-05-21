import { Button, Card, Col } from "react-bootstrap";
import "./AllToysCard.css";

const AllToysCard = ({toyItem}) => {
    console.log(toyItem);

    const {_id, ToyName, Seller, SubCategory, AvailableQuantity, Price, Photo_URL } = toyItem;
    return (
              <Col xs={12} md={4}>
                <Card>
                    <Card.Img style={{ height:'200px' }} variant="top" src="Lahmacun.jpg" />
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

                        <Button className='read-more'>View Details</Button>
                    </Card.Body>
                </Card>  
            </Col>
    );
};

export default AllToysCard;