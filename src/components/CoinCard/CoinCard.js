import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {

    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            <Link to={`/coin-details/${coin.id}`}>
            {/* <Link to='/coins'> */}

                <div className='flex gap-4 justify-between items-center'>
                    <div className='flex-shrink-0 '>
                        <img className='mx-auto object-cover rounded-full h-16 w-16' src={coin.image} alt="coinImg" />
                    </div>
                    <div className='flex flex-col justify-end '>
                        <span className='text-gray-600 font-medium flex justify-end'>{coin.name}</span>
                        <span className='rounded text-gray-400 text-xs py-1 flex justify-end'>{coin.symbol}</span>
                        {/* <span className='bg-orange-300 rounded text-black-400 text-xs py-1 '>{coin.symbol}</span> */}
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default CoinCard;