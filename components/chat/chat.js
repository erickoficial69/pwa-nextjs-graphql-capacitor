import { useState } from 'react'
import { Mail } from '@material-ui/icons'
import { MenuItem } from '@material-ui/core'
import { sendEmail } from '../graphql-querys/index'

const Chat = ()=>{
    const [user, setUser] = useState({})
    const [openQuestion, setOpenQuestion] = useState(false)
    const [statusSend, setStatusSend] = useState(false)

    const sendMessage =  (e)=>{
        setStatusSend('sending')
        e.preventDefault()
        const gql = `
        {
            sendEmail(para:"${user.correo}" cuerpo:"${user.mensaje}")
        }
        `
       sendEmail(gql,setStatusSend)
       
    }

    return <>
            <Mail  
                style={
                    {
                        position:'fixed',
                        right:'7%',
                        cursor:'pointer',
                        zIndex:9,
                        bottom:'65px',
                        width:'52px', 
                        height:'52px'
                    }
                }  
                onClick={()=>setOpenQuestion(openQuestion===true?false:true)}
                 />
        <form className='chat' onSubmit={e=>sendMessage(e)} >
                
            <h3>Dudas...?</h3>

            <label>Tu correo</label>
            
            <p>{user?user.correo:null}</p>
            <input type='email' name='nombre' 
            onChange={e=>setUser({...user, correo:e.target.value})}/>
            <textarea name='message' onChange={e=>setUser({...user, mensaje:e.target.value})} >
                
            </textarea>
            <button>
            <MenuItem>
                send
            </MenuItem>
            </button>
        </form>

        <style>
            {
                `
                .chat{
                    z-index:8;
                    height:${!openQuestion?'44px;' : '315px;'} 
                    opacity:${!openQuestion?'0;' : '1;'};
                    width:${!openQuestion?'44px;' : '220px;'}
                    background:#2d2d2d;
                    position:fixed;
                    right:7%;
                    bottom:65px;
                    overflow:hidden;
                    transition:all .3s cubic-bezier(0.215, 1.410, 0.355, 1);
                    display:flex;
                    flex-flow:column;
                    justify-content: space-between;
                    border-radius:3px;
                    padding:1vmin;
                    box-shadow: 0px 0px 2px white;
                }
                .chat::after{
                    content:"${statusSend==='sending'?'enviando':statusSend==='enviado'?'Enviado!!!':'error'}";
                    width:100%;
                    height:100%;
                    background:rgba(0,0,0, .7);
                    position:absolute;
                    top:0;
                    left:0;
                    display:${statusSend==='sending' || statusSend==='error' || statusSend==='enviado'?'flex;':'none;'}
                    flex-flow:column;
                    justify-content:center;
                    align-items:center;
                    font-weight:bold;
                }
                .chat h3{
                    line-height:1.3;
                    text-align:center;
                }
                .chat input{
                    line-height:2;
                    background:#2d2d2d;
                    border:1px solid white;
                    padding: 0 2vmin;
                }
                .chat button{
                    width:45%;
                    border:1px solid white;
                    border-radius:3px;
                    text-transform:uppercase;
                }
                .chat textarea{
                    height:155px;
                    resize:none;
                    background:#2d2d2d;
                    border:1px solid white;
                    padding:2vmin;
                }
                `
            }
        </style>
    </>
}

export default Chat