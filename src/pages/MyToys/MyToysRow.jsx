import { Link } from "react-router-dom";

const MyToysRow = ({ addedToy, handleDelete}) => {

    return (
        <div className='container'>
           <table className="table table-striped">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Toy Photo</th>
                    <th>Toy Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Quantity</th>
                    <th>Sub Category</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   { addedToy.map((item, index) => ( 
                    <tr key={item._id}>
                        <td> {index + 1} </td>
                        <td>{item.Photo_URL}</td>
                        <td>{item.ToyName}</td>
                        <td>{item.seller_name}</td>
                        <td>{item.seller_email}</td>
                        <td>{item.quantity}</td>
                        <td>{item.subCategory}</td>
                        <td>{item.rating}</td>
                        <td>{item.price}</td>
                        <td>
                        <Link to={`/update-toy/${item?._id}`} className='btn btn-primary me-2' >Update</Link>
                        <button onClick={() => handleDelete(item?._id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToysRow;