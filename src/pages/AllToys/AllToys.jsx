import { useEffect, useState } from 'react';
import AllToysCard from './ToysCard/AllToysCard';


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/all-toys")
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="page-title text-center">All Toys</h2>
            <div className="row row-cols-1 g-3">
                {allToys.map( item => <AllToysCard 
                key={item._id}
                toyItem = {item}
                >
                </AllToysCard>)}
            </div>
        </div>
    );
};

export default AllToys;