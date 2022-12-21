# Tabs

This component was built to fulfill the requirements of [[CFE-271]](https://codehouse.atlassian.net/browse/CFE-271).

## Behaviour
Using keyboard (Left Arrow, Right Arrow, Home and End) keys will focus a Tab - pressing Enter or Space will activate its corresponding TabPanel.

## Note
The first tab is active by default.

---

`<Tab>` represents a `<button>` element, which are grouped and wrapped inside a `<div>` for accessibility reasons.

`<TabPanel>` represents a `<div>` element.

## Props

### `<Tabs>`

`id`: string (**required**) - a unique identifier used for accessibility.

`ariaLabel`: string (**required**) - adds a `aria-label` attribute to the `<div>` surrounding the `<Tab>` components.

### `<Tab>`

`className`: string (*optional*) - the class given to the `<button>`.

`activeClassName`: string (*optional*) - the class given to the `<button>` in the active state.

### `<TabPanel>`

`className`: string (*optional*) - the class given to the `<div>`.

## Markup

```
<Tabs id={uuid} ariaLabel="miscellaneous">
    <Tab>Header 1</Tab>
    <Tab>Header 2</Tab>
    <TabPanel>
        <p>Content 1</p>
    </TabPanel>
    <TabPanel>
        <p>Content 2</p>
    </TabPanel>
</Tabs>
```
