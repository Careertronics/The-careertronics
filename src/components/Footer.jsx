import React from 'react';
import Image from 'next/image';
const Footer = () => {
    return (
      <>
      <div className="bg-slate-50 pt-10 h-full">
      <footer className="relative flex justify-center bg-black text-white py-10 lg:min-h-[550px] border-b border-gray-200 bg-[url('/Footerbggg.png')] bg-cover bg-center">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
  
          {/* Content */}
          <div className="relative flex flex-col mx-5 justify-around py-5 items-center md:items-start container w-full h-full">
            {/* Top Section - Logo and Description */}
            <div className="mb-12 w-full">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-10 mb-4">
              <Image src="/FooterLogo.png" alt="Careertronics" width={112} height={80} />
                <div>
                  <h2 className="text-red-600 flex justify-center md:justify-start font-semibold md:flex-none text-2xl mb-2">
                    Careertronic
                  </h2>
                  <p className="text-gray-300 text-center  md:text-start px-5 sm:px-32 md:px-0 text-md max-w-2xl">
                    Explore our services today and discover how we can empower your business or career.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-full">
              {/* Products Section */}
              <div className="flex flex-col  items-center">
                <h3 className="font-semibold text-lg mb-4">Products</h3>
                <ul className="space-y-2 flex flex-col justify-center items-center">
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">MDBootstrap</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">MDWordPress</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">BrandFlow</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Bootstrap Angular</a></li>
                </ul>
              </div>
  
              {/* Useful Links Section */}
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-4">Useful links</h3>
                <ul className="space-y-2 flex flex-col justify-center items-center">
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Your Account</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Become an Affiliate</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Shipping Rates</a></li>
                </ul>
              </div>
  
              {/* Support Section */}
              <div className="flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-2 flex flex-col justify-center items-center">
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Help</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white underline-animation">Customer care</a></li>
                </ul>
              </div>
  
              {/* Contact Section */}
              <div className="flex flex-col  items-center">
                <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
                <p className="text-gray-300 mb-2">Raipur, India</p>
                <p className="text-gray-300 mb-4 text-center">Chanakyans Education Foundation</p>
                <p className="text-gray-300">+ 01 234 567 88</p>
              </div>
            </div>
          </div>
        </footer>
        </div>
        <div className="text-center bg-[#191817] p-3 text-white">
          <article className="text-gray-500 text-sm text-center sm:text-left flex justify-center items-center">
            Copyright © 2024 
            <span className="text-red-500 mx-1">Careertronic Global Services Pvt. Ltd</span> 
            | All rights reserved
          </article>
        </div>
  
        
      </>
    );
  };
  
  export default Footer;
  