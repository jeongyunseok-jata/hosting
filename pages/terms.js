import Head from 'next/head';

import '../app/globals.css'
import Navbar from '@/app/components/NavBar';
import Footer from '@/app/components/footer';
import Image from 'next/image';

import logo from '../public/logo.png'

export default function Home() {
   
  return (
    <>
      <section className='w-full container mx-auto p-4'>
        <Image
          src={logo}
          width={500}
          height={500}
          className='w-12 h-12 float-left justify-center'
        />
      </section>
      <Footer />
    </>
  )   
}