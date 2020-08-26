import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'; // universally unique ID - generates a random unique ID
import FormSchema from './validation/FormSchema'
import './App.css';
import * as yup from 'yup'
import axios from 'axios'
import Member from './components/Member'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './components/Home'

const initialTeamList = []

const initialFormValues = {
  // text inputs
  name: '', 
  email: '',
  password: ''
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

export default function App() {
  // giving state variables initial value
  const [users, setUsers] = useState([])
  const [members, setMembers] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  ///// GET User Data from API /////
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
      })
    .catch(err => {
      console.log('error')
    })
  }, [])
  
  console.log(users)

  ///// POST a user (when a user is submitted in the form) /////
  const postUsers = newUser => {
      axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
        console.log(users)
      })
      .catch(err => {
        console.log('error')
      })
  }


  const onInputChange = e => {
    const { name } = e.target
    const { value } = e.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = e => {
    e.preventDefault()
    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.password.trim())
    {
      return 
    }
    const newMember = { ...formValues, id: uuid() }

    setMembers([newMember, ...members])

    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  return (
    <div className="App container"> 
    <header>
        <Link className="headerName" to='/'>
          <h1>Secret Family Recipes</h1>
        </Link>
      </header>
      <Switch>
        <Route path='/signup'>
          <SignUp
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        </Route>
        <Route path='/login'>
          <LogIn
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
        
        {/* mapping through teamMembers array and 'consuming' TeamMember component for each */}
        <div className="Members">
          {
            members.map(member => {
              return (
                <member key={member.id} details={member} />
              )
            })
          }
        </div>
      </div>   
    
  );
}