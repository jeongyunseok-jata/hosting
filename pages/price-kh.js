'use client'

import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from 'react';

import '../app/globals.css'
import Price from '../app/components/price-card'
import Header from "@/app/components/header";
import MainCard from "@/app/components/mainCard";
import Footer from '../app/components/footer'
import Contact from '../app/components/Contact';
import NavBar from '../app/components/NavBar';

import siren from '../public/siren.png'
import solution from '../public/solution.png'
import payment from '../public/payment.png'
import repair from '../public/repair.png'

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
            <section className='container mx-auto px-4 mb-20'>
                <MainCard
                img={payment}
                title='합리적인 가격'
                content='타사대비 합리적인 가격에 만족하실때까지 여러 상품들을 제안 및 컨설팅해드립니다.'
                />
                <MainCard
                img={siren}
                title='긴급 서비스'
                content='타사에선 느린 대응을 받고계신가요? 저희 호스팅은 빠른 대응을 위해 평균 30분 이내로 연락드립니다.'
                />
                <MainCard
                img={repair}
                title='안정적인 Infrastructure'
                content='First호스팅의 네트워크는 대규모 Cloudflare 망을 통해 보호받으며 anycast 망을 통해 최대 67Tbps의 디도스 완화가 가능합니다.'
                />
                <MainCard
                img={solution}
                title='기업용 솔루션'
                content='아직도 사이버 공격 때문에 고민하고 계신가요? First호스팅 에서는 리눅스 기반 자체개발 Ebpf XDP 방화벽으로 윈도우 , 리눅스 , 장비를 보호합니다.'
                />
            </section>
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
