import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Team from './pages/Team'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="flex flex-col min-h-screen bg-white">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/research" element={<Research />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/admin/login" element={<AdminLogin />} />
                            <Route
                                path="/admin/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <AdminDashboard />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
