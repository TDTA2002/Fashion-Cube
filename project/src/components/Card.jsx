import React, { useEffect, useState } from 'react';
import bannerImg1 from './images/banner_1.jpg';
import bannerImg2 from './images/banner_2.jpg';
import bannerImg3 from './images/banner_3.jpg';
import './SCSS/Card.scss';

export default function Banners() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = window.innerHeight / 2;

            if (scrollPosition > triggerPosition) {
                setShow(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`container-products${show ? ' show' : ''}`}>
            <div className='bg-image'>
                <img src={bannerImg1} className='img-fluid' alt='Sample' />
                <div className='mask'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <h5 className='mb-4'>WOMEN'S</h5>
                    </div>
                </div>
            </div>
            <div className='bg-image'>
                <img src={bannerImg2} className='img-fluid' alt='Sample' />
                <div className='mask'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <h5 className='mb-4'>ACCESSORIES'S</h5>
                    </div>
                </div>
            </div>
            <div className='bg-image'>
                <img src={bannerImg3} className='img-fluid' alt='Sample' />
                <div className='mask'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <h5 className='mb-4'>MEN'S</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
