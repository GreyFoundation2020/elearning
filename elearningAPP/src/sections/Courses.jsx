import React from "react";
import uuid from "react-uuid";
import CourseCard from "../components/CourseCard";
import { courseCardData } from "./../constants";

const Courses = () => {
  return (
    <section className='light-gradient pb-36 desktop:pt-48'>
      <div className='container'>
        <div className='grid gap-x-7 gap-y-20 tablet:auto-rows-[322px] desktop:grid-cols-3'>
          <div className='secondary-gradient rounded-2xl px-8 py-16'>
            <h2 className='h2 font-extrabold text-white'>
              Check out our most popular courses!
            </h2>
          </div>

          {courseCardData.map(item => (
            <CourseCard
              key={uuid()}
              icon={item.icon}
              title={item.title}
              description={item.description}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
