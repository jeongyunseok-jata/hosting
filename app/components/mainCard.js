import Link from "next/link";
import Image from 'next/image'

import price from '../../public/price.png'
import company from '../../public/company.png'
import infra from '../../public/infra.png'
import service from '../../public/service.png'

const price2 = props => (
    <>
        <div class="w-full p-6 bg-white border rounded-lg mb-5 duration-150">
            <div className="text-2xl font-medium mb-3">{props.title}</div>
            <div className="text-base text-gray-700 font-medium">{props.content}</div>
        </div>
    </>
)

export default price2;