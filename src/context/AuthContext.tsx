import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
    isAuthenticated: boolean
    login: (password: string) => boolean
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const ADMIN_PASSWORD = 'adivionlab2024' // Change this to your desired password

    useEffect(() => {
        // Check if user was previously logged in
        const token = localStorage.getItem('adminToken')
        if (token === 'authenticated') {
            setIsAuthenticated(true)
        }
    }, [])

    const login = (password: string): boolean => {
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true)
            localStorage.setItem('adminToken', 'authenticated')
            return true
        }
        return false
    }

    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('adminToken')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
