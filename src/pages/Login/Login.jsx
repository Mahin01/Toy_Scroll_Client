const Login = () => {
   
    return (
        <div className='container login-container my-4'>
        <div className="d-lg-flex half">
            <div className="col col-lg-5 bg order-md-2">
                <img style={{ width:"100%", height:"100%" }} src='banner.jpg' />
            </div>
            <div className="contents order-sm-1">
            <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
            <div className="mb-4">
            <h3>Sign In</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            </div>
            <form onSubmit={HandleSignIn}>
            <div className="form-group first">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group last mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
            </div>
            <div className="d-flex mb-5 align-items-center">
            <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
            </label>
            <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
            </div>
            <input type="submit" value="Log In" className="btn btn-block btn-primary" />
            <span className="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>
            <div className="social-login">
            <a href="#" className="facebook btn d-flex justify-content-center align-items-center">
            <span className="icon-facebook mr-3"></span> Login with Facebook
            </a>
            <a href="#" className="twitter btn d-flex justify-content-center align-items-center">
            <span className="icon-twitter mr-3"></span> Login with Twitter
            </a>
            <a href="#" className="google btn d-flex justify-content-center align-items-center">
            <span className="icon-google mr-3"></span> Login with Google
            </a>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;