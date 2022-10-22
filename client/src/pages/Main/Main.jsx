import React,{ useState, useEffect} from 'react'
import MessageForm from '../../components/Forms/MessageForm'
import Login from '../../components/Login/Login'
import Signup from '../../components/Signup/Signup'
function Main() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginsignup, setloginsignup] = useState(false)
    const token = localStorage.getItem('id_token')
        

        useEffect(() => {
            if(token){
                setLoggedIn(true)
            }else if(!token){
                return
            }
        }, [loggedIn, token])
        


    // const signout = () =>{
    //     localStorage.clear()
    //     setLoggedIn(false)
    // }

  return (
      <div>
          {loggedIn ?
        <div className='main-content'>
          <h1>Community Alerts</h1>
          <MessageForm/>
        </div>
        
          :
          <div className='main-content'>
            <h1>Community Alerts</h1>
            <div>
              {loginsignup ?
              <Signup loginMenuState={loginsignup} setLoginMenuState={setloginsignup}/>:
              <Login loginMenuState={loginsignup} setLoginMenuState={setloginsignup}/>
              }
            </div>
        </div>
          
          }
          </div>
        
  )
}

export default Main