import Image from 'next/image'

const indexbox = (props) => {
  const Imgclass = `mb-5 w-[350px] h-[200px] float-right flex justify-center rounded-xl ${props.classname || ''}`;
    return (
        <div className='inline h-[320px] w-full mx-4'>
            <div className={Imgclass}>
                <Image 
                    src={props.imgName}
                    width={600}
                    height={600}
                    className='w-[150px] h-[150px] al-center'
                />
            </div>
            <div className='w-1/2'>
                <p className='mb-3 text-xl text-[#4593fc] font-medium'>{props.head}</p>
                <h1 className='text-5xl font-semibold text-gray-700'>
                    {props.title}
                </h1>
                <p className='mt-4 text-2xl font-medium text-[#6B7684]'>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default indexbox;