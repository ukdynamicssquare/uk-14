"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

const TimerModal = () => {
  const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      const cookieExists = Cookies.get('popupModalShown');
      if (!cookieExists) {
        const timeoutId = setTimeout(() => {
          setShowModal(true);
        }, 15000); // Delay of 15 seconds

        return () => {
          clearTimeout(timeoutId);
        };
      }
  
  }, []);

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     const cookieExists = Cookies.get('popupModalShown');
  //     if (!cookieExists) {
  //       const timeoutId = setTimeout(() => {
  //         setShowModal(true);
  //       }, 15000); // Delay of 15 seconds

  //       return () => {
  //         clearTimeout(timeoutId);
  //       };
  //     }
  //   }
  // }, []);



  const handleCloseModal = () => {
    Cookies.set('popupModalShown', true, { expires: 1 });
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className='backdrop-mod backdrop-mod-d' id='popuphide'>
          <div className="popup-cust">
            <div className="modal-content">
              <button className='bbt' onClick={handleCloseModal}>
                <span aria-hidden="true">×</span>
              </button>

              <a 
                href="/the-ultimate-guide-to-microsoft-dynamics-365/" 
                target="_blank" 
                rel="nofollow"
                onClick={handleCloseModal}
              >
                <Image
                  src="/img/guidep-popp-banner.png"
                  alt="guidep-popp-banner"
                  width={1200}
                  height={796}
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </a>
              {/* <a 
                href="https://forms.reg.buzz/subcon-2026/?exhibitor-inviter=dynamics-square" 
                rel="nofollow"
                onClick={handleCloseModal}
              >
                <img src="/img/regi-big-pic.png" alt="regi-big-pic" />
              </a> */}

              <div className="buttonn-clo">
               
        
                {/* <a
                  href="https://www.forbes.com/councils/forbestechcouncil/2025/09/19/how-to-integrate-generative-ai-as-a-strategic-partner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseModal}
                  className="btn btn-redirect"
                >
                  Get Insights
                </a>
  
                <button onClick={handleCloseModal} className="btn btn-ttt">
                  Stay on site
                </button> */}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerModal;
