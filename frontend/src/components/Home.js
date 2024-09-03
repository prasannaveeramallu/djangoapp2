import React, {useEffect, useState} from 'react'

import axios from 'axios'
import './Home.css'


function Home(){
  const [userlist, setUserlist] = useState([])
  
  useEffect(() => {
    axios
    .get('http://127.0.0.1:8000/api/details/')
    .then(res => setUserlist(res.data))
    .catch(err => console.log(err))

   
  }, []) 

  const [name, setName] = useState()
  const [age, setAge] = useState()
 
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }
  const postUser = () => {
    axios
    .post('http://127.0.0.1:8000/api/details/', {
      'name': name,
      'age': parseInt(age)
    })
    .then(res => alert('Created user! Refresh to see the updated list'))
    .catch(err => console.log(err))
  }

  const [delId, setDelId] = useState()

  const delUserInput = (event) => {
      setDelId(event.target.value)
  }

  const delUser =() => {
    axios
    .delete(`http://127.0.0.1:8000/api/details/${parseInt(delId)}`)
    .then(res => alert('Deleted user! Refresh to see the updated list'))
    .catch(err => console.log(err))
  }
  const [edUser, setEdUser] = useState() 
  const [edUserName, setEdUserName] = useState() 
  const [edUserAge, setEdUserAge] = useState() 

  const editUserInput = (event) => {
    setEdUser(event.target.value)
  }
  const editUserNameInput = (event) => {
    setEdUserName(event.target.value)
  }
  const editUserAgeInput = (event) => {
    setEdUserAge(event.target.value)
  }
  const editUser = () => {
    const userID = parseInt(edUser)
    axios.put(`http://127.0.0.1:8000/api/details/${userID}/`, {
      'name': edUserName,
      'age': parseInt(edUserAge)
    })
    .then(res => alert('Updated user! Refresh to see the updated list'))
    .catch(err => console.log(err))

  }
  return (
    <div className='bg-container'>
        <h1>Welcome home!</h1>
        <div>
          <h4> Users list: </h4>
          
          <div className='user-items'>
          {userlist.map(item => <div className='userlist-container'> <div> Id: {item.id}</div><div> Name: {item.name}</div><div> Age: {item.age}</div></div>)}
          </div>
         
        </div>
        <div className='create-user'>
        <input onChange={handleNameChange} type='text'placeholder='Enter user name'/>
        <input onChange={handleAgeChange} type='text'placeholder='Enter age'/>
        <button onClick={postUser}>Create a new user</button>
        </div>
        <div className='edit-user'>
        <input onChange={editUserInput} type='text' placeholder='Enter id to edit'/>
        <input onChange={editUserNameInput} type='text' placeholder='Enter name to edit'/>
        <input onChange={editUserAgeInput} type='text' placeholder='Enter age to edit'/>
        <button onClick={editUser}>Edit user</button>
        </div>
        <div className='delete-user'>
        <input onChange={delUserInput} type='text' placeholder='Enter Id to delete'/>
        <button onClick={delUser}>Delete user</button>

        </div>
       
       
      
      
    </div>
  )
}

export default Home