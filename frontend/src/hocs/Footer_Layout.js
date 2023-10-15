import React from 'react';
import Footer from '../components/Footer';


const Footer_Layout = (props) => (
    <div>
        <Footer />
        {props.children}
    </div>
);

export default Footer_Layout;