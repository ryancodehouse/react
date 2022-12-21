import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './carousel.module.css';
import { images } from './carouselData';

function StaticCarousel() {

    //TODO
    // ACCESSIBILITY
    // ADD TRANSITION ANIMATION - CSS

    const [index, SetIndex] = useState(0);

    const ClickHandler = (event) => {

        if (event.target.dataset.id === "left") {
            SetIndex(index - 1);
        }

        if (event.target.dataset.id === "right") {
            SetIndex(index + 1);
        }
    };

    // Index looping effect
    useEffect(() => {
        if (index > images.length - 1) {
            SetIndex(0);
        }
        if (index < 0) {
            SetIndex(images.length - 1);
        }
    }, [index]);

    return (
        <div className={styles.carousel} aria-live="polite" aria-roledescription="carousel" aria-label='carousel'>
            <p>Created with hidden attribute</p>
            {images.map((image, i) => {
                return (
                    //image data 
                    <img className={styles.image} src={image.img} alt={image.alt} hidden={i !== index} key={i} />
                );
            })}
            <nav className={styles.nav} aria-label='carousel'>
                <button className={styles.button} data-id={"left"} onClick={ClickHandler}>Previous Slide</button>
                <Link to="/" className={styles.link}>
                    <p>Home</p>
                </Link>
                <button className={styles.button} data-id={"right"} onClick={ClickHandler}>Next Slide</button>
            </nav>
        </div>
    );
}

export default StaticCarousel;
