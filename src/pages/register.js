import React , {useState}from 'react';
import '../styling.css';
//components
import Navi from '../components/navi';
import Footer from '../components/foot';
//Bootsrap



function Registration() {
      const [name, setName] = React.useState('');
      const [phone, setPhone] = React.useState('');
      const [email, setEmail] = React.useState('');
      const [password, setPassword] = React.useState('');
  return (
    <div> 
      <Navi/>
    
     
      <div class ="container-fluid" id="Form">
        <h1>Sign Up</h1> 
        <form action="/" method="post"> 

               <label htmlFor="name">Name<span class="req">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
            <div class="field-wrap">

        <label htmlFor="phone">Phone<span class="req">*</span></label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
</div>


        <label htmlFor="email">Email<span class="req">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div class="field-wrap">

        <label htmlFor="password">Password<span class="req">*</span></label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         
        <div id='hj'> <button id="signup"type="submit" className="signupbtn center-btn" >Sign Up</button>
        </div>
        </div>

      </form>
      </div>
      
     
     <Footer />


</div>

  );
}

export default Registration;