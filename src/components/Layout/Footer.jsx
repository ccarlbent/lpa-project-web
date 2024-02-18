import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <footer className='bg-dark text-light pt-5 pb-4'>
        <div className='container text-center text-md-left'>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h3>Contact Us</h3>
            <hr/>
            <p>Email : carlvint.v1@gmail.com</p>
            <p>Phone Number : 123456789</p>
            <p>Address : Brisbane, 4000, QLD, Australia</p>
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h3>About Us</h3>
            <hr/>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
          </div>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h3>Follow Us</h3>
            <hr/>
            <form className='web-icon'>
              <FaFacebook/>
              <FaGithub />
              <FaGoogle />
              <FaTwitter />
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
