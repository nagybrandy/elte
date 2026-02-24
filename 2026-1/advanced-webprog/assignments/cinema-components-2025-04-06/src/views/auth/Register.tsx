import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Register() {
  return (
    <div className="container mx-auto flex items-center justify-center my-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password_confirmation" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
            <p className="text-center text-sm">
              Already have an account?{' '}
              <span className="text-primary hover:underline cursor-pointer">
                Login here
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 