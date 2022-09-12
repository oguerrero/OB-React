import { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashBoard from './pages/dashboard/DashBoard'

function AppRoutingFinal() {

    // TODO: Create real session storage
    let loggedIn = localStorage.getItem('credentials')

    useEffect(() => {
        loggedIn = localStorage.getItem('credentials')
    }, [])
    return (
        <div>
            <Router>
                <Routes>
                    {/* <Route path='dashboard' element={<DashBoard />} /> */}
                    <Route
                        path='/'
                        element={
                            loggedIn ? (
                                <Navigate to={'/dashboard'} replace={true} />
                            ) : (
                                <Navigate to={'/login'} replace={true} />
                            )
                        }></Route>
                    <Route path='login' element={<LoginPage />} />
                    <Route
                        path='/dashboard'
                        element={
                            loggedIn ? (
                                <DashBoard />
                            ) : (
                                <Navigate to='/login' replace={true} />
                            )
                        }></Route>

                    {/* 404 Not Found Page */}
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRoutingFinal
