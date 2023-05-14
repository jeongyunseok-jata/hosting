import Image from 'next/image'

const card1 = props => (
    <div className='inline w-full h-[320px] sm:w-[394px] mx-4 mb-11 hover:scale-105 duration-300 px-14 box-border card1-shadow border border-gray-100 bg-white hover:bg-blue-200'>
       <div className='text-center flex justify-center mb-5 mt-10'>
        <Image 
                src={props.imgName}
                width={600}
                height={400}
                className='w-[50px] h-[50px] svg-fill'
            />
       </div>
        <div className='text-center'>
            <h1 className='text-xl font-bold text-gray-700'>
                {props.title}
            </h1>
            <p className='mt-4 text-lg font-semibold text-gray-600'>
                {props.content}
            </p>
        </div>
    </div>
)

export default card1;