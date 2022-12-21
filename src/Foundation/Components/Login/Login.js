import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../redux/loginSlice";
import JWT from "./mockJWT.json";
import "./index.css";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = async (data) => {

        localStorage.setItem("Key", "Value");

        setIsLoading(true)
            const timer = setTimeout(() => {
                setIsLoading(false)
                if (JWT) {
                    dispatch(
                        setAuthenticated({
                            userName: data.userName,
                            token: JWT
                        }));
                }
            }, 1500);

            return () => clearTimeout(timer);

    };

    return (
        <div>
        {isLoading ? <div className="loading"></div> :
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter User name" {...register("userName")} />
                        <input placeholder="Enter Password" {...register("password", { required: true })} />
                        <input type="submit" />
                        {errors.password && <p>This field is required</p>}
                    </form>
                </div>
        }
        </div >
    );
}

export default Login;
