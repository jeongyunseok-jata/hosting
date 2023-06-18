import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../app/globals.css';

export default function Home() {
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    const calculateStars = () => {
      const screenWidth = window.innerWidth;
      const starCount = Math.floor((screenWidth + 600) / 4);
      const starArray = Array.from({ length: starCount }, (_, index) => ({
        id: index + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1.6 + Math.random() * 0.9, // 크기 범위 수정
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
        opacity: .2,
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
    <div className="h-screen bg-star">
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
          }}
        ></animated.div>
      ))}
      <p className='text-4xl font-bold text-white text-center contact-center'>first 호스팅</p>
    </div>
  );
}
