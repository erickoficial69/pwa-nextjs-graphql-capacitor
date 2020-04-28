import { request } from 'graphql-request'
const apis = {
  uri : process.env.GRAPHQL_URI || 'http://localhost:3100/graphql'
}


export const devTools = (query,estado,estado2,estado3)=>{
  console.log(process.env.GRAPHQL_URI)
  console.log(process.env.NODE_ENV)
    request(
      apis.uri,
        query).then(data => {
          estado(data.tools[0])
          estado2(data.tools[1])
          estado3(data.tools[2])
        })
    }

export const sendEmail = async (query, setStatusSend)=>{
  
        const data = await request(apis.uri,query)
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