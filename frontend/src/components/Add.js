import  React, {useState} from 'react';
import NavLink from './NavLink';
import InputForm from './InputForm'

import MemberList from './MemberList'
import './Add.css'
function Add(){

return(
    
    <div>
      
      <NavLink/>
      <h1 align = 'center' >
            <img
            src={'https://cdn3.iconfinder.com/data/icons/basic-ui-1-regular/64/1_1_add_friend_member_people_plus_person_human-512.png'}
            alt="Cinque Terre" width="500" height="300"
          />
          </h1>
          <br></br>
         
          <MemberList/> 
          <br/>
          <InputForm />
          <br/>
        </div>
  )  
} 

export default Add 