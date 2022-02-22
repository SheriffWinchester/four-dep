import Link from 'next/link'
import Image from 'next/image'
import amosovLogo from '/public/amosovlogo1.png'
import phoneLogo from '/public/PhoneVolume.png'

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
                <li>
                    Головна
                </li>
                <li>
                    Про нас
                </li>
                <li>
                    Лікування
                </li>
                <li>
                    Операції
                </li>
                <li>
                    Новини
                </li>
                <li>
                    Контакти
                </li>
                <li>
                    <div className=".phone-box">
                        <Image 
                            src={phoneLogo}
                            width={50}
                            height={50}
                        />
                       
                    </div>
                </li>
            </ul>
        </nav>
    )
}