import Head from 'next/head'
import BannerOne from '../components/Banner/BannerOne'
import NavbarOne from '../components/Navbar/NavbarOne'
import NavbarTwo from '../components/Navbar/NavbarTwo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple TV+ -Apple</title>
        <meta name="code by aungyealwin" content="Frontend Test From Codigo" />
        <link rel="icon" href="/favicon.png" sizes='16x16' />
      </Head>
      <NavbarOne />
      <NavbarTwo />
      <BannerOne />
    </div>
  )
}
