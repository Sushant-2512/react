import {useDispatch} from 'react-redux'
import { select } from '../actions/index'
import '../CSS/Main.css'


const Main=()=>
{

       const dispatch=useDispatch()
       return (
           <div>
                <table className="table">
                    <tr>
                        <button className="button" value='3'  onClick={e => dispatch(select(e.target.value))}>Create</button>
                    </tr>

                    <tr>
                        <button className="button" value='2'  onClick={e => dispatch(select(e.target.value))}>Delete</button>
                    </tr>
                    <tr>
                        <button className="button" value='1'  onClick={e => dispatch(select(e.target.value))}>Update</button>
                    </tr>
                    <tr>
                        <button className="button" value='0'  onClick={e => dispatch(select(e.target.value))}>Show</button>
                    </tr>
                </table>
           </div>
       )
}

export default Main

