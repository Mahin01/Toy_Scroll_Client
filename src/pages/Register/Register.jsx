
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';


const Register = () => {
    
    return (
            <div className="container mb-5">
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-4 fw-bold ls-tight">
                            Join <br />
                            <span className="text-uppercase text-italic site-title">Toy scroll</span> Today & avail the best you can.
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
                            <div className="card-body py-5 px-md-5">
                            <form onSubmit={handleRegister}>
                                <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" id="form3Example1" className="form-control" name="name" />
                                    <label className="form-label" htmlFor="form3Example1">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                    <input type="text" id="form3Example2" className="form-control" name='email'/>
                                    <label className="form-label" htmlFor="form3Example2">Email Address</label>
                                    </div>
                                </div>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control" name='avatar'/>
                                <label className="form-label" htmlFor="form3Example3">Photo URL</label>
                                </div>

                                <div className="form-outline mb-4">
                                <input type="password" id="form3Example4" className="form-control" name='pwd'/>
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                Sign up
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

export default Register;