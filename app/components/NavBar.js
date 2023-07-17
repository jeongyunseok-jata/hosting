import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('rgba(255, 255, 255, .94)');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const openDropdown1 = () => {
    setIsOpen1(true);
  };

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };

  const openDropdown2 = () => {
    setIsOpen2(true);
  };

  const closeDropdown2 = () => {
    setIsOpen2(false);
  };

  const mobileOpen1 = () => {
    toggleDropdown1();
    closeDropdown2();
  };

  const mobileOpen2 = () => {
    toggleDropdown2();
    closeDropdown1();
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='left-0 top-0 w-full z-10 ease-in duration-200 px-4'
    >
      <div className="container mx-auto">
        <div className='max-w-[1536px] m-auto flex justify-between items-center p-1 font-semibold text-white'>
          <Link href='/'>
            <h1 style={{ color: `${textColor}` }} className='text-2xl pl-4 py-3'>
              First 호스팅
            </h1>
          </Link>
          <ul className='hidden px-4 sm:flex'style={{ color: `${textColor}` }}>
            <li
              className='text-lg pr-4 pt-1'
              onMouseEnter={openDropdown1}
              onMouseLeave={closeDropdown1}
            >
              <p
                href='/price-kh'
                className='cursor-pointer'
                onClick={toggleDropdown1}
              >
                가격표
                <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(255,255,255)' viewBox="0 0 512 512" className='mt-1 ml-1 w-4 h-4 float-right'>
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>

              </p>
              {isOpen1 && (
                <div
                  className="absolute mt-2 bg-white rounded text-center text-lg"
                  onMouseEnter={openDropdown1}
                  onMouseLeave={closeDropdown1}
                >
                  <ul>
                    <Link href='/price-kh'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">가상 서버</li>
                    </Link>
                    <Link href='/price-dc'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">단독 서버</li>
                    </Link>
                    <Link href='/wait'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">코로케이션</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li
              className='text-lg pr-4 pt-1'
              onMouseEnter={openDropdown2}
              onMouseLeave={closeDropdown2}
            >
              <p
                href=''
                className='cursor-pointer'
                onClick={toggleDropdown2}
              >
                약관
                <svg xmlns="http://www.w3.org/2000/svg" fill='rgb(255,255,255)' viewBox="0 0 512 512" className='mt-1 ml-1 w-4 h-4 float-right'>
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </p>
              {isOpen2 && (
                <div
                  className="absolute mt-2 bg-white rounded text-center text-lg"
                  onMouseEnter={openDropdown2}
                  onMouseLeave={closeDropdown2}
                >
                  <ul>
                    <Link href='/wait'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">서비스 이용약관</li>
                    </Link>
                    <Link href='/wait'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">주의사항</li>
                    </Link>
                    <Link href='/wait'>
                      <li className="px-5 py-3 text-black hover:bg-gray-300 rounded">개인정보처리방침</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className='text-lg pr-4 pt-1'>
              <Link href='https://stats.uptimerobot.com/Jj0vRHBrlk'>문서DB</Link>
            </li>
            <li className='text-lg pr-4 pt-1'>
              <Link href='https://pf.kakao.com/_qcQxcK'>문의하기</Link>
            </li>
            <li className='text-lg bg-blue-600 text-white px-5 py-1 rounded-full'>
              <Link href='/wait'>콘솔</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div
            onClick={handleNav}
            className={
              nav
                ? 'block absolute'
                : 'sm:hidden'
            }
            style={{ color: `${textColor}` }}
          >
            
            {nav ? (
              <div
                className='h-screen w-full float-right m-0 p-0 block relative'
              ></div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 13 24" fill={textColor} className='w-9 h-9 mr-4'>
                <path d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4 C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z" fill="currentColor"></path>
              </svg>


            )}
          </div>
          <div
            onClick={handleNav}
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-menuOut translate-all duration-[2ms]'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 z-10'
            }
            style={{ color: `${textColor}` }}
          ></div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 w-2/4 h-screen bg-menu transition-all duration-300 transform translate-x-0 z-999'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0'
            }
          >
            {nav && (
              <ul className='w-full text-lg font-normal'>
                <li className='text-2xl p-7 pb-12'>
                  <Link href='https://pf.kakao.com/_qcQxcK'>First 호스팅</Link>
                </li>
                <li
                  className=''
                  onClick={mobileOpen1}
                >
                  <p
                    href='/price-kh'
                    className='cursor-pointer pb-4 pl-7'
                  >
                    가격표
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-5 h-5 float-right mr-7 mt-2'>
                      <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" fill="currentColor"></path>
                    </svg>
                  </p>
                  {isOpen1 && (
                    <div className="relative mt-2">
                      <ul className='w-full pl-14 text-base'>
                        <Link href='/price-kh'>
                          <li className="pb-4">가상 서버</li>
                        </Link>
                        <Link href='/price-dc'>
                          <li className="pb-4">단독 서버</li>
                        </Link>
                        <Link href='/wait'>
                          <li className="pb-4">코로케이션</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className=''
                  onClick={mobileOpen2}
                >
                  <p
                    href=''
                    className='cursor-pointer pb-4 pl-7'
                  >
                    약관
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-5 h-5 float-right mr-7 mt-2'>
                      <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" fill="currentColor"></path>
                    </svg>

                  </p>
                  {isOpen2 && (
                    <div className="relative mt-2 text-base pl-14">
                      <ul className='w-full'>
                        <Link href='/wait'>
                          <li className="pb-4">서비스 이용약관</li>
                        </Link>
                        <Link href='/wait'>
                          <li className="pb-4">주의사항</li>
                        </Link>
                        <Link href='/wait'>
                          <li className="pb-4">개인정보처리방침</li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
                <li className='pb-4 pl-7'>
                  <Link href='https://stats.uptimerobot.com/Jj0vRHBrlk'>문서DB</Link>
                </li>
                <li className='pb-4 pl-7'>
                  <Link href='https://pf.kakao.com/_qcQxcK'>문의하기</Link>
                </li>
                <li className='pl-7'>
                  <Link href='/wait'>콘솔</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
