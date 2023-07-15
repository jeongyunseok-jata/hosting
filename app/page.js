import Head from 'next/head';

import Faq from './components/faq'
import Review from './components/review-card'
import Contact from './components/Contact';
import MainCard from './components/mainCard';

import siren from '../public/siren.png'
import solution from '../public/solution.png'
import payment from '../public/payment.png'
import repair from '../public/repair.png'


export default function Home() {
   
  return (
    <>
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