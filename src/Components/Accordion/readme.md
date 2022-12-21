# Accordion

This component was built to fulfill the requirements of [[CFE-270]](https://codehouse.atlassian.net/browse/CFE-270).
As such, there are 2 different behaviours depending on the markup used.

## Behaviour 1
Using an `<AccordionGroup>`, the whole component can only have one expandable drawer open at a time - open one, and it closes all others.

## Behaviour 2
*Not* using an `<AccordionGroup>` will allow all drawers to be open - closing one *will not* close any others.

---

`<AccordionItemHeading>` represents a `<button>` element.

`<AccordionItemPanel>` represents a `<div>` element.

## Props

### `<AccordionItem>`
`id`: string (**required**) - a unique identifier used for accessibility.

`initalOpen`: boolean (*optional*) - determines if this item should start open.

### `<AccordionItemHeading>`
`className`: string (*optional*) - the class given to the `<button>`.

`openClassName`: string (*optional*) - the class given to the `<button>` in the open state.

### `<AccordionItemPanel>`
`className`: string (*optional*) - the class given to the `<div>`.

`openClassName`: string (*optional*) - the class given to the `<div>` in the open state.

## Controlling transition

By default, the `<AccordionItemPanel>` component has a `accordion__panel` class attached to it, which controls its height transition.
This is currently `transition: height .5s ease-out`. If you need any other kind of transition, you can override this by giving the `<AccordionItemPanel>`
a `className` prop which has a class to your desired transition.

## Markup (Behaviour 1)

```
<AccordionGroup>
    <AccordionItem id={uuid}>
        <AccordionItemHeading>
            <span>A heading</span>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>Some content</p>
            <p>Some more content</p>
        </AccordionItemPanel>
    </AccordionItem>
</AccordionGroup>
```

## Markup (Behaviour 2)

```
<AccordionItem id={uuid}>
    <AccordionItemHeading>
        <span>A heading</span>
    </AccordionItemHeading>
    <AccordionItemPanel>
        <p>Some content</p>
        <p>Some more content</p>
    </AccordionItemPanel>
</AccordionItem>
```
