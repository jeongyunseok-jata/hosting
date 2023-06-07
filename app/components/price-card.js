import Image from 'next/image'
import Link from 'next/link';

import check_icon from '../../public/icon/check.svg'

const price = props => (
    <div className='inline w-full h-[520px] sm:w-[394px] mx-4 mb-8 hover:scale-105 duration-300 box-border card-shadow border border-gray-200 relative rounded-md'>
        <div className='flex justify-center mt-10'>
        </div>
        <div className='px-14 mb-12'>
            <h1 className='text-4xl font-bold text-gray-800'>
                {props.price_name}
            </h1>
            <p className='mt-3 text-xl font-semibold text-gray-700 mb-5'>
                {props.price}원 <span className='text-base'>/ 월</span>
            </p>
            <div className='border border-b-2 w-12 border-gray-700'></div>
        </div>
        <div className='px-14'>
            <p className='text-base text-gray-600 font-semibold mb-4'>서버 사양: </p>
            <div className='flex items-center'>
                <Image 
                    src={check_icon}
                    width={20}
                    height={20}
                    className='w-[27px] h-[27px] fill-blue-900 mr-3 bg-blue-100 rounded-full p-1.5'
                />
                <p className='text-lg font-semibold text-gray-600'>
                    {props.cpu} vCore CPU
                </p>
            </div>
            <div className='flex items-center mt-3'>
                <Image 
                    src={check_icon}
                    width={20}
                    height={20}
                    className='w-[27px] h-[27px] fill-blue-900 mr-3 bg-blue-100 rounded-full p-1.5'
                />
                <p className='text-lg font-semibold text-gray-600'>
                    {props.ram}GB RAM
                </p>
            </div>
            <div className='flex items-center mt-3'>
                <Image 
                    src={check_icon}
                    width={20}
                    height={20}
                    className='w-[27px] h-[27px] fill-blue-900 mr-3 bg-blue-100 rounded-full p-1.5'
                />
                <p className='text-lg font-semibold text-gray-600'>
                    {props.storage}GB STORAGE
                </p>
            </div>
            <div className='flex items-center mt-3'>
                <Image 
                    src={check_icon}
                    width={20}
                    height={20}
                    className='w-[27px] h-[27px] fill-[blue-900] mr-3 bg-blue-100 rounded-full p-1.5'
                />
                <p className='text-lg font-semibold text-gray-600'>
                    {props.bandwidth}Mbps BANDWIDTH
                </p>
            </div>
        </div>
        <div className='price-btn bg-[#3182f6] w-56 py-3 text-center rounded-md'>
            <Link href='https://pf.kakao.com/_qcQxcK' className='text-white text-lg'>문의하기</Link>
        </div>
    </div>
)

export default price;