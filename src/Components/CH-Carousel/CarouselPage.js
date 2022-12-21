import React from 'react';
import Carousel from '../CH-Carousel'
import CarouselControl from './CarouselControl';
import CarouselViewport from './CarouselViewport';
import CarouselSlide from './CarouselSlide';
import CarouselPagination from './CarouselPagination';

function CarouselPage() {
    return (
        <div>
            <p>This the carousel page.</p>
            <Carousel id={1} ariaLabel="Description of images inside" loop={true} animated={true}>
                <CarouselControl direction="left">Previous</CarouselControl>
                <CarouselControl direction="right">Next</CarouselControl>
                <CarouselViewport>
                    <CarouselSlide>
                        <img src="/images/logo192.png" alt="Alternative text 1" />
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src="/images/logo192.png" alt="Alternative text 2" />
                    </CarouselSlide>
                    <CarouselSlide>
                        <img src="/images/logo192.png" alt="Alternative text 3" />
                    </CarouselSlide>
                </CarouselViewport>
                <CarouselPagination />
            </Carousel>
        </div>
    );
}

export default CarouselPage;
