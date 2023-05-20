import { useEffect, useState } from 'react';
import Banner from '../../views/Banner/Banner';
import Collection from '../../views/Collection/Collection';
import { Container, Row } from 'react-bootstrap';
import CarsByCatTabs from './CarsByCatTabs/CarsByCatTabs';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [carsDataByCat, setCarsDataByCat] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars-by-category')
        .then(res => res.json())
        .then(data => {setCarsDataByCat(data);
        setLoading(false);
        })
        
        .catch(error => console.error(error))
    }, []);
    if(loading){
        return <div className="d-flex align-items-center justify-content-center">
        <div className="my-5 spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
    }
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <Container className='my-5'>
                <h2 className='text-center mb-3'>Shop by category</h2>

                <hr style={{ color:"#48C9D0" , width:"200px", borderWidth: "2px"}} className="mt-2 m-auto mb-5" />

             <Row className='row row-cols-1 g-4 m-auto'>
                {
                <CarsByCatTabs data = {carsDataByCat}>
                </CarsByCatTabs>
                }
             </Row>
            </Container>
        </div>
    );
};

export default Home;