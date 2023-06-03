import Link from "next/link";

const Contact = () => {
    return(
        <section className='w-full h-[500px] bg-img1'>
            <div className='container mx-auto h-full w-full text-center px-4'>
                <div className='al-center'>
                    <h1 className='text-2xl md:text-5xl text-white font-semibold leading-3[rem] md:leading-[4rem] pb-16'>궁금한것이 있으시다면 24시간 언제든 문의하세요</h1>
                    <Link href='https://pf.kakao.com/_qcQxcK' className='bg-[#3182f6] hover:bg-[#2272eb] text-lg px-6 py-3 text-white tracking-wider rounded-md'>카카오톡 상담하기</Link>
                </div>
            </div>
        </section>
    )
}

export default Contact;