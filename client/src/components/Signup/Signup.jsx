import React from 'react'


// Component Imports
import SignUpForm from '../Forms/SignUpForm'

function SignUp({loginMenuState, setLoginMenuState}) {
  return (
    <div>
        <SignUpForm  loginMenuState={loginMenuState} setLoginMenuState={setLoginMenuState}/>
    </div>
  )
}

export default SignUp