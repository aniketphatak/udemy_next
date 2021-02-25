import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'

export default function TODO() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Todo Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Welcome to TODO Page!
          </h1>
          <Header />
        </div>
      </main>
    </div>
  )
}
