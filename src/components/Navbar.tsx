import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/adivionlab.png" alt="Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold text-primary">Adivion Lab</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary transition">Home</Link>
                        <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary transition">About</Link>
                        <Link to="/research" className="px-3 py-2 text-gray-700 hover:text-primary transition">Research</Link>
                        <Link to="/team" className="px-3 py-2 text-gray-700 hover:text-primary transition">Team</Link>
                        <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-primary transition">Contact</Link>

                        {isAuthenticated ? (
                            <div className="flex items-center space-x-2 ml-4 pl-4 border-l">
                                <Link
                                    to="/admin/dashboard"
                                    className="px-3 py-2 bg-primary text-white rounded hover:bg-blue-700 transition"
                                >
                                    Admin
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 text-gray-700 hover:text-primary transition"
                                    title="Logout"
                                >
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/admin/login"
                                className="px-3 py-2 ml-4 pl-4 border-l text-gray-700 hover:text-primary transition"
                            >
                                Admin
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        {isAuthenticated && (
                            <button
                                onClick={handleLogout}
                                className="p-2 text-gray-700 hover:text-primary"
                                title="Logout"
                            >
                                <LogOut size={20} />
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-700 hover:text-primary"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t">
                        <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
                        <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
                        <Link to="/research" className="block px-3 py-2 text-gray-700 hover:text-primary">Research</Link>
                        <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-primary">Team</Link>
                        <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
                        {isAuthenticated ? (
                            <Link to="/admin/dashboard" className="block px-3 py-2 text-primary font-semibold">Admin Panel</Link>
                        ) : (
                            <Link to="/admin/login" className="block px-3 py-2 text-primary font-semibold">Admin Login</Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
