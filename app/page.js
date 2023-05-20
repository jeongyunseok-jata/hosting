'use client'

import Image from 'next/image'
import { Client } from '@notionhq/client';
import { useState, useRef, useEffect } from 'react';

import Card1 from './components/index-card'
import Faq from './components/faq'
import Review from './components/review-card'
import Indexbox from './components/index-box'
import Indexboxl from './components/index-boxl'

import cardimg1 from '../public/icon/ddos.svg'
import cardimg2 from '../public/icon/earth.svg'
import cardimg3 from '../public/icon/infra.svg'
import cardimg4 from '../public/icon/headset.svg'
import cardimg5 from '../public/icon/price.svg'
import img1 from '../public/img1.png'
import Link from 'next/link';

export default function Home() {
  
  return (
    <>
      <section className='flex items-center justify-center mb-32 mt-10 ci-on'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-10 ml-4' id='show'>퍼스트 호스팅을 선택해야하는 이유</h1>
          <div className='flex flex-wrap w-full justify-center'>
            <Indexbox 
              imgName={cardimg1}
              classname='bg-[#fcbba1]'
              head='보안'
              title='디도스 및 해킹보안'
              content='Anycast기반 Layer 3,4 계층 디도스 방어를 제공하며 리눅스 기반 자체 개발 방화벽을 이용하여 지속적으로 사용자의 환경에 맞게 보안 환경을 제공합니다.'
            />
            <Indexboxl
              imgName={cardimg2}
              classname='bg-[#edccf8]'
              head='호스팅'
              title='서버 호스팅'
              content='다양한 사양과 안정적인 하드웨어만을 제공하며 제공되기 전 사전점검을 실시하여 업타임 손실을 줄입니다.'
            />
            <Indexbox
              imgName={cardimg3}
              classname='bg-[#ffe69b]'
              head='인프라'
              title='기업용 인프라'
              content='LG 데이터센터 중 가장 큰 LG KIDC 논현센터를 이용하며 First 호스팅에서 자체 개발한 방화벽을 사용합니다.'
            />
            <Indexboxl
              imgName={cardimg5}
              classname='bg-[#e8f3ff]'
              head='상담'
              title='고객상담'
              content='365일 24시간 고객센터 상담이 가능하여 고객분들을 기다리게 두지 않습니다.'
            />
            <Indexbox
              imgName={cardimg4}
              classname='bg-[#aeefd5]'
              head='가격'
              title='합리적인 가격 확장성 높은 제품'
              content='고객님의 필요사항에 맞게 가상 서버, 단독 서버, 디도스 방어를 제공하며, 가격 대비 안정성 및 성능이 보장되지 않는다면 아무리 저렴하더라도 고객분들에게 제공하지 않습니다.'
            />
          </div>
        </div>
      </section>
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
      <section className='w-full h-[500px] bg-img1'>
        <div className='container mx-auto h-full w-full text-center px-4'>
          <div className='al-center'>
            <h1 className='text-2xl md:text-5xl text-white font-semibold leading-3[rem] md:leading-[4rem] pb-16'>고객센터 문의하기 / 365일 24시간<br/> 고객님이 필요하실 때 상담을 지원합니다.</h1>
            <Link href='https://pf.kakao.com/_qcQxcK' className='bg-[#3182f6] hover:bg-[#2272eb] text-lg px-6 py-3 text-white tracking-wider rounded-md'>카카오톡 상담하기</Link>
          </div>
        </div>
      </section>
    </>
  )   
}