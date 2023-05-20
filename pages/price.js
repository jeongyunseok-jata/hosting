import Head from "next/head";
import Link from "next/link";

import '../app/globals.css'
import Price from '../app/components/price-card'
import Header from "@/app/components/header";
import Footer from '../app/components/footer'

export default function Projects({projects}) {
    return (
        <>
            <Header
                class_name='header-bg'
                title={['호스팅 가격표']}
                subtitle='호스팅 구매시 이용약관 / 주의사항에 동의한걸로 간주됩니다.'
            />

            <section className='flex items-center justify-center mb-10 ci-on'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl font-bold mb-8 ml-4 text-center'>가상서버 가격표</h1>
                    <div className='flex flex-wrap w-full justify-center'>
                        {
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
                        }
                    </div>
                </div>
            </section>
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
