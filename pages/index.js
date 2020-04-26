import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useState, useEffect } from 'react'
import Head from 'next/head'
import {Navbar} from '../components/navbar'
import Block1 from '../components/home/block1-home'
import Block2 from '../components/home/block2-home'
import Block3 from '../components/home/block3-home'
import {Footer} from '../components/footer'
import { Plugins } from '@capacitor/core';

const { SplashScreen, Network } = Plugins;

function Home() {
  const [title, setTitle] = useState('home')

  const net =async()=>{
        let handler = Network.addListener('networkStatusChange', (status) => {
          console.log("Network status changed", status);
        });
        let status = await Network.getStatus()

        console.log(status)
  }
  

  useEffect(() => {
    
    SplashScreen.hide()

    SplashScreen.show({
      showDuration: 5000
    });
    net()
    defineCustomElements(window);
  },[])
  
  return <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar navStatus={title} />

      <main>
      <Block1/>

      <Block2/>

      <Block3/>

      <Footer/>
      </main>

  </>

}

export default Home
