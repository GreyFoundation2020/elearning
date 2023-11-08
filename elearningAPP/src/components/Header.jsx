import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className='py-2'>
      <div className='container'>
        <nav className='flex items-center justify-between'>
          <a href='#home'>
            <h1 className='w-[90px] text-white text-bold desktop:w-[auto]'>eLearningApp®</h1>
          </a>
          <ul className="list-section flex text-white justify-around w-6/12 text-xs">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <Button primary>Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
