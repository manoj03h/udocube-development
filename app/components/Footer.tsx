import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='flex flex-col'>
      <div>
        <ul>
          <li className=''>
            <Link href="tel:+917870175908"><FaPhone />Call Now</Link>
          </li>
          <li className=''>
            <Link 
              href="mailto:info@ufocube.com?subject=Inquiry&body=Hello, I would like to know more about your services."
            >
              <FaEnvelope />
              Email Us
            </Link>
          </li>
          <li className=''>
            <Link href="tel:+917870175908"><FaLocationArrow />Location</Link>
          </li>
        </ul>
      </div>
      <div className='bg-black px-20 py-10 flex justify-center items-center text-white'>
        <p>Copyright 2025 | Designed By <Link className="text-yellow-500 text-sm" href="https://ufocube.com">UFOCube</Link></p>
      </div>
    </section>
  )
}

export default Footer
