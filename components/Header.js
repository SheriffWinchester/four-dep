import Link from 'next/link'
import Image from 'next/image'
import headerImage from '/public/Header.png'

export default function Header() {
    return (
        <div className='header'>
            <Image 
            src={headerImage}
            width={1240}
            height={640}
            layout='fill'
            objectFit='cover'
            />
        </div>
    )
}