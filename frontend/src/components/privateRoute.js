import React, { Component, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
    
//     <Route
//         {...rest}
//         render={props => isAuthenticated && loading ? (<Component {...props} />) : (<Redirect to='/login' />)}
//     />
// );

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     auth: state.auth
// });


const PrivateRoute = ({component:Component, ...rest }) => {

    const [isAuthenticated, setIsAthenticated] = useState(true);

    useEffect(() => {

        const checkAuthetication = () => {
            const isLoggedIn = localStorage.getItem('token');
            setIsAthenticated(!!isLoggedIn)
            console.log(isLoggedIn);
        };

        checkAuthetication();
        // console.log(isAuthenticated);
    }, []);

    // let auth = useAuth();
    return (
       
    <Route
        {...rest}
        render={(props) => isAuthenticated  ? (<Component {...props} />) : (<Redirect to='/login' />)}
    />
    )
          }



PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {Component})(PrivateRoute);