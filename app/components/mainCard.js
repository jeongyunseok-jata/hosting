import Link from "next/link";
import Image from 'next/image'

import siren from '../../public/siren.png'
import solution from '../../public/solution.png'
import payment from '../../public/payment.png'
import repair from '../../public/repair.png'

const price2 = props => (
    <>
        <div class="w-full p-6 bg-white border rounded-lg mb-5 duration-150">
            <Image 
                src={props.img}
                width={20}
                height={20}
                className='w-14 h-14 mb-3'
            />
            <div className="text-2xl font-medium mb-3">{props.title}</div>
            <div className="text-base text-gray-700 font-medium">{props.content}</div>
        </div>
    </>
)

export default price2;