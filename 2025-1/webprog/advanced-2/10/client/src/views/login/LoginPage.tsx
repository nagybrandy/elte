import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import userStore from '@/store/userStore'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/services/useAuth'
import { toast } from "sonner"

export default function LoginPage() {
  // controlled - state - formi
  /* const [counter, setCounter] = useState(0) */
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  console.log(formData)
  /*   const { count, inc } = useStore()
    console.log(count) */

  const { login } = userStore()

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onError: (e : any)=> {
      console.log(e)
      toast.error(e.response.data.message)
    },
    onSuccess: (e)=> {
      console.log(e)
      navigate('/')
      login(e.data)

    }
  })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginMutation.mutate({ email: formData.email, password: formData.password })
  }
  return (
    <div className="container mx-auto flex items-center justify-center my-10">
      {/*    <div>{counter}</div>
      <Button onClick={() => setCounter(counter + 1)}>Click me</Button> */}
      {/*       <div>{count}</div>
      <Button onClick={() => inc()}>Click me</Button> */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{' '}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 