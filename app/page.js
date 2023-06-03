'use client'

import Image from 'next/image'
import { Client } from '@notionhq/client';
import { useState, useRef, useEffect } from 'react';

import Card1 from './components/index-card'
import Faq from './components/faq'
import Review from './components/review-card'
import Indexbox from './components/index-box'
import NavBar from './components/NavBar'
import Contact from './components/Contact';

import cardimg1 from '../public/icon/ddos.svg'
import cardimg2 from '../public/icon/earth.svg'
import cardimg3 from '../public/icon/infra.svg'
import cardimg4 from '../public/icon/headset.svg'
import cardimg5 from '../public/icon/price.svg'
import Link from 'next/link';

export default function Home() {
  
  return (
    <>
    
      <section className='overflow-hidden whitespace-nowrap container-2 mx-auto mb-32'>
        <h1 className='text-3xl font-bold mb-10' id='show'>이용자들의 생생한 후기</h1>
        <div className='slide-animation'>
          <Review
            content={['1친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['2친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['3친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['4친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['5친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['6친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['1친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['2친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['3친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['4친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['5친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
          <Review
            content={['6친절하시고 답변도 빠르게 확인해 주시고', '처음 호스팅 사는 건데 친절하게 다 설명해', '주셔서 좋습니다.']}
          />
        </div>
      </section>
      <section className='mb-20'>
        <div className="container mx-auto px-4">
          <ul className="shadow-box">
            <h1 className='text-3xl font-bold mb-10'>자주 묻는 질문</h1>
            <Faq />
          </ul>
        </div>
      </section>
      <Contact />
    </>
  )   
}