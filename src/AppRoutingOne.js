import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/aboutPage'
import ProfilePage from './pages/profile/profilePage'
import Taskpage from './pages/tasks/taskpage'
import TaskDetailPage from './pages/tasks/taskDetailPage'

function AppRoutingOne() {
    return (
        <div className='App'>
            <Router>
                <div>
                    <aside>
                        <Link to={'/'}>|| HOME |</Link>
                        <Link to={'/profile'}>| PROFILE |</Link>
                        <Link to={'/about'}>| ABOUT |</Link>
                        <Link to={'/faqs'}>| FAQS |</Link>
                        <Link to={'/404'}>| 404 ||</Link>
                    </aside>
                    <main>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='profile' element={<ProfilePage />} />
                            <Route path='about' element={<AboutPage />} />
                            <Route path='faqs' element={<AboutPage />} />
                            <Route path='tasks' element={<Taskpage />}></Route>
                            <Route path='task/:id' element={<TaskDetailPage />} />
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
