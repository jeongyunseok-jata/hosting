'use client'

import Image from 'next/image';
import Link from 'next/link';

import NavBar from './NavBar';

const Header = (props) => {
  return (
    <header className='w-full h-[580px] mb-16 bg-header'>
      <NavBar />
      <div className='text-center header-center container-2 mx-auto'>
        <h1 className='text-4xl font-bold text-white show-animation'>
          {props.title.map((line, index) => (
            <p key={index} className='mb-2'>{line}</p>
          ))}
        </h1>
        <p className='text-lg font-semibold text-[#ddd] mt-1 mb-10 show-animation '>{props.subtitle}</p>
        <Link href='https://pf.kakao.com/_qcQxcK' className='text-lg px-16 py-3 text-black tracking-wider rounded-md bg-white hover:bg-slate-200'>문의하기</Link>
      </div>
    </header>
  );
}

export default Header;
