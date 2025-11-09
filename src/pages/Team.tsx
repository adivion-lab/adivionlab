import React, { useState, useEffect } from 'react'
import { Mail, Plus, Trash2, Edit, Linkedin } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface TeamMember {
    id: string
    name: string
    position: string
    email: string
    bio: string
    linkedinUrl?: string
    image?: string
}

const Team: React.FC = () => {
    const { isAuthenticated } = useAuth()
    const [members, setMembers] = useState<TeamMember[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        email: '',
        bio: '',
        linkedinUrl: '',
        image: ''
    })

    // Load team members from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('teamMembers')
        if (stored) {
            setMembers(JSON.parse(stored))
        } else {
            // Initialize with sample members
            const sampleMembers: TeamMember[] = [
                {
                    id: '1',
                    name: 'Dr. Sarah Johnson',
                    position: 'Lab Director & Founder',
                    email: 'sarah@adivionlab.com',
                    bio: 'PhD in Computer Science with 15+ years of research experience in AI and machine learning.'
                },
                {
                    id: '2',
                    name: 'Prof. Michael Chen',
                    position: 'Senior Research Lead',
                    email: 'michael@adivionlab.com',
                    bio: 'Leading our quantum computing research initiatives with expertise in theoretical physics.'
                },
                {
                    id: '3',
                    name: 'Dr. Emily Rodriguez',
                    position: 'Data Science Lead',
                    email: 'emily@adivionlab.com',
                    bio: 'Specializing in data analytics and statistical modeling for complex datasets.'
                }
            ]
            setMembers(sampleMembers)
            localStorage.setItem('teamMembers', JSON.stringify(sampleMembers))
        }
    }, [])

    const saveMembers = (newMembers: TeamMember[]) => {
        setMembers(newMembers)
        localStorage.setItem('teamMembers', JSON.stringify(newMembers))
    }

    const handleAddMember = () => {
        if (!formData.name.trim()) {
            alert('Please enter member name')
            return
        }

        if (editingId) {
            const updated = members.map((m: TeamMember) =>
                m.id === editingId
                    ? { ...m, ...formData }
                    : m
            )
            saveMembers(updated)
            setEditingId(null)
        } else {
            const newMember: TeamMember = {
                id: Date.now().toString(),
                ...formData
            }
            saveMembers([...members, newMember])
        }

        setFormData({
            name: '',
            position: '',
            email: '',
            bio: '',
            linkedinUrl: '',
            image: ''
        })
        setShowForm(false)
    }

    const handleEditMember = (member: TeamMember) => {
        setFormData({
            name: member.name,
            position: member.position,
            email: member.email,
            bio: member.bio,
            linkedinUrl: member.linkedinUrl || '',
            image: member.image || ''
        })
        setEditingId(member.id)
        setShowForm(true)
    }

    const handleDeleteMember = (id: string) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            saveMembers(members.filter((m: TeamMember) => m.id !== id))
        }
    }

    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Our Team</h1>
                    <p className="text-xl text-blue-100 mt-4">Meet the brilliant minds behind Adivion Lab</p>
                </div>
            </section>

            {/* Admin Panel */}
            {isAuthenticated && (
                <section className="bg-blue-50 border-b-2 border-primary py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => {
                                setShowForm(!showForm)
                                setEditingId(null)
                                setFormData({
                                    name: '',
                                    position: '',
                                    email: '',
                                    bio: '',
                                    linkedinUrl: '',
                                    image: ''
                                })
                            }}
                            className="bg-primary text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition"
                        >
                            <Plus size={20} />
                            <span>{editingId ? 'Cancel Edit' : 'Add Team Member'}</span>
                        </button>

                        {showForm && (
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                                <h3 className="text-xl font-bold mb-4">{editingId ? 'Edit Member' : 'Add Team Member'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Position/Title"
                                        value={formData.position}
                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="url"
                                        placeholder="LinkedIn URL (optional)"
                                        value={formData.linkedinUrl}
                                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                </div>
                                <textarea
                                    placeholder="Bio"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="border p-2 rounded w-full mt-4 h-20"
                                />
                                <button
                                    onClick={handleAddMember}
                                    className="bg-green-600 text-white px-6 py-2 rounded mt-4 hover:bg-green-700 transition"
                                >
                                    {editingId ? 'Update Member' : 'Add Member'}
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Team Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {members.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No team members yet.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {members.map((member: TeamMember) => (
                                <div key={member.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                                    {member.image && (
                                        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                    )}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                                <p className="text-primary font-semibold text-sm">{member.position}</p>
                                            </div>
                                            {isAuthenticated && (
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEditMember(member)}
                                                        className="p-1 text-blue-600 hover:bg-blue-50 rounded transition"
                                                        title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteMember(member.id)}
                                                        className="p-1 text-red-600 hover:bg-red-50 rounded transition"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                                        <div className="flex space-x-3 pt-4 border-t">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-primary hover:text-blue-700 font-semibold flex items-center space-x-1 transition text-sm"
                                            >
                                                <Mail size={16} />
                                                <span>Email</span>
                                            </a>
                                            {member.linkedinUrl && (
                                                <a
                                                    href={member.linkedinUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-blue-700 font-semibold flex items-center space-x-1 transition text-sm"
                                                >
                                                    <Linkedin size={16} />
                                                    <span>LinkedIn</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Team
