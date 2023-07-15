'use client'

import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from 'react';

import '../app/globals.css'
import Price from '../app/components/price-card'
import Review from "@/app/components/review-card";
import Footer from '../app/components/footer'
import Contact from '../app/components/Contact';
import NavBar from '../app/components/NavBar';



export const metadata = {
    title: 'First Hosting | 2023',
    description: '업타임 99% 한국리전 디도스 방어 IDC를 제공합니다.',
    icons: {
      icon: '../public/logo.png',
    },
  }
  

export default function Projects({projects}) {

        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          setIsLoading(false);
        }, []);

    return (
        <>
            <header className="w-full h-[350px] bg-price mb-24">
                <NavBar />
                <div className="content-center top-1/3 relative">
                    <div className="text-4xl font-bold text-center text-white">가상서버 가격표</div>
                </div>
            </header>
            <section className='flex items-center justify-center mb-10 ci-on'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap w-full justify-center'>
                        {isLoading ? (
                            <p>로딩중...</p>
                        ) : (
                            projects.results.map((aProject) => (
                                <Price
                                    price_name={aProject.properties.name.title[0].plain_text}
                                    cpu={aProject.properties.cpu.rich_text[0].plain_text}
                                    ram={aProject.properties.ram.rich_text[0].plain_text}
                                    storage={aProject.properties.storage.rich_text[0].plain_text}
                                    bandwidth={aProject.properties.bandwidth.rich_text[0].plain_text}
                                    price={aProject.properties.price.rich_text[0].plain_text}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
            <section className='container mx-auto px-4'>
                <h1 className='text-3xl font-bold mb-10'>이용자들의 생생한 후기</h1>
            </section>
            <section className='overflow-hidden whitespace-nowrap container-2 mx-auto mb-32'>
                <div className='slide-animation'>
                <Review
                    content={['호스팅을 구매했는데 매우 빠르게 해주셨구요', '서버 용도에 맞게 제품도 알려주시고 모르는 것도', '다 알려주셔서 새로운 지식도 얻었습니다.', '구매 후 서버 연결에 오류 있어서 물어봤더니', '바로 해결 주시고 엄청 친절하십니다.', '정말 적극 추천합니다!!']}
                    proj='가상서버'
                />
                <Review
                    content={['오늘구매 했습니다 너무 친절하게 알려주셔서', '감격했습니당!😭', '호스팅은 역시 퍼스트 호스팅~!👍']}
                    proj='가상서버'
                />
                <Review
                    content={['일단 호스팅 성능 좋습니다', '끊김이나 핑튐 없고 모르는 거 불편한 사항 등', '문의드리면 아주 친절하게 답변해 주시고', '정말 좋습니다 짱!!']}
                    proj='가상서버'
                />
                <Review
                    content={['처리 속도 굉장히 빠릅니다', '구글링 조금만 해보셔도 이 가격에 이 성능?', '절대 못 삽니다 다들 first호스팅 이용하세요!!!']}
                    proj='가상서버'
                />
                <Review
                    content={['단독 서버 성능도 좋고 친절하시고', '서버 끊기는 것도 없어요! 적극 추천해용', '솔직히 딴 호스팅 회사 ***** 보다 싸고', '성능이 좋아요!! 솔직히 거기는 답도 느린데', '이 서버는 답도 빠르시고 계속 물어봐 주시고', '서비스가 너무 좋은 거 같고 서버에', '신경많이들 써주시는 거 같아용']}
                    proj='단독서버'
                />
                <Review
                    content={['판매 하시는 분 답변도 빠르시고 문제점', '해결도 잘 해주시고 호스팅도 문제없게', '잘 돌아갑니다', '가격도 저렴하고 사장님도 너무 착하신 거 같습니다', '호스팅 너무 마음에 듭니다 감사합니다', '잘 이용하도록 하겠습니다.!!']}
                    proj='가상서버'
                />
                <Review
                    content={['호스팅을 구매했는데 매우 빠르게 해주셨구요', '서버 용도에 맞게 제품도 알려주시고 모르는 것도', '다 알려주셔서 새로운 지식도 얻었습니다.', '구매 후 서버 연결에 오류 있어서 물어봤더니', '바로 해결 주시고 엄청 친절하십니다.', '정말 적극 추천합니다!!']}
                    proj='가상서버'
                />
                <Review
                    content={['오늘구매 했습니다 너무 친절하게 알려주셔서', '감격했습니당!😭', '호스팅은 역시 퍼스트 호스팅~!👍']}
                    proj='가상서버'
                />
                <Review
                    content={['일단 호스팅 성능 좋습니다', '끊김이나 핑튐 없고 모르는 거 불편한 사항 등', '문의드리면 아주 친절하게 답변해 주시고', '정말 좋습니다 짱!!']}
                    proj='가상서버'
                />
                <Review
                    content={['처리 속도 굉장히 빠릅니다', '구글링 조금만 해보셔도 이 가격에 이 성능?', '절대 못 삽니다 다들 first호스팅 이용하세요!!!']}
                    proj='가상서버'
                />
                <Review
                    content={['단독 서버 성능도 좋고 친절하시고', '서버 끊기는 것도 없어요! 적극 추천해용', '솔직히 딴 호스팅 회사 ***** 보다 싸고', '성능이 좋아요!! 솔직히 거기는 답도 느린데', '이 서버는 답도 빠르시고 계속 물어봐 주시고', '서비스가 너무 좋은 거 같고 서버에', '신경많이들 써주시는 거 같아용']}
                    proj='단독서버'
                />
                <Review
                    content={['판매 하시는 분 답변도 빠르시고 문제점', '해결도 잘 해주시고 호스팅도 문제없게', '잘 돌아갑니다', '가격도 저렴하고 사장님도 너무 착하신 거 같습니다', '호스팅 너무 마음에 듭니다 감사합니다', '잘 이용하도록 하겠습니다.!!']}
                    proj='가상서버'
                />
                </div>
            </section>
            <Contact />
            <Footer className='bg-[#f9fafb]'/>
        </>
    );
}

export async function getServerSideProps() {

    const NOTION_API_KEY = "secret_t0hTpRpMpo7zye8pG85bnmR6bVjvzBZu7CH2C1kwWp";
    const NOTION_DATABASE_ID = "23aacae7d6ab4a63bb5d510219784123";
    
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${NOTION_API_KEY}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "name",
                    "direction": "ascending"
                }
            ],
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options)

    const projects = await res.json()
    return {
      props: {projects},
    }
}
