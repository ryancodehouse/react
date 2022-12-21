import React from 'react';
import styles from './navigation.module.css';
import Home from '../Screens/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from '../List/List'
import ModalPage from '../Modal/ModalPage';
import AccordionPage from '../Accordion/AccordionPage/AccordionPage'
import CarouselPage from '../CH-Carousel/CarouselPage';
import FetchAPI from '../Fetch/Fetch';
import TabsPage from '../Tabs/TabsPage';
import StaticCarousel from '../Static-Carousel';
import AnimatedCarousel from '../Animated-Carousel';
import ToolTipPage from '../Toolitip/toolTipPage';
import Login from '../../Foundation/Components/Login/Login';

function Navigation() {
    return (
        <Router>
            <nav className={styles.header}>
                <div className={styles.container}>
                    <Link to="/" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Home</p>
                    </Link>
                    <Link to="accordion" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Accordion</p>
                    </Link>
                    <Link to="list" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>List</p>
                    </Link>
                    <Link to="tabs" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Tabs</p>
                    </Link>
                    <Link to="list/tabs" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Nested Routes</p>
                    </Link>
                    <Link to="modal" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Modal</p>
                    </Link>
                    <Link to="carousel" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Ch-Gallery</p>
                    </Link>
                    <Link to="static-carousel" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Static Gallery</p>
                    </Link>
                    <Link to="animated-carousel" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Animated Gallery</p>
                    </Link>
                    <Link to="fetch" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Fetch API</p>
                    </Link>
                    <Link to="tooltip" className={styles.item}>
                        <img className={styles.logo} src="/images/logo192.png" alt="logo" />
                        <p className={styles.text}>Tooltip</p>
                    </Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="accordion" element={<AccordionPage />} />
                <Route path="list" element={<List />} >
                    <Route path="tabs" element={<TabsPage />} />
                </Route>
                <Route path="tabs" element={<TabsPage />} />
                <Route path="modal" element={<ModalPage />} />
                <Route path="carousel" element={<CarouselPage />} />
                <Route path="static-carousel" element={<StaticCarousel />} />
                <Route path="animated-carousel" element={<AnimatedCarousel />} />
                <Route path="fetch" element={<FetchAPI />} />
                <Route path="tooltip" element={<ToolTipPage />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
