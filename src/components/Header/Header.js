import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between '>
            <div className='hidden md:block'>
                <Link to="/" className='font-sans font-bold text-xl text-gray-600 hover:text-black'>
                    Crypto Cafe
                </Link>
            </div>
            <div className='flex gap-4 text-xl font-bold md:px-20 font-sans text-gray-500'>
                <CustomLink to='/' className='md:pr-8 '>Home</CustomLink>
                <CustomLink to='/coins' className='md:pr-8'>Coins</CustomLink>
                <CustomLink to='/contact' className='md:pr-8'>Contact</CustomLink>
                <CustomLink to='/about' className='md:pr-8'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;