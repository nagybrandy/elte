import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { NavLink } from 'react-router'
import userStore from '@/store/userStore'

const Navbar = () => {
    const { user, logout } = userStore()
    console.log(user)
    return (
        <nav className="border-b z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
            <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-lg shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
                        <div className="flex items-center space-x-8">
                            <NavLink to="/">
                                <span className="text-xl font-bold">
                                    Cinema
                                </span>
                            </NavLink>
                            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                Screenings
                            </span>
                            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                Movies
                            </span>
                            <NavLink to="/bookings">
                                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                    My Bookings
                                </span>
                            </NavLink>
                        </div>
                        <div className="flex items-center space-x-4">
                            {user.isLoggedIn && <span className="text-muted-foreground">Welcome, {user.name}</span>}

                            {user.isLoggedIn ?
                                <>
                                    <Button variant="outline" onClick={logout}>
                                        Logout
                                    </Button>
                                </>
                                : 
                                <>
                                    <NavLink to="/login">
                                        <Button variant="ghost">Login</Button>
                                    </NavLink>
                                    <Button>Register</Button>
                                </>
                                }
                           
                            <button className="bg-background rounded-full flex items-center justify-center w-8 h-8 border">
                                🌙
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </nav>
    )
}

export default Navbar
