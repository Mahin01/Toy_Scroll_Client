import React from 'react';

const MyToysRow = ({ addedToy }) => {
    const {_id, ToyName, seller_name, seller_email, quantity, price, Photo_URL } = addedToy;

    // Handle Delete Data
    const handleDelete = id => {
       
    }

    return (
        <div className='container'>
           <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toy Photo</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{Photo_URL}</td>
                            <td>{ToyName}</td>
                            <td>{seller_name}</td>
                            <td>{seller_email}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>
                                <button className='btn btn-primary me-2'>Update</button>
                                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>                         
                    </tbody>
                </table>
        </div>
    );
};

export default MyToysRow;