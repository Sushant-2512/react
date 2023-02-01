 export const add=(data)=>
{
   return { type:"ADD",payload:data }     
}

export const loading=(data)=> ({type:"loading",payload:data})

export const select=(data) => ({type:"select",payload:data})

export const addAll=(data) => ({type:"addAll",payload:data})



