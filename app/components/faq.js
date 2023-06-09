'use client'

import Image from 'next/image'
import { useState, useRef } from "react";

import plus from '../../public/icon/plus.svg'

export default function Home(props) {
  
  const [selected, setSelected] = useState(null);
  const container = useRef(null);

  const toggleAccordion = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };
  
  return (
          <div className="w-full">
            <ul>
              <li className="mt-3 border border-gray-200 bg-white rounded-md">
                <button
                  className="w-full px-6 py-8"
                  onClick={() => toggleAccordion(1)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xl xl:text-2xl font-bold text-gray-800 ${
                        selected === 1 ? "relative text-[#4593fc]" : ""
                      }`}>어떤 운영체제를 지원하나요?</span>
                    <svg
                      className={`w-8 h-8 text-gray-800 transition-all duration-500 ${
                        selected === 1 ? "transform rotate-180 text-[#4593fc]" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  ref={container}
                  style={{
                    maxHeight: selected === 1 ? container.current.scrollHeight : 0,
                  }}
                >
                  <div className="px-6">
                    <p className='text-md xl:text-lg font-semibold text-gray-600 pb-6'>Windows Server 2019 Standard 를 기본제공합니다.</p>
                  </div>
                </div>
              </li>
              <li className="mt-3 border border-gray-200 bg-white">
                <button
                  className="w-full px-6 py-8"
                  onClick={() => toggleAccordion(2)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xl xl:text-2xl font-bold text-gray-800${
                        selected === 2 ? "relative text-[#4593fc]" : ""
                      }`}>어떤 아이피와 포트를 제공하나요?</span>
                    <svg
                      className={`w-8 h-8 text-gray-800 transition-all duration-500 ${
                        selected === 2 ? "transform rotate-180 text-[#4593fc]" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  ref={container}
                  style={{
                    maxHeight: selected === 2 ? container.current.scrollHeight : 0,
                  }}
                >
                  <div className="px-6">
                    <p className='text-md xl:text-lg font-semibold text-gray-600 pb-6'>가상서버 - 공유IP ( 원격포트 , 게임용 포트 ) / 단독서버 - 공인IP 모든포트 사용 가능합니다.</p>
                  </div>
                </div>
              </li>
              <li className="mt-3 border border-gray-200 bg-white">
                <button
                  className="w-full px-6 py-8"
                  onClick={() => toggleAccordion(3)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xl xl:text-2xl font-bold text-gray-800${
                        selected === 3 ? "relative text-[#4593fc]" : ""
                      }`}>호스팅 환불이 가능한가요?</span>
                    <svg
                      className={`w-8 h-8 text-gray-800 transition-all duration-500 ${
                        selected === 3 ? "transform rotate-180 text-[#4593fc]" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  ref={container}
                  style={{
                    maxHeight: selected === 3 ? container.current.scrollHeight : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p className='text-md xl:text-lg font-semibold text-gray-600'>호스팅 서비스 특성상 세팅 비용, 트래픽 비용, 회선 비용 등 요금제 및 상황에 따라 상이하나 기본적으로 단순 변심 환불은 불가능하며 그 이외에는 담당자와의 합의로 환불이 가능합니다.</p>
                  </div>
                </div>
              </li>
              <li className="mt-3 border border-gray-200 bg-white">
                <button
                  className="w-full px-6 py-8"
                  onClick={() => toggleAccordion(4)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xl xl:text-2xl font-bold text-gray-800${
                        selected === 4 ? "relative text-[#4593fc]" : ""
                      }`}>디도스 방어량이 어떻게 되나요?</span>
                    <svg
                      className={`w-8 h-8 text-gray-800 transition-all duration-500 ${
                        selected === 4 ? "transform rotate-180 text-[#4593fc]" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className="relative overflow-hidden transition-all duration-500"
                  ref={container}
                  style={{
                    maxHeight: selected === 4 ? container.current.scrollHeight : 0,
                  }}
                >
                  <div className="px-6">
                    <p className='text-md xl:text-lg font-semibold text-gray-600 pb-14 xl:pb-6'>CloudFlare Proxy DDOS 방어존은 디도스 방어 67Tbps를 지원합니다.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
  )
}
