import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ icon, title, description, alt }) => {
  return (
    <article className='flex h-full flex-col rounded-2xl bg-white px-8 pb-10 pt-2 shadow-default'>
      <img className='h-14 w-14' src={icon} alt={alt} />

      <h3 className='h3 mb-5 font-extrabold text-blue-dark'>{title}</h3>
      <p>{description}</p>
      <a
        href='#'
        className='mt-auto text-lg font-bold text-pink transition-all duration-300 hover:text-pink-light'>
        Get Started
      </a>
    </article>
  );
};

CourseCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CourseCard;
