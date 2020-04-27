import { request } from 'graphql-request'
const uri = process.env.NODE_ENV === 'poduction'? 'https://backenddwa.herokuapp.com/graphql' : 'http://localhost:3100/graphql'
export const devTools = (query,estado,estado2,estado3)=>{
    request(
      uri,
        query).then(data => {
          estado(data.tools[0])
          estado2(data.tools[1])
          estado3(data.tools[2])
        })
    }

export const sendEmail = async (query, setStatusSend)=>{
        const data = await request(uri,query)
        function end() {
            setStatusSend(false)
          }

        if(data.sendEmail === true ){
            setStatusSend('enviado')
            setTimeout(end, 2222)
        }

        if(data.sendEmail === false ){
            setStatusSend('error')
            setTimeout(end, 2222)
        }
        
      }