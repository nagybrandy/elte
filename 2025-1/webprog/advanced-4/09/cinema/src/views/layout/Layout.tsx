import Background from "./components/Background"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Providers from "./components/Providers"

interface LayoutProps {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-background">
            <Providers>
                <Background />
                <Navbar />
                <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
                    {children}
                </main>
                <Footer />
            </Providers>
        </div>
    )
}

export default Layout
