const StateLess =(props)=>
{
    const {fname,lname,email}=props
    return (
        <div>
            <h3>Name:{fname} {lname}</h3>
             <h2>Email : {email}  </h2>
        </div>
    )
}

export default StateLess