import React, { useState } from 'react'
import { Send, Phone, MapPin, Mail } from 'lucide-react'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you can integrate with an email service or backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-xl text-blue-100 mt-4">Get in touch with the Adivion Lab team</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Contact Info Cards */}
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Phone className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Mail className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-600">info@adivionlab.com</p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <MapPin className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">Address</h3>
                            <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>

                        {submitted && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 rounded">
                                <p className="text-green-700 font-semibold">Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition h-32"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
