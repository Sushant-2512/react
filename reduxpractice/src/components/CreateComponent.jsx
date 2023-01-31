import '../CSS/Create.css'
import {useDispatch} from 'react-redux'
import { select, add } from '../actions/index';
import { useState } from 'react';
const Create=()=>
{

      const [user,setUser]=useState({})

      const dispatch=useDispatch()
      function handleSubmit(event)
      {
      
             dispatch(add(user))
             dispatch(select(0))

      }
       return (
            
             <form className='form'>
                  <input type="text" name="email"   placeholder="add valid email" onChange={e=> setUser({...user,email:e.target.value}) } />
                  <input type="text" name="first_name" placeholder="first Name" onChange={e=> setUser({...user,first_name:e.target.value}) }/>
                  <input type="text" name="last_name" placeholder="last Name" onChange={e=> setUser({...user,last_name:e.target.value}) }/>
                  <input type="text" name="avatar" placeholder='Enter profile URL' onChange={e=> setUser({...user,avatar:e.target.value}) }/>
                  <button type="submit" className='button' style={{margin:"5% 30%"}}  onClick={handleSubmit}>Submit</button>
             </form>
       )
}

export default Create

