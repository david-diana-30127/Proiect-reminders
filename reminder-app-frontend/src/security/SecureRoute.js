import { Navigate, Outlet } from 'react-router-dom'
import useSecurity from '../hooks/useSecurity'

const SecureRoute = () => {
  const { loggedIn } = useSecurity()

  return (
    loggedIn ? <Outlet /> : <Navigate to="/login" />
  )
}

export default SecureRoute