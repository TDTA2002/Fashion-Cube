import React, { useEffect } from 'react';
import './SCSS/setion.scss';

export default function Section3() {
  useEffect(() => {
    function handleScroll() {
      const scrollableList = document.querySelector('.scrollable-list');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementOffset = scrollableList.offsetTop;

      if (scrollTop > elementOffset - window.innerHeight + 200) {
        scrollableList.classList.add('show');
      } else {
        scrollableList.classList.remove('show');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="handrow">
      <div className="row scrollable-list">
        <div className="col-xs-6 col-sm-3">
          <i style={{ display: 'flex' }} className="fas fa-truck"></i>
          <div>
            <p style={{ margin: 0 }}>FREE SHIPPING</p>
            <p>Suffered Alteration in Some Form</p>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <i style={{ display: 'flex' }} className="fas fa-money-bill-1"></i>
          <div>
            <p style={{ margin: 0 }}>CASH ON DELIVERY</p>
            <p>The Internet Tend To Repeat</p>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <i style={{ display: 'flex' }} className="fas fa-arrow-rotate-left"></i>
          <div>
            <p style={{ margin: 0 }}>45 DAYS RETURN</p>
            <p>Making it Look Like Readable</p>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <i style={{ display: 'flex' }} className="fas fa-clock"></i>
          <div>
            <p style={{ margin: 0 }}>OPENING ALL WEEK</p>
            <p>8AM-09PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
