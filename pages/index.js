import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Index.module.css'

export default function Index() {
  return (
        <Image 
            src={headerImage}
            width={1240}
            height={640}
            layout='responsive'
        />
  )
}
