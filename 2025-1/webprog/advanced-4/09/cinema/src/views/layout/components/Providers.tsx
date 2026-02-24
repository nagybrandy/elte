import { BrowserRouter } from "react-router"
import { ThemeProvider } from "./theme-provider"

interface ProvidersProps {
    children: React.ReactElement | React.ReactElement[]
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="theme">
                {children}
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default Providers
