import { createContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToysRow = ({ addedToy, handleDelete }) => {
    const {user} = createContext(AuthContext);
    const {_id, ToyName, seller_name, seller_email, quantity, price, Photo_URL } = addedToy;

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
                                <button className='btn btn-primary me-2'data-toggle="modal" data-target="#exampleModalCenter">Update</button>
                                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>                         
                    </tbody>
                </table>   
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Update Toy Data</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className=" mb-lg-0">
                        <div className="card">
                            <div className="card-body py-5 px-md-5">
                            <form>
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text"  defaultValue={user?.seller_name} id="form3Example1" className="form-control" name="name" placeholder={user?.seller_name} disabled/>
                                    <label className="form-label" htmlFor="form3Example1">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="email" defaultValue={user?.seller_email} id="form3Example2" className="form-control" name='email' disabled/>
                                    <label className="form-label" htmlFor="form3Example2">Email Address</label>
                                    </div>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" defaultValue={user?.ToyName} id="form3Example1" className="form-control" name="ToyName" disabled/>
                                    <label className="form-label" htmlFor="form3Example1">Toy Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" id="form3Example2" className="form-control" name='quantity'/>
                                    <label className="form-label" htmlFor="form3Example2">Quantity</label>
                                    </div>
                                </div>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" defaultValue={user?.Photo_URL}className="form-control" name='Photo_URL' disabled/>
                                <label className="form-label" htmlFor="form3Example3">Photo URL</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text" id="form3Example4" className="form-control" name='price'/>
                                <label className="form-label" htmlFor="form3Example4">Price</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <textarea className="form-control" id="textAreaExample1" rows="5" placeholder="Toy Description" name="description"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                Update Toy
                                </button>
                            </form>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
    );
};

export default MyToysRow;