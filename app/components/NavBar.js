import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-200'
    >
      <div className="container mx-auto">
        <div className='max-w-[1536px] m-auto flex justify-between items-center p-1 text-white'>
          <Link href='/'>
            <h1 style={{ color: `${textColor}` }} className='font-semibold text-2xl pl-4 py-1'>
              First 호스팅
            </h1>
          </Link>
          <ul className='hidden sm:flex' style={{ color: `${textColor}` }}>
            <li className='p-4'>
              <Link href='/price'>가격표</Link>
            </li>
            <li className='p-4'>
              <Link href=''>약관</Link>
            </li>
            <li className='p-4'>
              <Link href='https://stats.uptimerobot.com/Jj0vRHBrlk'>업타임</Link>
            </li>
            <li className='p-4'>
              <Link href='https://pf.kakao.com/_qcQxcK'>상담</Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className='block sm:hidden z-10' style={{ color: `${textColor}` }}>
            {nav ? (
              <AiOutlineClose size={26} style={{ color: '#fff' , marginRight: '11px' }} />
            ) : (
              <AiOutlineMenu size={26} style={{ color: `${textColor}`, marginRight: '11px' }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#2656A6] text-center'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#2656A6] text-center'
            }
          >
            <ul>
              <li onClick={handleNav} className='p-4 text-3xl font-semibold hover:text-gray-300'>
                <Link href='/price'>가격표</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-3xl font-semibold hover:text-gray-300'>
                <Link href='/'>약관</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-3xl font-semibold hover:text-gray-300'>
                <Link href='https://stats.uptimerobot.com/Jj0vRHBrlk'>업타임</Link>
              </li>
              <li onClick={handleNav} className='p-4 text-3xl font-semibold hover:text-gray-300'>
                <Link href='https://pf.kakao.com/_qcQxcK'>상담</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;