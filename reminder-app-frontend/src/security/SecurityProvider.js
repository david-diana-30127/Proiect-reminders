import { useEffect, useState } from 'react'
import { userLogin, userLogout } from '../api/userApi'
import SecurityContext from './SecurityContext'

const SecurityProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState(false)

  useEffect(() => {
    const username = localStorage.getItem("email");
    if (!!username) {
      setLoggedIn(true);
      setEmail(username);
    }
  }, [])

  return (
    <SecurityContext.Provider
      value={{
        login: async (username, password) => {
          await userLogin(username, password);
          setLoggedIn(true)
          setEmail(username);
          localStorage.setItem("email", username);
        },
        logout: () => {
          userLogout();
          localStorage.removeItem("email");
          setLoggedIn(false)
        },
        loggedIn,
        email
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  )
}

export default SecurityProvider