import React, { Component, useEffect, useState } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';




// const PrivateRoute = ({component:Component, ...rest }) => {

//     const [isAuthenticated, setIsAthenticated] = useState(true);

//     useEffect(() => {

//         const checkAuthetication = () => {
//             const isLoggedIn = localStorage.getItem('token');
//             setIsAthenticated(!!isLoggedIn)
//             console.log(isLoggedIn);
//         };

//         checkAuthetication();
//         // console.log(isAuthenticated);
//     }, []);

//     // let auth = useAuth();
//     return (
       
//     <Route
//         {...rest}
//         render={(props) => isAuthenticated  ? (<Component {...props} />) : (<Navigate to='/login' />)}
//     />
//     )
//           }



const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    <Route
        {...rest}
        render={props => !isAuthenticated && !loading ? (<Navigate to='/login' />) : (<Component {...props} />)}
    />
);



PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {Component})(PrivateRoute);