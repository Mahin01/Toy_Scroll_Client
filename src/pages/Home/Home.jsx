import { useEffect, useState } from 'react';
import Banner from '../../views/Banner/Banner';
import Collection from '../../views/Collection/Collection';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [carsDataByCat, setCarsDataByCat] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars-by-category')
        .then(res => res.json())
        .then(data => {console.log(data);
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
        </div>
    );
};

export default Home;