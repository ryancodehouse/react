import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./carousel.module.css";
import { slides } from "./carouselData";

function AnimatedCarousel() {
    const [index, SetIndex] = useState(0);
    const [direction, SetDirection] = useState(null);
    const directionLeft = "left";
    const directionRight = "right";

    const clickHandler = (event) => {

        if (event.target.dataset.id === directionLeft) {
            SetIndex(index - 1);
            SetDirection(directionLeft);
        }

        if (event.target.dataset.id === directionRight) {
            SetIndex(index + 1);
            SetDirection(directionRight);
        }
    };

    const fetchSlide = (event) => {
        SetIndex(Number(event.target.dataset.id));
    }

    useEffect(() => {
        if (index > slides.length - 1) {
            SetIndex(0);
        }
        else if (index < 0) {
            SetIndex(slides.length - 1);
        }
    }, [index]);

    return (
        <div>
            <div className={styles.carousel} aria-live="polite" aria-roledescription="carousel" aria-label="carousel" key={slides.id}>
                <nav className={styles.nav} aria-label="carousel">
                    <button aria-label="previous slide" className={styles.leftArrow} data-id={directionLeft} onClick={clickHandler} />
                    <button aria-label="next slide" className={styles.rightArrow} data-id={directionRight} onClick={clickHandler} />
                </nav>
                {slides.map((image, i) => {
                    return (
                        <div className={i === index ? styles.imageItem : styles.hidden} key={i}>
                            <img className={styles.image} id={direction === directionRight ? styles.right : styles.left} src={image.img} alt={image.alt} />
                            <Link to="/" className={styles.description}>{image.subtitle}</Link>
                        </div>
                    );
                })}
            </div>
            <div className={styles.pagination}>
                {slides.map((slide, i) => {
                    return (
                        <button className={i === index ? styles.selectedCircle : styles.paginationCircle} data-id={i} onClick={fetchSlide} aria-label={slide.alt} key={i} />
                    );
                })}
            </div>
            {/* This is here to show how the tabbing behaves after the component  */}
            <Link to="/">Link Example</Link>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    );
}

export default AnimatedCarousel;
