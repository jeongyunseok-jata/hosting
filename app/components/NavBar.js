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
            <li className='p-4'
              onMouseEnter={openDropdown1}
              onMouseLeave={closeDropdown1}
            >
              <p href='/price'
                className='cursor-pointer'
                onClick={toggleDropdown1}
              >가격표</p>
              {isOpen1 && (
              <div
                className="absolute mt-2 bg-white rounded text-center"
                onMouseEnter={openDropdown1}
                onMouseLeave={closeDropdown1}
              >
                <ul>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">가상 서버</li></Link>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">단독 서버</li></Link>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">코로케이션</li></Link>
                </ul>
              </div>
            )}
            </li>
            <li className='p-4'
              onMouseEnter={openDropdown2}
              onMouseLeave={closeDropdown2}
            >
              <p href=''
                className='cursor-pointer'
                onClick={toggleDropdown2}
              >약관</p>
              {isOpen2 && (
              <div
                className="absolute mt-2 bg-white rounded text-center"
                onMouseEnter={openDropdown2}
                onMouseLeave={closeDropdown2}
              >
                <ul>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">서비스 이용약관</li></Link>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">주의사항</li></Link>
                  <Link href='/price'><li className="px-5 py-3 text-black hover:bg-gray-300 rounded">개인정보처리방침</li></Link>
                </ul>
              </div>
            )}
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