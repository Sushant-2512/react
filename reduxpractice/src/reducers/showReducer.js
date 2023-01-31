
const intitialState=
{
    users:[],
    showWhat:0,
    loading:false

}


const showReducer=(state=intitialState,action) => 
{
     switch(action.type)
     {
        case "ADD":
                   return {...state,users:[...state.users,action.payload]}
        case "loading":
                  return {...state , loading:action.payload}
        case "select":
               return {...state,showWhat:action.payload}
        case "addAll":
              return {...state,users:action.payload}
         default:
            return intitialState;

     }
}

export default showReducer

