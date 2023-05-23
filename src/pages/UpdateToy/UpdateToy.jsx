import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const data = useLoaderData();
    const {_id, ToyName, seller_name, seller_email, subCategory, quantity, price, Photo_URL, rating } = data;
    const dynamicTitle = "Toy Scroll|Update Toy";

    const handleUpdatedToy = event =>{
        event.preventDefault()
        const form = event.target;
        const seller_name = form.name.value;
        const seller_email = form.email.value;
        const ToyName = form.ToyName.value;
        const quantity = form.quantity.value;
        const subCategory = form.category.value;
        const Photo_URL = form.Photo_URL.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedToy = {
            seller_name, 
            seller_email, 
            ToyName,
            quantity, 
            subCategory,
            Photo_URL,
            rating,
            price,
            description
        }
        fetch(`https://toy-scroll-server.vercel.app/my-toys/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Toy info Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset();
            }
        }) 
        .catch(error => {
            console.log('Error:', error);
          });
    }
    return (
            <div className="container mb-5">
                <Helmet> {dynamicTitle} </Helmet>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="display-4 fw-bold ls-tight">
                            Welcome to <br />
                            <span className="text-uppercase text-italic site-title">Toy scroll</span>.<p>Sell your toy cars on the go.</p>
                        </h1>
                        <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body py-3 px-md-5">
                            <form onSubmit = {handleUpdatedToy}>
                                <h2 className="text-center mb-4">Update Toy Info</h2>
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text"  defaultValue={seller_name} id="form3Example1" className="form-control" name="name" placeholder={seller_name} disabled/>
                                    <label className="form-label" htmlFor="form3Example1">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="email" defaultValue={seller_email} id="form3Example2" className="form-control" name='email' disabled/>
                                    <label className="form-label" htmlFor="form3Example2">Email Address</label>
                                    </div>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" defaultValue={ToyName} id="form3Example1" className="form-control" name="ToyName" disabled/>
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
                                <select name="category"  defaultValue={subCategory} className="form-select" aria-label="Default select example">
                                    <option selected>Select Your Sub Category</option>
                                    <option value="Sports Car">Sports Cars</option>
                                    <option value="Racing Cars">Racing Cars</option>
                                    <option value="Convertibles">Convertibles</option>
                                    <option value="Classic Cars">Classic Cars</option>
                                    <option value="Monster Trucks">Monster Trucks</option>
                                    <option value="Others">Others</option>
                                </select>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" defaultValue={Photo_URL}className="form-control" name='Photo_URL' disabled/>
                                <label className="form-label" htmlFor="form3Example3">Photo URL</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" defaultValue={rating} className="form-control" name='rating'/>
                                <label className="form-label" htmlFor="form3Example3">Rating</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="text" id="form3Example4" className="form-control" name='price'/>
                                <label className="form-label" htmlFor="form3Example4">Price</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <textarea className="form-control" id="textAreaExample1" rows="5" placeholder="Toy Description" name="description"></textarea>
                                </div>

                                <button type='submit' className="btn btn-primary btn-block mb-4">
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
    );
};

export default UpdateToy;