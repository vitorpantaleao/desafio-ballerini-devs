import React from 'react'
import { AuthContext } from '../src/components/contexts/Auth'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../src/components/Menu/Menu'
import programador from '../src/assets/images/programador-main.png'
import blobCima from '../src/assets/images/blobs-cima.png'
import blobBaixo from '../src/assets/images/blobs-baixo.png'

export default function Home() {
  const {isLogged, setIsLogged} = React.useContext(AuthContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Our Devs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Menu />
          <div className={styles.section}>
            <div className={styles.col}>
              <h1>O maior banco de devs do Brasil</h1>
              <p>Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
              <Link href="/devs" className={styles.signIn}>
                <a onClick={ () => { setIsLogged(true) }}>Entre Agora</a>
              </Link>
            </div>
            <div className={styles.colImage}>
              <Image src={programador}  />
            </div>
          </div>
          <div className={styles.blobs}>
            <div className={styles.blobCima}>
              <Image src={blobCima} />
            </div>
            <div className={styles.blobBaixo}>
              <Image src={blobBaixo} />
            </div>
          </div>
      </main>
          
    </div>
  )
}
