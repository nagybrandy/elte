import React from 'react';
import cover_without_text from './../../assets/cover-without-text.png';
import Menu from '../layout/Menu';
const Landing = () => {
    return (
        <>
            <Menu />
            <div className="hero min-h-[80vh] bg-base-100">
                <img src={cover_without_text} alt="Cover" className="h-[80vh] contrast-50 drop-shadow brightness-50 opacity-35" />
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
        </>
    );
};

export default Landing;