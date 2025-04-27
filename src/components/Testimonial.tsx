
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonial = ({ quote, author, role, image }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            {image ? (
              <img src={image} alt={author} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-teal-100 text-teal-500 text-xl font-bold">
                {author.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      
      <blockquote className="text-gray-600 italic">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default Testimonial;
