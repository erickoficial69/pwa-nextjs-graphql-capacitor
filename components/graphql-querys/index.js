import { request } from 'graphql-request'

export const devTools = (query,estado,estado2,estado3)=>{
    request(
      'http://localhost:3100/graphql',
        query).then(data => {
          estado(data.tools[0])
          estado2(data.tools[1])
          estado3(data.tools[2])
        })
    }

export const test = (query)=>{
      request(
        'http://localhost:3100/graphql',
          query).then(data => {
            console.log(data.postAdded)
          })
      }

export const gqlLogin = (query)=>{
       return request('http://localhost:3100/graphql',query)
      }