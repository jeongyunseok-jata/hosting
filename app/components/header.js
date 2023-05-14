import Image from 'next/image'
import Link from 'next/link';

const Header = (props) => {
  const headerClass = `w-full h-[580px] mb-32 ${props.class || ''}`;
  // customClass 라는 props가 없을 경우 빈 문자열로 초기화해서 오류를 방지합니다.

  return (
    <header className={headerClass}>
      <div className='text-center header-center'>
        <h1 className='text-3xl font-bold text-white'>{props.title}</h1>
        <p className='text-lg font-semibold text-white mt-1 mb-10'>{props.subtitle}</p>
        <Link href='https://pf.kakao.com/_qcQxcK' className='px-16 py-3 bg-white rounded-sm font-bold'>문의하기</Link>
      </div>
    </header>
  );
}

export default Header;
