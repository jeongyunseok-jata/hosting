export default function footer() {
  return (
    <div className="w-full h-[450px] sm:h-[375px]">
        <div className="container mx-auto px-4">
            <div className="text-4xl font-bold text-[#2272eb] pt-11 pb-10">FirstHosting</div>
            <div className="flex flex-wrap w-full text-[#545c66]">
                <div className="w-1/2 sm:w-1/4">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#8b95a1] w-1/6 pb-2 text-[#4e5968]">Company</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">대표:한관웅</div>
                    <div className="hover:ml-[-6px] duration-300">사업자 번호:246-13-01852</div>
                </div>
                <div className="w-1/2 sm:w-1/4 mb-10 sm:mb-0">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#8b95a1] w-1/6 pb-2 text-[#4e5968]">Docs</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">서비스 이용약관</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">주의사항</div>
                    <div className="hover:ml-[-6px] duration-300">개인정보처리방침</div>
                </div>
                <div className="w-1/2 sm:w-1/4">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#8b95a1] w-1/6 pb-2 text-[#4e5968]">Service</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">업타임</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">가격표</div>
                    <div className="hover:ml-[-6px] duration-300">대시보드</div>
                </div>
                <div className="w-1/2 sm:w-1/4">
                    <div className="text-xl font-semibold mb-3 border-b-2 border-[#8b95a1] w-1/6 pb-2 text-[#4e5968]">Contact</div>
                    <div className="mb-1 hover:ml-[-6px] duration-300">디스코드</div>
                    <div className="hover:ml-[-6px] duration-300">카카오톡</div>
                </div>
            </div>
            <div className="mt-16 text-[#545c66]">© 2022 Firsthosting. All rights reserved.</div>
        </div>
    </div>
  )
}
