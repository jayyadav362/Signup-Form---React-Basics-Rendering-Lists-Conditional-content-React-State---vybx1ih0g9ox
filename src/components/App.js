import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [gender,setGender] = useState('male')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  const formSubmitHandle = (e)=>{

    const error = document.getElementById('error')
    const welcome = document.getElementById('welcome')
    e.preventDefault()
    if(
      name==="" ||
      email==="" ||
      gender==="" ||
      phone==="" ||
      password===""
      ){
        error.innerHTML="<h1>All fields are mandatory</h1>";
        return;
      }
      if(!name.match(/^[0-9a-z]+$/)){
        error.innerHTML="<h1>Name is not alphanumeric</h1>";
        return;
      }
      if(!email.includes('@')){
        error.innerHTML="<h1>Email must contain @</h1>";
        return;
      }
      if(!gender==='male' || !gender==='female' || !gender==='other'){
        error.innerHTML="<h1>Please identify as male, female or others</h1>";
        return;
      }
      if(!/^[0-9]+$/.test(phone)){
        error.innerHTML="<h1>Phone Number must contain only numbers</h1>";
        return;
      }
      if(password.length<6){
        error.innerHTML="<h1>Password must contain atleast 6 letters</h1>";
        return;
      }
      error.innerHTML="";
      welcome.innerHTML="<h1>Hello "+email.slice(0,email.indexOf('@'))+"</h1>";
  }
  return (
    <div id="main">
      <form onSubmit={formSubmitHandle}>
        <input data-testid='name' value={name} type='text' required onChange={(e)=>setName(e.target.value)}/>
        <input data-testid='email' type='email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
        <select defaultValue={gender} data-testid='gender'required onChange={(e)=>setGender(e.target.value)}>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Others</option>
        </select>  
        <input data-testid='phoneNumber' value={phone} type='text' required onChange={(e)=>setPhone(e.target.value)}/> 
        <input data-testid='password' type='password' value={password} required onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' data-testid='submit' value='submit' />
      </form>
      <div id="error"></div>
      <div id='welcome'></div>
    </div>
  )
}


export default App;