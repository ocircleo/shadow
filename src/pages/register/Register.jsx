/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../private/provider/Provider";

const Register = () => {
    const { createEmailusers, googleSignIn, updateUser } = useContext(Authcontext)
    const [password, setPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onsubmit = (data) => {

        let usersData = {
            email: data.email,
            name: data.name,
            img: data.imageUrl || 'https://source.unsplash.com/random/100x100/?profile'
        }
        // eslint-disable-next-line no-unused-vars
        createEmailusers(data.email, data.password).then(res => {
            updateUser(data.name, data.imageUrl).then(() => {
                fetch('https://assignment-12-server-beta-tan.vercel.app/addusers', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(usersData)
                }).then(res => res.json()).then(data => navigate(from))


            })
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
        <div className="hero min-h-screen w-full bg-base-200">
            <div className="hero-content flex-col gap-5 w-full md:max-w-[700px]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full">
                    <form className="card-body gap-5" onSubmit={handleSubmit(onsubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Enter your name" {...register("name", { required: 'Must enter name' })} className="input input-bordered" />
                            <p className="text-sm text-red-500">{errors.name?.message}</p>
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={password ? 'text' : 'password'} placeholder="Enter your password" {...register("passwordConfirm", {
                                required: 'Must enter password', minLength: {
                                    value: 6,
                                    message: 'password must be at least 6 character'
                                }, pattern: {
                                    value: /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?]).*[A-Z].*$/,
                                    message: 'password must have at least 1 uppercase & no special chracter, no sapces'
                                },
                            })} className="input input-bordered" />
                            <p className="text-sm text-red-500">{watch('password') != watch('passwordConfirm') ? 'Password doesnt match' : ''}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile photo url</span>
                            </label>
                            <input type="text"  {...register("imageUrl")} placeholder="Enter your imge url" className="input input-bordered" />

                        </div>
                        <p className="flex items-center gap-2 cursor-pointer select-none" ><input type="checkbox" className="h-[20px] w-[20px]" onClick={() => setPassword(!password)} /> show password</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={watch('password') != watch('passwordConfirm') ? true : ''}>Register</button>
                        </div>
                    </form>
                    <div className="flex flex-col px-8 mb-3">
                        <Link to={'/login'} className="label-text-alt link link-hover">Already have an acount Please Login?</Link>
                    </div>
                    <div className="flex px-7 mb-3 flex-col text-center">
                        <p className="my-1 text-lg font-semibold ">or</p>
                        <button className="btn btn-warning flex-1" onClick={googleSing}>Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;