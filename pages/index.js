import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Welcome to My App!
          </h1>
          <Header />
          <img src="/McDonalds_logo.png" />
        </div>
      </main>
    </div>
  )
}
