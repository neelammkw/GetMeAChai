"use client"
import React from 'react';

const  Footer = () => {
    const currentYear = new Date().getFullYear()
return (
    <footer className="text-white flex bg-black  justify-center px-4 h-16 items-center ">
    <p className='text-center'> Copyright &copy; {currentYear} Get me A Chai - All right reserved!</p>
    </footer>

)}
export default Footer
