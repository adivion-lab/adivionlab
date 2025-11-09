import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, FileText, Users, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const AdminDashboard: React.FC = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('papers')
    const [papers, setPapers] = useState(0)
    const [teamMembers, setTeamMembers] = useState(0)

    useEffect(() => {
        const stored = localStorage.getItem('papers')
        setPapers(stored ? JSON.parse(stored).length : 0)

        const storedTeam = localStorage.getItem('teamMembers')
        setTeamMembers(storedTeam ? JSON.parse(storedTeam).length : 0)
    }, [])

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition flex items-center space-x-2"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-semibold">Total Papers</p>
                                <p className="text-4xl font-bold text-gray-800 mt-2">{papers}</p>
                            </div>
                            <FileText className="text-primary" size={48} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-semibold">Team Members</p>
                                <p className="text-4xl font-bold text-gray-800 mt-2">{teamMembers}</p>
                            </div>
                            <Users className="text-green-500" size={48} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-semibold">System Status</p>
                                <p className="text-2xl font-bold text-green-600 mt-2">Active</p>
                            </div>
                            <Settings className="text-blue-500" size={48} />
                        </div>
                    </div>
                </div>

                {/* Admin Options */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Content</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            onClick={() => navigate('/research')}
                            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg cursor-pointer hover:shadow-lg transition border border-blue-200"
                        >
                            <FileText className="text-primary mb-4" size={40} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Manage Papers</h3>
                            <p className="text-gray-600">Add, edit, or delete research papers and publications</p>
                            <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                                Go to Research
                            </button>
                        </div>

                        <div
                            onClick={() => navigate('/team')}
                            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg cursor-pointer hover:shadow-lg transition border border-green-200"
                        >
                            <Users className="text-green-600 mb-4" size={40} />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Manage Team</h3>
                            <p className="text-gray-600">Add, edit, or remove team members from the team page</p>
                            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                                Go to Team
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Info */}
                <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Instructions</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ Click "Go to Research" to manage research papers and publications</li>
                        <li>✓ Click "Go to Team" to manage team member information</li>
                        <li>✓ All changes are saved automatically in your browser's local storage</li>
                        <li>✓ Use the forms on each page to add new entries or edit existing ones</li>
                        <li>✓ Click the trash icon to delete any entry</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
