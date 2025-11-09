import React from 'react'
import { BookOpen, Users, Target, Award } from 'lucide-react'

const About: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">About Adivion Lab</h1>
                    <p className="text-xl text-blue-100 mt-4">Building the future through research and innovation</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Adivion Lab was founded with a vision to bridge the gap between theoretical research and practical applications.
                                Our team of dedicated researchers and innovators work collaboratively to solve complex problems and push the
                                boundaries of what's possible.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                With a commitment to excellence and a passion for discovery, we've established ourselves as a leading research
                                institution, contributing significantly to the advancement of knowledge and technology.
                            </p>
                        </div>
                        <div>
                            <img src="/adivionlab.png" alt="About" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Target className="text-primary mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To conduct cutting-edge research that addresses real-world challenges and creates lasting positive impact
                                on society through innovation, collaboration, and excellence.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                            <Award className="text-primary mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be a globally recognized center of excellence where researchers and innovators transform ideas into
                                impactful solutions that advance technology and improve lives.
                            </p>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">01</span>
                                </div>
                                <h4 className="font-semibold mb-2">Integrity</h4>
                                <p className="text-gray-600 text-sm">Honest and ethical conduct in all endeavors</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">02</span>
                                </div>
                                <h4 className="font-semibold mb-2">Excellence</h4>
                                <p className="text-gray-600 text-sm">Commitment to highest standards of quality</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">03</span>
                                </div>
                                <h4 className="font-semibold mb-2">Innovation</h4>
                                <p className="text-gray-600 text-sm">Embracing creativity and new ideas</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">04</span>
                                </div>
                                <h4 className="font-semibold mb-2">Collaboration</h4>
                                <p className="text-gray-600 text-sm">Working together towards common goals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
