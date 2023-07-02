/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../private/provider/Provider";

const Register = () => {
    const [password, setPassword] = useState(false)
    const { signInEmailusers, googleSignIn } = useContext(Authcontext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'

    const onsubmit = (data) => {
        signInEmailusers(data.email, data.password).then(data => {
            if (data.user) {
                navigate(from )
            }
        })
    }
    const googleSing = () => {
        googleSignIn().then(res => {
            let user = res.user;
            let userData = {
                name: user.displayName,
                email: user.email,
                role: null,
                img: user.photoURL || 'https://source.unsplash.com/random/100x100/?profile'
            }
            fetch('https://assignment-12-server-beta-tan.vercel.app/addusers', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(userData)
            }).then(res => res.json()).then(data => navigate(from))
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-5">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Please Login</h1>
                </div>
                <div className="card flex-shrink-0 md:min-w-[700px] sm:min-w-[500px] shadow-2xl bg-base-100">
                    <form className="card-body gap-5" onSubmit={handleSubmit(onsubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" {...register("email", { required: 'Must enter email' })} className="input input-bordered" />
                            <p className="text-sm text-red-500">{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={password ? 'text' : 'password'} placeholder="Enter your password" {...register("password", {
                                required: 'Must enter password', minLength: {
                                    value: 6,
                                    message: 'password must be at least 6 character'
                                }, pattern: {
                                    value: /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).*[A-Z].*$/,
                                    message: 'password must have at least 1 uppercase & no special chracter, no sapces'
                                },
                            })} className="input input-bordered" />
                            <p className="text-sm text-red-500">{errors.password?.message}</p>
                        </div>

                        <p className="flex items-center gap-2 cursor-pointer select-none" ><input type="checkbox" className="h-[20px] w-[20px]" onClick={() => setPassword(!password)} /> show password</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col px-8 mb-3">
                        <Link to={'/register'} className="label-text-alt link link-hover">Dont have an acount ? Please Register</Link>
                    </div>
                    <div className="flex px-7 mb-3 flex-col text-center">
                        <p className="my-1 text-lg font-semibold">or</p>
                        <button className="btn btn-warning flex-1" onClick={googleSing}>Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;