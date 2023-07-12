'use client'

import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from 'react';

import '../app/globals.css'
import Price from '../app/components/price-card2'
import Header from "@/app/components/header";
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
                <div className="content-center">
                    <div className="text-4xl font-bold text-center text-white">단독서버 가격표</div>
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
            <Contact />
            <Footer className='bg-[#f9fafb]'/>
        </>
    );
}

export async function getServerSideProps() {

    const NOTION_API_KEY = "secret_t0hTpRpMpo7zye8pG85bnmR6bVjvzBZu7CH2C1kwWp";
    const NOTION_DATABASE_ID = "279dc1b3ee074f90b5cf9cf3b4816227";
    
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
