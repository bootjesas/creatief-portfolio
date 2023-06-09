import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index, testimonial, name, company, image, designation}) => {
  const shouldDisplayTestimonials = false; // set to true if you want to display testimonials

  return (
    <motion.div
      variants={textVariant()}
      style={{display: shouldDisplayTestimonials ? 'block' : 'none'}}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className='text-white -tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img 
            className='w-16 h-16 rounded-full'
            src={image}
            alt={`feedback-by-${name}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      
      
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
