import React from 'react'


// Component Imports
import LoginForm from '../Forms/LoginForm'

function Login({loginMenuState, setLoginMenuState}) {
  return (
    <>
        <LoginForm loginMenuState={loginMenuState} setLoginMenuState={setLoginMenuState}/>
    </>
  )
}

export default Login