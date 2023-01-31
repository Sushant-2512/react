 export const add=(data)=>
{
   return { type:"ADD",payload:data }     
}

export const loading=(data)=>
{
    return {type:"loading",payload:data}
}

export const select=(data) =>
{
    return {type:"select",payload:data}
}

export const addAll=(data) =>
{
    return {type:"addAll",payload:data}
}



