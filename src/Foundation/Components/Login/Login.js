import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../../../redux/loginSlice";
import { login } from "../../../redux/loginSlice";

const Login = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {

        dispatch(
            login({
                userName: data.userName,
                password: data.password
            }));

    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter User name" {...register("userName")} />
                <input placeholder="Enter Password" {...register("password", { required: true })} />

                <input type="submit" />
                {errors.password && <p>This field is required</p>}
            </form>
            {/* {isAuthenticated && <span>User is logged in</span>} */}
        </div>
    );
}

export default Login;
