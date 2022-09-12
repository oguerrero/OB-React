import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/aboutPage'
import ProfilePage from './pages/profile/profilePage'
import Taskpage from './pages/tasks/taskpage'
import TaskDetailPage from './pages/tasks/taskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import PropsPage from './pages/home/propsPage'

function AppRoutingOne() {
    const taskList = [
        {
            id: 1,
            name: '1',
            description: '1'
        },
        {
            id: 2,
            name: '2',
            description: '2'
        },
        {
            id: 3,
            name: '3',
            description: '3'
        }
    ]

    const logged = localStorage.getItem('credentials')

    return (
        <div className='App'>
            <Router>
                <div>
                    <aside>
                        <Link to={'/'}>|| HOME |</Link>
                        {logged ? (
                            <Link to={'/profile'}>| PROFILE |</Link>
                        ) : (
                            <Link to={'/login'}>|LOGIN|</Link>
                        )}
                        <Link to={'/about'}>| ABOUT |</Link>
                        <Link to={'/faqs'}>| FAQS |</Link>
                        <Link to={'/404'}>| 404 ||</Link>
                        {taskList.map((task) => (
                            <Link to={`task/${task.id}`} key={task.id}>
                                |Task {task.name}|
                            </Link>
                        ))}
                    </aside>
                    <main>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/propspage' element={<PropsPage />} />
                            <Route path='profile' element={<ProfilePage />} />
                            <Route path='login' element={<LoginPage />} />
                            <Route path='about' element={<AboutPage />} />
                            <Route path='faqs' element={<AboutPage />} />
                            <Route path='tasks' element={<Taskpage />}></Route>
                            <Route
                                path='task/:id'
                                element={<TaskDetailPage />}
                            />

                            {/* 404 Not Found Page */}
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    )
}

export default AppRoutingOne
