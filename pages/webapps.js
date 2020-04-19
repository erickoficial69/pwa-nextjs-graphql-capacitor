import { useEffect, useState } from 'react'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import Head from 'next/head'
import {devTools} from '../components/graphql-querys/index'

const query = `{tools(nombre:"web"){
      nombre
    }}
  `

function WebApps() {
  const [title, setTitle] = useState('')
  const [tools, setTools] = useState([])
  const [tools2, setTools2] = useState([])
  const [tools3, setTools3] = useState([]) 

  useEffect(() => {
    setTitle('web apps')
    devTools(query,setTools,setTools2,setTools3)
  },[])
  
  return (
    <main >
      <Head>
        <title>{title}</title>

      </Head>
      <Navbar navStatus={title} />

      <div className='webstyle intro1'>
        <h1>Desarrollo de aplicaciones web</h1>
        <p>
            Diseño y desarrollo de aplicaciones web para particulares, comerciales y empresariales, Optimizamos webs en HTML5 para adaptarlas al responsive design que requiere la demanda de tráfico en internet desde móviles que supera el 70% actualmente. Dominamos las tecnologías de programación web; progressive web apps (PWA) y webassembly (wassm) aspectos SEO, server side rendering.
        </p>
      </div>
      
      <section>
          <h2>Tecnologías De desarrollo</h2>
      </section>

      <section>
        <ul className='tecnologies'>
               {
                 tools.map((t,i)=><li key={i}>{t.nombre}</li>)
               }
               {
                 tools2.map((t,i)=><li key={i}>{t.nombre}</li>)
               }
               {
                 tools3.map((t,i)=><li key={i}>{t.nombre}</li>)
               } 
        </ul>
      </section>
      <Footer/>
      <style>
        {
           `  
            section{
                grid-column: 2 / span 14;
                margin: 2vmin auto;
              }
              article{
                margin:4vmin auto;
              }
              article h2{
                text-align:center;
              }
              .webstyle{
                grid-column: 1 / span 16 !important;
                background-color:#222;
                background-image:url(/img/pwa_wallpaper.jpg);
                background-size: cover;
                background-attachment:fixed;
                background-repeat:no-repeat;
                background-position: top center;
                background-blend-mode:multiply;
                padding:2vmin 8vmin;
                display: flex;
                flex-flow:column;
                justify-content:center;
                align-items:center;
                height:72vh;
              }
              .webstyle h1{
                text-align:center;
                color:white;
              }
              .webstyle p{
                font-size:3vmax;
                color:white;
              }
              @media (min-width:719px){
                .webstyle p{
                  width:75%;
                  font-size:4vh;
                }
              }
            `}
      </style>
    </main>
  )
}

export default WebApps
