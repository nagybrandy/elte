import { useDispatch, useSelector } from "react-redux"
import cover from "../../assets/cover-without-text.png"
import { useEffect, useState } from "react"
import { setUser } from "../../store/userSlice"
import { useLoginMutation } from "../../store/playlistsApi"
import { useNavigate } from "react-router"


const defaultData = {
  "strategy": "local",
  "email": "newuser2@example.com",
  "password": "password123"
}
export function Home() {

  const [login, { data: user, isLoading, isFetching, isError, isSuccess, error }] = useLoginMutation()
  const { isLoggedIn } = useSelector(state => state.user)

  const [formData, setFormData] = useState(defaultData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      dispatch(setUser(user))
      navigate("/tracks")
    }
  }, [user])

  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }
  console.log(error)
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/playlists")
    }
  }, [])


  return (
    <div className="hero min-h-[80vh] bg-base-100">
      {isSuccess && <div className="toast toast-end">
        <div className="alert alert-success">
          <span>Successful login!</span>
        </div>
      </div>}
      {isError && <div className="toast toast-end">
        <div className="alert alert-error">
          <span>Error: {error.data.message}</span>
        </div>
      </div>}
      <img src={cover} alt="" className="h-[80vh] contrast-50 drop-shadow	brightness-50 opacity-35	" />
      <div className="flex-col w-10/12 hero-content lg:flex-row-reverse">
        <div className="ml-10 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Come and create playlists with ease, tailor your music experience to your heart's content! Add your favorite tracks to your perfect playlists and let the music take you on a journey!</p>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-300">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="UserName" className="input input-bordered" value={formData.email} name="email" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" value={formData.password} name="password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
