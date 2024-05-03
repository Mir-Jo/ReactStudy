import React , {useState} from "react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

function LoginControl2(props){
  const [isLoggedIn, setIsLoggined] = useState
  (false);
  const handleLoginClick = () => {
    setIsLoggined(true);
  }
  const handleLogoutClick = () =>{
    setIsLoggined(false);
  }
  return(
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn
      ? <LogoutButton onClick = {handleLogoutClick} />
      : <LoginButton onClick = {handleLoginClick} />
      }
    </div>
  )
}
export default LoginControl2;