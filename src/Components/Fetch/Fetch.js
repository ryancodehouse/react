import React, { useState, useEffect } from "react";
import styles from './fetch.module.css';

const API_ENDPOINT = "https://api.randomuser.me/";
const LOCAL_STORAGE_KEY = "react-profile-store";

function FetchAPI() {

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [listItems, setProfileList] = useState([]);
    const [x, setDeleteList] = useState();

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setProfileList(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listItems));
    }, [listItems]);

    const fetchPost = async () => {
        setIsLoading(true);
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        setProfile(data?.results[0]);
        setIsLoading(false);
        setCount(count + 1);

        const profileList = {
            id: data.info.seed,
            value: data.results[0].name.first,
        };

        setProfileList((oldList) => [...oldList, profileList]);
    };

    const findProfileHandler = async (event) => {

        const chosenProfile = await fetch(`https://randomuser.me/api/?seed=${event.target.dataset.id}`);
        const chosenProfileData = await chosenProfile.json();
        setProfile(chosenProfileData?.results[0]);
    };

    const deleteHandler = () => {
        setDeleteList(localStorage.removeItem("react-profile-store"));
    }

    //this means just run on first render
    useEffect(() => {
        fetchPost();
    }, []);

    return (

        <div>
            <p>This fetches data from an API and shows a loading wheel while its loading </p>
            {isLoading ? <div className={styles.loading}></div> :
                <div>
                    <button className={styles.button} onClick={fetchPost} > Find a new profile </button>
                    <button className={styles.button} onClick={deleteHandler} > Delete List From Local Memory </button>
                    {profile !== null &&
                        < div className={styles.profile}>
                            <img src={profile.picture.medium} />
                            <p>First Name: {profile.name?.first} </p>
                            <p>Last Name: {profile.name?.last} </p>
                            <p>City: {profile.location?.city} </p>
                            <p>Count: {count}</p>
                        </div>
                    }
                    <ul>
                        {listItems.map((item) => {
                            return (
                                <div key={item.id}>
                                    <button onClick={findProfileHandler} data-id={item.id} >
                                        {item.value}
                                    </button>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            }
        </div >
    );
};

export default FetchAPI;
