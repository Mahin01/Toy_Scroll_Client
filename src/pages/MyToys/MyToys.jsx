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

    return (
        <div>
            {MyAddedToys.map( item => <MyToysRow
                key={item._id}
                addedToy={item}
            >
            </MyToysRow>)}
        </div>
    );
};

export default MyToys;