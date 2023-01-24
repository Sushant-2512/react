import {formik,useFormik} from "formik"
import * as Yup from "yup"

 const MyForm=(props)=>{
  
    
    const validationSchema=Yup.object().shape({

         email: Yup.string().email('Enter correct Email').required('*It is required'),
         password: Yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

         ,'Enter a strong password').required('*It is required')

    })
    const formik = useFormik({
        initialValues: {
          email: '',
          password:'',
          checkbox:false
        }, onSubmit: (values) => {
               
             console.log(values);
             fetch('https://reqres.in/api/users',{method:'POST'},{
                email:values.email,
                password:values.password

             }).then( (res) => 
             {
                    
                      if(res)
                      {
                    
                         if(formik.values.checkbox)
                           alert("You are Successfully signed In!! and accepted terms and condition")
                         else
                           alert("You are Successfully signed In!!")
                      }


             }).catch((err)=>{

                 alert(err)
             }) } ,
          validationSchema
         })    

     return  <form className="formStyle">
                 {/* <p>{JSON.stringify(formik)}</p> */}
                 <input  style={{fontSize:"20px"}} type="email" name="email" placeholder="Email" onChange={formik.handleChange}  value={formik.values.email}  />
                 {formik.errors.email && <p>{formik.errors.email}</p>}
                 <br />
                 <br />
                 <input style={{fontSize:"20px"}}  type="password" placeholder="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                 {formik.errors.password &&  <p>{formik.errors.password}</p>}
                 <br />
                 <br />
                 <p>  <input type="checkbox" name="checkbox" onChange={formik.handleChange} />Terms and condtion</p>
                 <br />
                  <button className="buttonStyle"   type='submit'  onClick={formik.handleSubmit}>Submit</button>          
            </form>

}

export default MyForm