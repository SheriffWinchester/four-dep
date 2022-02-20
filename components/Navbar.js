import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>
                        <Image 
                            src='/public/amosovlogo.png'
                            alt='Logo of Amosov Institute'
                            width={500}
                            height={500}
                        />
                    </Link>
                    
                </li>
            </ul>
        </nav>
    )
}