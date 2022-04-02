import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams([]);
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState([false])

    useEffect(() => {
        setLoading(true)
        const url = (`https://api.coingecko.com/api/v3/coins/${id}`);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                setLoading(false)
            })

    }, [id])
    // id change korte fetch ta jeno abar run hoye khuje value ta dey,,na hole nao pete pare
    return (
        <>
            {
                loading ? (
                    <Spinner></Spinner>
                ) : (
                    <div className='px-4 md:h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                        {/* grid we jonno height dite hoe */}
                        <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:justify-items-around content-center justify-items-center '>
                            <div className='order-2 md:order-1'>
                                <h1 className='text-3xl text-gray-500 '>General Info:</h1>
                                <hr className='bg-gray-600 my-2'></hr>
                                {/* horizontal line */}
                                <h1>Coin Name: <span className='text-gray-400'>{coin.name}</span></h1>
                                <h1>Market Cap Rank: <span className='text-gray-400'>{coin.market_cap_rank}</span></h1>
                                <h1>
                                    Origin:{' '}
                                    <span className='text-gray-400'>{coin.country_origin ? coin.country_origin : 'Not Available'}</span>
                                </h1>
                                <h1>Contract Address: <span className='text-gray-400'>{coin.contract_address ? coin.contract_address : 'Not Available'}</span></h1>
                                <h1>Hashing Algorithm: <span className='text-gray-400'>{coin.hashing_algorithm ? coin.hashing_algorithm : 'Not Available'}</span></h1>
                                <h1>Genesis Date: <span className='text-gray-400'>{coin.genesis_date ? coin.genesis_date : 'Not Available'}</span></h1>
                                <h1>Last Updated: <span className='text-gray-400'>{coin.last_updated ? coin.last_updated : 'Not Available'}</span></h1>

                                <h1 className='text-3xl mt-4 text-gray-500 '>Scores:</h1>
                                <hr className='bg-gray-600 my-2' />
                                <h1>Community Score: <span className='text-gray-400'>{coin.community_score}</span></h1>
                                <h1>Developer Score: <span className='text-gray-400'>{coin.developer_score}</span></h1>
                                <h1>Liquidity Score: <span className='text-gray-400'>{coin.liquidity_score}</span></h1>
                                <h1>Public Interest Score: <span className='text-gray-400'>{coin.public_interest_score}</span></h1>
                            </div>
                            <div className='flex justify-center items-center order-1 md:order-2'>
                                <img src={coin.image?.large ? coin.image.large : 'https://bitcoin.org/img/icons/opengraph.png?1648318071'} alt="coinImg" />
                            </div>
                        </div>

                    </div>

                )
            }
        </>
    );
};

export default CoinDetails;