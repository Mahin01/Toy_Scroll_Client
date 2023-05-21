import React from 'react';

const MyToysRow = ({ addedToy }) => {
    const {_id, ToyName, seller_name, seller_email, quantity, price, Photo_URL } = addedToy;
    return (
        <div className='container'>
           <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Clark</td>
                            <td>Kent</td>
                            <td>clarkkent@mail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                        </tr> 
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                        </tr>                   
                    </tbody>
                </table>
        </div>
    );
};

export default MyToysRow;