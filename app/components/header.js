'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import NavBar from './NavBar';

const Header = (props1) => {
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    const calculateStars = () => {
      const screenWidth = window.innerWidth;
      const starCount = Math.floor((screenWidth + 600) / 4);
      const starArray = Array.from({ length: starCount }, (_, index) => ({
        id: index + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1.6 + Math.random() * 0.7,
        ShadowSize: 1.6 + Math.random() * 1.2,
        animationDelay: Math.random() * 4,
        animationDuration: 8 + Math.random() * 2,
      }));
      setStars(starArray);
    };

    calculateStars();
    window.addEventListener('resize', calculateStars);

    return () => {
      window.removeEventListener('resize', calculateStars);
    };
  }, []);

  const [props, set] = useSpring(() => ({
    from: {
      opacity: 0,
      scale: 0,
    },
  }));

  useEffect(() => {
    const calculateStars = () => {
      set({
        opacity: 0.2,
        scale: 1,
        from: {
          opacity: 0,
          scale: 0,
        },
        config: {
          tension: 100,
          friction: 10,
        },
      });
    };

    calculateStars();
  }, []);

  return (
    <header className="w-full h-[90vh] mb-16 bg-star relative">
      <NavBar />
      <div className="text-center header-center container-2 mx-auto">
        <h1 className="text-4xl font-bold text-white show-animation">
          {props1.title.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </h1>
        <p className="text-lg font-semibold text-[#ddd] mt-1 mb-10 show-animation ">
          {props1.subtitle}
        </p>
        <Link
          href="https://pf.kakao.com/_qcQxcK"
          className="text-lg px-16 py-3 text-black tracking-wider rounded-md bg-white hover:bg-slate-200"
        >
          문의하기
        </Link>
      </div>
      {stars.map((star) => (
        <animated.div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
            transform: props.scale.interpolate((s) => `scale(${s})`),
            opacity: props.opacity,
            boxShadow: `0 0 ${star.ShadowSize}px rgba(255, 255, 255, 0.9)`,
          }}
        ></animated.div>
      ))}
    </header>
  );
};

export default Header;
