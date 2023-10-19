import { useState } from 'react';
import './inputbox.css'


export default function Input(){

    const[name, setName] = useState({name : '', description :''});

    const onChange = (event) => {
        const[name, value] = event.target
        setName({...name,[name]: value,});
        console.log(name)
    }

    const Submit = (e) =>{
        console.log(name.name)
    }
    const Cancel = (e) =>{
        console.log("event cancelled")
    }
    return (
        <form input className='input'>
            <p className='heading'>New Shop</p>
       
            <input 
            className='inputbox'
            defaultValue={"Name"}
             />
        <br></br>
            <input 
            className='inputbox'
            defaultValue={"Description"}>
            </input>
            <span></span>
        <br></br>
        <button onClick={Submit} onChange={onChange}  className='submit'>Submit</button> 
        
        <button onClick={Cancel} className='cancel'>Cancel</button>
        </form>
    );
}