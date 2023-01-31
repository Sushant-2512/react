import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent'
import Create from './components/CreateComponent';
import Delete from './components/DeleteComponent';
import Show from './components/ShowComponent';
import {add,loading} from './actions/index'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import Update from './components/updateComponent';

function App(props) {

  
    const dispatch=useDispatch()
    useEffect(()=>{
             
             dispatch(loading(true))
             fetch('https://reqres.in/api/users?page=2',{method:'GET'}).then((res)=>{
                   
                   
                   res.json().then((res)=>
                   {
                           
                            res.data.forEach(element => {
                            
                              //  console.log(element);
                                dispatch(add(element))    
                              });
                           
                              dispatch(loading(false))
                        
                             
                   })   

             })
    },[])

    const isLoading=useSelector(state=>state.showReducer.loading)
    const showWhat=useSelector(state => state.showReducer.showWhat)
  return (
    <div>
      
      <Main />
      {isLoading && <p style={{textAlign:'center',fontSize:'4rem'}}>Loading..</p>} 
      {showWhat==3 && <Create/> }
      { showWhat==2  && <Delete/> }
      {showWhat==1 && <Update/>}
      {showWhat==0 && <Show />}
    </div>
  );
}

export default App


