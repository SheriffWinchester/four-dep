import Head from 'next/head'
import Image from 'next/image'
import headerImage from '/public/Header.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <Image 
            src={headerImage}
            
        />

  )
}
