// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProviders';

// const PrivateRoute = ({ children }) => {
//     const {user, loading} = useContext(AuthContext);

//     if(loading){
//         return <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//         <div className="progress-bar bg-success" style="width: 25%"></div>
//       </div>
//     }

//     if(user){
//         return children;
//     }
//     return <Navigate to="/login" replace={true} ></Navigate>;
// };

// export default PrivateRoute;