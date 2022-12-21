import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/loginSlice";
import styles from "./logout.module.css";

function Logout() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(logout());

    };

    return (
        <div className={styles.logout}>
            <p>Hi {user.userName} You are logged in</p>
            <button className={styles.button} onClick={(e) => handleClick(e)}>Logout</button>
        </div>
    );
}

export default Logout;
