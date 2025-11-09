import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react'

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-6">Welcome to Adivion Lab</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Pioneering research in innovative technologies and cutting-edge solutions for tomorrow's challenges.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to="/research"
                                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center space-x-2"
                                >
                                    <span>Explore Our Work</span>
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src="/adivionlab.png" alt="Lab" className="w-full max-w-md mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <BookOpen className="text-primary mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-4">Research</h3>
                            <p className="text-gray-600">
                                Conducting groundbreaking research across multiple domains with a focus on real-world applications.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Users className="text-primary mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                Working with leading institutions and industry partners to advance innovation and discovery.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Zap className="text-primary mb-4" size={40} />
                            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                Developing cutting-edge solutions that transform ideas into impactful real-world outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Be part of a team pushing the boundaries of research and innovation. Explore opportunities with Adivion Lab.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
