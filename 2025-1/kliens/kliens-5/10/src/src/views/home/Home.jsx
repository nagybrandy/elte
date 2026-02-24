import { useDispatch } from "react-redux"
import cover from "../../assets/cover-without-text.png"
import { useState, useEffect } from "react"
import { setUser } from "../../store/userSlice"
import { useLoginMutation } from "../../store/playlistApi"
import { useNavigate } from "react-router-dom"
const defaultData = {
  "strategy": "local",
  "email": "newuser1@example.com",
  "password": "password123"
}

export function Home() {
  const [userData, setUserData] = useState(defaultData)
  const [login, { isLoading, error, isSuccess, isError, data }] = useLoginMutation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  // Handle successful login
  useEffect(() => {
    if (isSuccess && data) {
      console.log("Login successful:", data)
      dispatch(setUser(data))
      navigate('/playlists')
    }
  }, [isSuccess, data, dispatch, userData.email])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({
      "strategy": "local",
      "email": userData.email,
      "password": userData.password
    })
  }

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/playlists')
      console.log(user.user.email, isLoggedIn)
    }
  }, [user.user.email, isLoggedIn])

  return (
    <div className="hero min-h-[80vh] bg-base-100">
      {data?.code === 401 && <div className="toast">
        <div className="alert alert-error">
          <span>{data.message}</span>
        </div>
      </div>}
      {data?.accessToken && <div className="toast">
        <div className="alert alert-success">
          <span>Login successful!</span>
        </div>
      </div>}
      {isError && <div className="toast">
        <div className="alert alert-error">
          <span>Login failed. Please check your credentials.</span>
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
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" name="email" className="input input-bordered" value={userData.email} onInput={(e) => handleInput(e)} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" value={userData.password} onInput={(e) => handleInput(e)} />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
