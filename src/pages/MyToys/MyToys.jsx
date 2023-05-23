import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [MyAddedToys, setMyAddedToys] = useState([]);
    const dynamicTitle = "Toy Scroll|My Toys";
    const url = `https://toy-scroll-server.vercel.app/my-toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAddedToys(data))
    }, [url]);

     // Handle Delete Data
     const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'})
            .then((result) => {
            if (result.isConfirmed) {
            fetch(`https://toy-scroll-server.vercel.app/my-toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        const remaining = MyAddedToys.filter(myToys => myToys._id !== id);
                        setMyAddedToys(remaining);
                    }
                })

            }
        })
    }
    return (
        <div>
            <Helmet> {dynamicTitle} </Helmet>
            <MyToysRow
                key={MyAddedToys._id}
                addedToy={MyAddedToys}
                handleDelete={handleDelete}
            >
            </MyToysRow>
        </div>
    );
};

export default MyToys;