import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'


export default function Weather() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Weather Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Today is looking good!
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}
