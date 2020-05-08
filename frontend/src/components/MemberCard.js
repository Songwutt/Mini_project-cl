
import React, { useEffect }  from 'react';
import './MemberList.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';


const MemberCard = (props)=>{
  console.log('page: ' + props.page)
  console.log('my props: ' + props.name)
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getMembers = async () => {
        const result = await axios.get(`https://dcw-minipj-backend.herokuapp.com/api/members`)
       
        const action = {type:'GET_MEMBERS',member: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getMembers()
      }, [])

    const deleteMember = async ()=>{
        await axios.delete(`https://dcw-minipj-backend.herokuapp.com/api/members/${props.no}`)
        dispatch({type:'DELETE_MEMBER',no: props.no })
        getMembers()
          
    }
    const updateMember = async () => {
        await axios.put(`https://dcw-minipj-backend.herokuapp.com/api/members/${props.no}`,form)
         dispatch(
             {type:'UPDATE_MEMBER',
             no: props.no,
             member:{...form, no:  props.no}
         })
         getMembers()
         
       }
         
    const renderFunction = () => {
      if(props.page === "Home"){
        return (
          <tr>
             <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.id}</td>
            <td>{props.tel}</td>
          </tr>
        )
      }else{
        return (
          <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.id}</td>
            <td>{props.tel}</td>
            <button onClick={deleteMember }>Delete</button>
            <button onClick={updateMember }>Update</button>
          </tr>
        )
        
      }
    }  
    
    const renderHeadTable = () => {
      if(props.page === "Home" || props.page === 'Home'){
        return (
          <tr>
            <th>FName</th>
              <th>surname</th>
              <th>ID</th>
              <th>Tel.</th>
          </tr>
          )
      }else{
        return (
          <tr>
            <th>Name</th>
          <th>surname</th>
          <th>ID</th>
          <th>Tel.</th>
            <th>Edit</th>
          </tr>
          )
        
      }

    }
  
  return(
    <div className="container-fluid">

    <table class="table">
          {renderHeadTable()}
          {renderFunction()}
        </table>
      </div>
  )

  }
     
  
export default MemberCard
    
    
    

