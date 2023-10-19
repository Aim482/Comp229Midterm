import { useState } from 'react';
import './inputbox.css'


export default function Product(){

    const[name, setName] = useState({name : '', description :''});

    const onChangeProduct = (event) => {
        const[name, value] = event.target
        setName({name, [name]:value})
        console.log(name)
    }

    function Cancel(event){
        console.log("event cancelled")
    }
    return (
        <form input className='product' onSubmit={onChangeProduct}>
            <p className='heading'>New Product</p>
        
            <input className='inputbox'
            type="text" defaultValue={"Name"}></input>
        <br></br>
        
        <input className='inputbox'
        type="text" defaultValue={"Description"}></input>
        <br></br>
        
        <input className='inputbox'
        type="text" defaultValue={"Category"}></input>
        <br></br>
        <br></br>
        
        <input className='inputbox'
        type="text" defaultValue={"Quantity"}></input>
        <br></br>
        
        <input className='inputbox'
        type="text" defaultValue={"Price"}></input>
        <br></br>
        <br></br>
        <button onClick={onChangeProduct}  className='submit'>Submit</button> 
        
        <button onClick={Cancel}>Cancel</button>
        </form>
    );
}