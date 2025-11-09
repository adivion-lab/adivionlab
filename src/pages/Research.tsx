import React, { useState, useEffect } from 'react'
import { Download, ExternalLink, Plus, Trash2, Edit } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface Paper {
    id: string
    title: string
    authors: string
    year: number
    abstract: string
    pdfUrl?: string
    link?: string
}

const Research: React.FC = () => {
    const { isAuthenticated } = useAuth()
    const [papers, setPapers] = useState<Paper[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        title: '',
        authors: '',
        year: new Date().getFullYear(),
        abstract: '',
        pdfUrl: '',
        link: ''
    })

    // Load papers from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('papers')
        if (stored) {
            setPapers(JSON.parse(stored))
        } else {
            // Initialize with sample papers
            const samplePapers: Paper[] = [
                {
                    id: '1',
                    title: 'Advanced Machine Learning Approaches in Data Analysis',
                    authors: 'Smith, J., Johnson, A., Williams, R.',
                    year: 2024,
                    abstract: 'This paper explores cutting-edge machine learning techniques for large-scale data analysis and pattern recognition.',
                    link: '#'
                },
                {
                    id: '2',
                    title: 'Quantum Computing: Theory and Applications',
                    authors: 'Brown, K., Davis, M., Taylor, L.',
                    year: 2023,
                    abstract: 'A comprehensive overview of quantum computing principles and their practical applications in solving complex problems.',
                    link: '#'
                }
            ]
            setPapers(samplePapers)
            localStorage.setItem('papers', JSON.stringify(samplePapers))
        }
    }, [])

    const savePapers = (newPapers: Paper[]) => {
        setPapers(newPapers)
        localStorage.setItem('papers', JSON.stringify(newPapers))
    }

    const handleAddPaper = () => {
        if (!formData.title.trim()) {
            alert('Please enter a paper title')
            return
        }

        if (editingId) {
            const updated = papers.map(p =>
                p.id === editingId
                    ? { ...p, ...formData }
                    : p
            )
            savePapers(updated)
            setEditingId(null)
        } else {
            const newPaper: Paper = {
                id: Date.now().toString(),
                ...formData
            }
            savePapers([newPaper, ...papers])
        }

        setFormData({
            title: '',
            authors: '',
            year: new Date().getFullYear(),
            abstract: '',
            pdfUrl: '',
            link: ''
        })
        setShowForm(false)
    }

    const handleEditPaper = (paper: Paper) => {
        setFormData({
            title: paper.title,
            authors: paper.authors,
            year: paper.year,
            abstract: paper.abstract,
            pdfUrl: paper.pdfUrl || '',
            link: paper.link || ''
        })
        setEditingId(paper.id)
        setShowForm(true)
    }

    const handleDeletePaper = (id: string) => {
        if (window.confirm('Are you sure you want to delete this paper?')) {
            savePapers(papers.filter(p => p.id !== id))
        }
    }

    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Research & Publications</h1>
                    <p className="text-xl text-blue-100 mt-4">Our latest research papers and findings</p>
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
                                    title: '',
                                    authors: '',
                                    year: new Date().getFullYear(),
                                    abstract: '',
                                    pdfUrl: '',
                                    link: ''
                                })
                            }}
                            className="bg-primary text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition"
                        >
                            <Plus size={20} />
                            <span>{editingId ? 'Cancel Edit' : 'Add New Paper'}</span>
                        </button>

                        {showForm && (
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                                <h3 className="text-xl font-bold mb-4">{editingId ? 'Edit Paper' : 'Add New Paper'}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Authors"
                                        value={formData.authors}
                                        onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Year"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="url"
                                        placeholder="PDF Link (optional)"
                                        value={formData.pdfUrl}
                                        onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                    <input
                                        type="url"
                                        placeholder="External Link (optional)"
                                        value={formData.link}
                                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                        className="border p-2 rounded w-full"
                                    />
                                </div>
                                <textarea
                                    placeholder="Abstract"
                                    value={formData.abstract}
                                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                                    className="border p-2 rounded w-full mt-4 h-24"
                                />
                                <button
                                    onClick={handleAddPaper}
                                    className="bg-green-600 text-white px-6 py-2 rounded mt-4 hover:bg-green-700 transition"
                                >
                                    {editingId ? 'Update Paper' : 'Add Paper'}
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Papers List */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {papers.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No papers published yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {papers.map((paper) => (
                                <div key={paper.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{paper.title}</h3>
                                            <p className="text-gray-600 text-sm mb-1">
                                                <span className="font-semibold">Authors:</span> {paper.authors}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                <span className="font-semibold">Year:</span> {paper.year}
                                            </p>
                                        </div>
                                        {isAuthenticated && (
                                            <div className="flex space-x-2 ml-4">
                                                <button
                                                    onClick={() => handleEditPaper(paper)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                                                    title="Edit"
                                                >
                                                    <Edit size={20} />
                                                </button>
                                                <button
                                                    onClick={() => handleDeletePaper(paper.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">{paper.abstract}</p>

                                    <div className="flex space-x-4">
                                        {paper.pdfUrl && (
                                            <a
                                                href={paper.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-blue-700 font-semibold flex items-center space-x-1 transition"
                                            >
                                                <Download size={18} />
                                                <span>Download PDF</span>
                                            </a>
                                        )}
                                        {paper.link && (
                                            <a
                                                href={paper.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-blue-700 font-semibold flex items-center space-x-1 transition"
                                            >
                                                <ExternalLink size={18} />
                                                <span>View Paper</span>
                                            </a>
                                        )}
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

export default Research
