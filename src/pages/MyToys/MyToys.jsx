import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [MyAddedToys, setMyAddedToys] = useState([]);
    console.log(MyAddedToys);
    const url = `http://localhost:5000/my-toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAddedToys(data))
    }, [url]);

     // Handle Delete Data
     const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/my-toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = MyAddedToys.filter(myToys => myToys._id !== id);
                        setMyAddedToys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {MyAddedToys.map( item => <MyToysRow
                key={item._id}
                addedToy={item}
                handleDelete={handleDelete}
            >
            </MyToysRow>)}
        </div>
    );
};

export default MyToys;