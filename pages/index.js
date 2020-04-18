import { useEffect, useState } from 'react'
import Head from 'next/head'

import {Navbar} from '../components/navbar'
import Block1 from '../components/block1-home'
import Block2 from '../components/block2-home'
import Block3 from '../components/block3-home'

function Home() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle('home')
  })
  return <>
      <Head>
        <title>{title}</title>

      </Head>
      <Navbar navStatus={title} />
      <main >

      <Block1/>

      <Block2/>

      <Block3/>
      </main>
  </>

}

export default Home
