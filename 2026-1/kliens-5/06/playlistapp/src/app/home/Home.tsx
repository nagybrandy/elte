import logo from "/logo.png"

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-gray-100">
    <div className="px-5 navbar bg-base-100">
        <div className="navbar-start ">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="item" href="/home">
                            <i className="fas fa-home"></i> Home
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/playlists">
                            <i className="fas fa-headphones"></i> My Playlists
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/tracks">
                            <i className="fas fa-music"></i> Tracks
                        </a>
                    </li>
                    <li>
                        <a className="item" href="/search">
                            <i className="fas fa-search"></i> Search
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className="w-44"><img src={logo} alt="Logo" /></div>
        </div>
        <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
                <li>
                    <a className="item" href="/home">
                        <i className="fas fa-home"></i> Home
                    </a>
                </li>
                <li>
                    <a className="item" href="/playlists">
                        <i className="fas fa-headphones"></i> My Playlists
                    </a>
                </li>
                <li>
                    <a className="item" href="/tracks">
                        <i className="fas fa-music"></i> Tracks
                    </a>
                </li>
                <li>
                    <a className="item" href="/search">
                        <i className="fas fa-search"></i> Search
                    </a>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            
            <div className="dropdown">
                <div tabIndex={0} role="button" className="m-1 btn"><i className="fas fa-user"></i> Jake Peralta</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                    <li><a>Playlists</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="hero min-h-[80vh] bg-base-100">
        <img src="/cover-without-text.png" alt="Cover" className="h-[80vh] contrast-50 drop-shadow brightness-50 opacity-35"/>
        <div className="container w-8/12 px-4 mx-auto">
            <div className="flex-col w-full hero-content lg:flex-row-reverse">
              <div className="ml-10 text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Come and create playlists with ease, tailor your music experience to your heart's content! Add your favorite tracks to your perfect playlists and let the music take you on a journey!</p>
              </div>
              <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-300">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
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
    </div>
</div>
  )
}

export default Home