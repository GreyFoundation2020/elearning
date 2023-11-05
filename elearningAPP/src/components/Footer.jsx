import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className='bg-blue-dark py-7'>
      <div className='container flex items-center justify-between'>
        <h1 className='text-white'>eLearningAPP®</h1>
        <Button primaryGradient>Get Started</Button>
      </div>
    </footer>
  );
};

export default Footer;
