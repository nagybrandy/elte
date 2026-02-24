import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Background />
            <Navbar />

            <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
