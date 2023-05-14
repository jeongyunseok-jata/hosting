'use client'

import { useState, useRef } from "react";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const container1 = useRef(null);
  const container2 = useRef(null);

  const toggleAccordion = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className="bg-white max-w-full mx-auto border border-gray-200">
      <ul className="shadow-box">
        <li className="relative border-b border-gray-200">
          <button
            type="button"
            className="w-full px-6 py-6 text-left"
            onClick={() => toggleAccordion(1)}>
            <div className="flex items-center justify-between">
              <span>q1</span>
              <svg
                className={`w-5 h-5 text-gray-500 ${
                  selected === 1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
          <div
            className="relative overflow-hidden transition-all max-h-0 duration-700"
            ref={container1}
            style={{
              maxHeight: selected === 1 ? container1.current.scrollHeight : 0,
            }}>
            <div className="px-6 pb-6">
              <p>a1</p>
            </div>
          </div>
        </li>
        <li className="relative border-b border-gray-200">
          <button
            type="button"
            className="w-full px-6 py-6 text-left"
            onClick={() => toggleAccordion(2)}>
            <div className="flex items-center justify-between">
              <span>q1</span>
              <svg
                className={`w-5 h-5 text-gray-500 ${
                  selected === 2 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
          <div
            className="relative overflow-hidden transition-all max-h-0 duration-700"
            ref={container1}
            style={{
              maxHeight: selected === 2 ? container1.current.scrollHeight : 0,
            }}>
            <div className="px-6 pb-6">
              <p>a1</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
