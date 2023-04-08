import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  const {isbn13, image, title, subtitle, price} = book 
  return (
    <Link to = {`../book/${isbn13}`}>
       <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={image} alt="book cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />
            <div className='bg-black text-gray-300 font-semibold bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 px-6 py-4 flex flex-col'>
              <p>{title}</p><br/>
              <p>{subtitle.substring(0, 45)}...</p><br/>
              <p className='mt-auto'>Price: {price}</p><br/>
            </div>
        </div>
    </Link>
  );
};

export default Book;