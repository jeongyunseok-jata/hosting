import Link from "next/link";

const Contact = () => {
    return(
        <section className='w-full h-[300px] md:h-[500px] bg-contact'>
            <div className='container mx-auto h-full w-full text-center px-4'>
                <div className='contact-center'>
                    <h1 className='text-2xl md:text-5xl text-white font-semibold md:leading-[4rem] pb-6 md:pb-16'>아직 궁금하신점이 있으신가요?<span className=""><br/>( 오전 10시 ~ 오후 11시 30분 )<br/>( 긴급 서비스 24시간 )</span></h1>
                    <Link href='https://pf.kakao.com/_qcQxcK' className='bg-[#3182f6] hover:bg-[#2272eb] text-lg px-7 py-4 text-white tracking-wider rounded-md'>카카오톡 상담하기</Link>
                </div>
            </div>
        </section>
    )
}

export default Contact;