import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Adivion Lab</h3>
                        <p className="text-gray-400">Advancing research and innovation through cutting-edge technology and collaboration.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                            <li><Link to="/research" className="hover:text-white transition">Research</Link></li>
                            <li><Link to="/team" className="hover:text-white transition">Team</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Publications</a></li>
                            <li><a href="#" className="hover:text-white transition">Datasets</a></li>
                            <li><a href="#" className="hover:text-white transition">Tools</a></li>
                            <li><a href="#" className="hover:text-white transition">News</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="mailto:info@adivionlab.com" className="text-gray-400 hover:text-white transition">
                                <Mail size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Adivion Lab. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
