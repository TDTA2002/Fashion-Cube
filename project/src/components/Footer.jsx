import React from 'react';
import './SCSS/footer.scss';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="text-center text-lg-start bg-light text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
                    {/* Left */}
                    <div className='couter'>
                        <div className="me-5 d-none d-lg-block">
                            <span style={{ marginRight: '30px', marginTop: '90px' }}>Blog</span>
                            <span style={{ marginRight: '30px' }}>FAQs</span>
                            <span>Contact us</span>
                        </div>
                    </div>
                    {/* Left */}

                    {/* Right */}
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}

                {/* Section: Links  */}
                <section className="d-flex justify-content-center">

                </section>
                {/* Section: Links  */}

                {/* Copyright */}
                <div className="text-center p-4" >
                    © 2018 All Rights Reserverd. This template is made with by <span style={{color:'red'}}>Quintus Labs</span>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>
    );
}
