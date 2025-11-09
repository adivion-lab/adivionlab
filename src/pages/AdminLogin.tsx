import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const AdminLogin: React.FC = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/dashboard')
        }
    }, [isAuthenticated, navigate])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!password) {
            setError('Please enter a password')
            return
        }

        if (login(password)) {
            navigate('/admin/dashboard')
        } else {
            setError('Invalid password. Please try again.')
            setPassword('')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-primary to-blue-900 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-center mb-8">
                    <div className="bg-primary text-white rounded-full p-3">
                        <Lock size={32} />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Admin Login</h1>
                <p className="text-gray-600 text-center mb-8">Enter your password to access the admin panel</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition"
                        />
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                            <p className="text-red-700">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-gray-700 text-sm">
                        <strong>Demo Password:</strong> adivionlab2024
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
