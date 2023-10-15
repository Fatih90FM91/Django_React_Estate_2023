import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Alert from './Alert';
import PropTypes from 'prop-types';

const footer = ({ auth: { isAuthenticated, loading } }) => {
    // const authLinks = (
    //     <a className='navbar__top__auth__link' onClick={logout} href='#!'>Logout</a>
    // );

    // const guestLinks = (
    //     <Fragment>
    //         <Link className='navbar__top__auth__link' to='/login'>Login</Link>
           
    //         <link rel="stylesheet" href="" />
            
    //         <Link className='navbar__top__auth__link' to='/signup'>Sign Up</Link>
    //     </Fragment>
    // );

    return (
        
        <Fragment>
           
            {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" /> */}
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            <footer id="dk-footer" class="dk-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                    <div class="dk-footer-box-info">
                        <a href="index.html" class="footer-logo">
                            <img src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3771089.jpg&fm=jpg" alt="footer_logo" class="img-fluid" />
                        </a>
                        <p class="footer-info-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <div class="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                      
                    </div>
                    
                    <div class="footer-awarad">
                        <img src="https://cdn-icons-png.flaticon.com/512/6676/6676691.png" alt="" />
                        <p>Best Accommondation Company 2023</p>
                    </div>
                </div>
              
                <div class="col-md-12 col-lg-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us">
                                <div class="contact-icon">
                                    <i class="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                
                                <div class="contact-info">
                                    <h3>Maria Johansen</h3>
                                    <p>5353 Road Avenue</p>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                        <div class="col-md-6">
                            <div class="contact-us contact-us-last">
                                <div class="contact-icon">
                                    <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                
                                <div class="contact-info">
                                    <h3>95 711 9 5353</h3>
                                    <p>Give us a call</p>
                                </div>
                              
                            </div>
                            
                        </div>
                       
                    </div>
                    
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget footer-left-widget">
                                <div class="section-heading">
                                    <h3>Useful Links</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                       
                        <div class="col-md-12 col-lg-6">
                            <div class="footer-widget">
                                <div class="section-heading">
                                    <h3>Subscribe</h3>
                                    <span class="animate-border border-black"></span>
                                </div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <form action="#">
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <input type="email" class="form-control" placeholder="Email Address" />
                                            <button type="submit">
                                                <i class="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                               
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div>
              
            </div>
            
        </div>
        


        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span>Copyright © 2023, All Right Reserved Fatih</span>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
                
            </div>
           
        </div>
      
        <div id="back-to-top" class="back-to-top">
            <button class="btn btn-dark" title="Back to Top">
                <i class="fa fa-angle-up"></i>
            </button>
        </div>
       
            </footer>

        </Fragment>
    );
};

footer.propTypes = {
    
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(footer);