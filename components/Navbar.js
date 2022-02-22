import Link from 'next/link'
import Image from 'next/image'
import amosovLogo from '/public/amosovlogo1.png'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>
                        <Image 
                            src={amosovLogo}
                            width={70}
                            height={70}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}