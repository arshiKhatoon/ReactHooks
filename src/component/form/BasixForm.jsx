import React,{useState} from 'react';
import './form.css';

const  BasixForm = () =>
{
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [allEntry,setAllEntry] = useState([]);
   const submitForm = (e) =>
   {e.preventDefault();
const newEntry ={
    Email:email,
    Password:password
};
setAllEntry([...allEntry,newEntry])
console.log(allEntry);

   }
  return (
<>
    <form  action="" onSubmit ={submitForm} className="formStyle">
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" autoComplete='on' 
            value={email} onChange={ (e)=> {
                setEmail(e.target.value);
                console.log(email);
              }
            }
            ></input>
        </div>
  

        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" autoComplete = 'off' value={password}
            onChange={ (e)=>{setPassword(e.target.value); console.log(password)}}
                
             ></input>
        </div>
        <button type="submit" className="btm">Login</button>
    </form>
    <div>
        {
            allEntry.map((currElm) =>{
                return(<div className="show">
                <p>email:{currElm.Email}</p>
                <p>Pasword :{currElm.Password}</p>
                </div>
                )
            })
        }
    </div>

</>  )  
}
export  default BasixForm