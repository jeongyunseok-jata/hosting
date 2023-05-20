import Image from 'next/image';
import Link from 'next/link';

const Header = (props) => {
  const headerClass = `w-full h-[580px] mb-16  ${props.class_name || ''}`;

  return (
    <header className={headerClass}>
      <div className='text-center header-center container-2 mx-auto'>
        <h1 className='text-4xl font-bold text-white show-animation'>
          {props.title.map((line, index) => (
            <p key={index} className='mb-2'>{line}</p>
          ))}
        </h1>
        <p className='text-lg font-semibold text-[#ddd] mt-1 mb-10 show-animation '>{props.subtitle}</p>
        <Link href='https://pf.kakao.com/_qcQxcK' className='px-16 py-3 bg-white rounded-sm font-bold'>문의하기</Link>
      </div>
    </header>
  );
}

export default Header;
