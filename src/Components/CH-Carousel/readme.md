# Carousel

This component was built to fulfill the requirements of [[CFE-274]](https://codehouse.atlassian.net/browse/CFE-274).

## Behaviour
By default, the Carousel will not loop through the Slides, once the user has reached the last Slide, it will not go further - this
can be toggled by using the `loop={true}` prop.

By default, the Carousel is will not animate the moving of each Slide (which turns out better for screen readers), but can be toggled
with the `animated={true}` prop.

## Note
The first Slide is visible by default.

---

`<Carousel>` represents a `<section>` element, wrapping all other elements.

`<CarouselControl>` represents a `<button>` element, for the purpose of moving slides left and right.

`<CarouselViewport>` represents a `<div>` element, wrapping the slides.

`<CarouselSlide>` represents a `<div>` element, solely wrapping the image, but can hold any number of elements.

`<CarouselPagination>` represents a `<div>` element, holding buttons for each slide to be focused to.

## Props

### `<Carousel>`

`id`: string (**required**) - a unique identifier used for accessibility.

`ariaLabel`: string (**required**) - adds a `aria-label` attribute to the `<div>`.

`className`: string (*optional*) - the class given to the `<div>`.

`loop`: boolean (*optional*) - allows the Slides to slide past the end and return to the beginning and vice versa.

`animated`: boolean (*optional*) - allows the slides to be animated by `transform`.

### `<CarouselControl>`

`direction`: string (*optional*) - `"left"` or `"right"`, moves slides on button press.

`className`: string (*optional*) - the class given to the `<button>`.

### `<CarouselViewport>`

`className`: string (*optional*) - the class given to the `<div>`.

### `<CarouselSlide>`

`className`: string (*optional*) - the class given to the `<div>`.

## Markup
```
<Carousel id={uuid} ariaLabel="Description of images inside" loop={true} animated={true}>
    <CarouselControl direction="left">Previous</CarouselControl>
    <CarouselControl direction="right">Next</CarouselControl>
    <CarouselViewport>
        <CarouselSlide>
            <img src="/1.jpeg" alt="Alternative text 1"/>
        </CarouselSlide>
        <CarouselSlide>
            <img src="/2.jpeg" alt="Alternative text 2"/>
        </CarouselSlide>
        <CarouselSlide>
            <img src="/3.jpeg" alt="Alternative text 3"/>
        </CarouselSlide>
    </CarouselViewport>
    <CarouselPagination/>
</Carousel>
```
