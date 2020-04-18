import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Home from '@material-ui/icons/Home'
import DeveloperMode from '@material-ui/icons/DeveloperMode'
import Web from '@material-ui/icons/Web'

function Navbar(props) {
    const { navStatus } = props

    const [width, setWidth] = useState(null)
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })

    useEffect(() => {
        setStatus(navStatus)
    },[])
    
    return <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel='stylesheet' href='/cssreset/reset.css' />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1 user-scalable=no" />
            </Head>

            <header>
                <span>
                    {width < 721 ?
                        null
                    :(
                        <Link href="/">
                            <a onClick={()=>setShow(true)} href="/"><img height="25vh" style={{marginRight:'4px'}} src="/img/logo.png" alt="dwa"/>{width < 721 ? '' :'diaz web app'}</a>
                        </Link>
                    )}
                    
                    <nav>
                        {status === 'home'?<span>
                            <Home className='icondisabled'/>

                            {width < 721 ? '' :'home'}
                            </span>
                        :<Link href="/">
                            <a onClick={()=>setShow(true)} href="/">
                                <Home className='iconenabled' />
                                {width < 721 ? '' :'home'}
                            </a>
                        </Link>
                        }

                        {status === 'web apps'?<span>
                            <Web className='icondisabled'/>

                            {width < 721 ? '' :'desarrollo web'}
                            </span>
                        :<Link href="/webapps">
                            <a onClick={()=>setShow(true)} href="/webapps.html">
                                <Web className='iconenabled'/>
                               
                               {width < 721 ? '' :'desarrollo web'}
                            </a>
                        </Link>
                        } 
                        
                        {status === 'movil apps'?<span>
                                <DeveloperMode className='icondisabled'/>
                                
                                {width < 721 ? '' :'desarrollo movil'}
                        </span>
                        :<Link href="/movilapps">
                            <a onClick={()=>setShow(true)} href="/movilapps.html">
                                <DeveloperMode className='iconenabled'/>

                                {width < 721 ? '' :'desarrollo movil'}
                            </a>
                        </Link>}
                        
                    </nav>
                </span>
            </header>

            <style>
                {`
                    header{
                        position:fixed;
                        ${width < 721 ? 'bottom:0;' : 'top:0;'}
                        background:#2d2d2d;
                        height:55px;
                        z-index:999;
                    }
                    main{
                        height:calc(100vh - 55px);
                        ${width < 721 ? 'top:0;' : 'top:55px;'}
                    }
                    header span{
                        grid-column: 2 / span 14;
                        display:flex;
                        flex-flow:row nowrap;
                        align-items:center;
                        justify-content:${width < 721 ? 'center;':'space-between;'};
                    }
                    header span nav{
                        width:${width < 721 ? '100vmin;':'auto;'}
                        text-align:center;
                        display:flex;
                        flex-flow:row nowrap;
                        justify-content:${width < 512 ? 'space-between;':'center;'}
                    }
                    header span nav a{
                        display:flex;
                        flex-flow: row nowrap;
                        justify-content:center;
                        align-items:center;
                        float:left;
                    }
                    header span a{
                        display:flex;
                        flex-flow: row nowrap;
                        justify-content:center;
                        align-items:center;
                        margin: 0 5px;
                        text-transform: capitalize;
                        color:lightgrey;
                    }
                    .iconenabled{
                        margin-right:4px;
                        color:lightgrey;
                    }
                    .icondisabled{
                        color:black;
                    }
                `}
            </style>
            <span style={
                {
                    position:'fixed',
                    zIndex:'99999',
                    color:'lightgrey',
                    top:'0',
                    left:'0',
                    right:'0',
                    bottom:'0',
                    width:'100vw',
                    height:'100vh',
                    display: show === true ? 'flex':'none',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'rgba(0,0,0, .5)'
                    }
                } >
                <h2>Loading...</h2>
            </span>
        </>
}

export {Navbar}