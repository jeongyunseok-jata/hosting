import Link from "next/link";

export default function footer() {
  return (
    <div className="w-full h-[450px] sm:h-[375px]">
        <div className="container mx-auto px-4">
            <div className="text-4xl font-bold text-[#000] pt-11 pb-10">FirstHosting</div>
            <div className="flex flex-wrap w-full text-[#545c66]">
                <div className="w-full sm:w-1/4 mb-10 sm:mb-0">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#2272eb] w-1/6 pb-2 text-[#000]">Company</div>
                    <div className="mb-1">대표 : 한관웅</div>
                    <div className="hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline"><Link href='https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=1'>사업자 번호 : 246-13-01852</Link></div>
                </div>
                <div className="w-full sm:w-1/4 mb-10 sm:mb-0">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#2272eb] w-1/6 pb-2 text-[#000]">Docs</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">서비스 이용약관</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">주의사항</div>
                    <div className="hover:ml-[-6px] duration-300">개인정보처리방침</div>
                </div>
                <div className="w-full sm:w-1/4 mb-10 sm:mb-0">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#2272eb] w-1/6 pb-2 text-[#000]">Service</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline"><Link href='https://stats.uptimerobot.com/Jj0vRHBrlk'>업타임</Link></div>
                    <div className="mb-1 hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline"><Link href='/price'>가격표</Link></div>
                    <div className="hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline">대시보드</div>
                </div>
                <div className="w-full sm:w-1/4">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#2272eb] w-1/6 pb-2 text-[#000]">Contact</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline"><Link href='https://discord.com/invite/3eQF6Kvypv'>디스코드</Link></div>
                    <div className="hover:ml-[-6px] duration-300 hover:text-[#3182f6] hover:underline"><Link href='https://pf.kakao.com/_qcQxcK'>카카오톡</Link></div>
                </div>
            </div>
            <div className="mt-16 text-[#545c66]">© 2022 Firsthosting. All rights reserved.</div>
        </div>
    </div>
  )
}
