import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Foot from '../assets/footer.png'

function Footer() {
    // h-[100svh] bg-contain bg-no-repeat mt-40 text-black py-8
    // flex h-[80svh]  items-center relative justify-center mb-4
    // w-full h-full object-contain z-0
    // text-9xl absolute items-center text-black mb-10 custom-text z-10
    // flex h-0 -top-48 justify-center relative space-x-6
    return (
        <footer className=" lg:h-[100svh] mt-48 lg:mt-96 bg-contain bg-no-repeat  text-black py-8 " >
            <div className=" flex h-[80svh]  items-center relative justify-center mb-4" >
                <img src={Foot} alt="" className='w-full h-full object-contain z-0'/>
                <h1 className="text-9xl absolute items-center text-black mb-10 custom-text z-10">2024</h1>
            </div>
            <div className="flex h-0 -top-48 justify-center relative space-x-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl  hover:scale-150">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-150 ">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:scale-150 ">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="mailto:someone@example.com" className="text-3xl hover:scale-150  ">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
