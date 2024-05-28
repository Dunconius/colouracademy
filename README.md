# ColourAcademy - CSS Variable Generator Website

## Routes

- "/" : homepage
    - CSS generator availalb e here
- "/generator" - CSS generator page
    - CSS generator available here
- "/generator/saved" - view list of saved themes
    - reads localstorage

## Contexts

- Base Colour
    - hex colour of the new theme
- Current CSS theme
    - one theme list
    - local storage
- List of CSS themes
    - array of theme list
    - localstorage

<!-- - Localstorage manager for list of CSS themes
    - array of theme lists
- Localstorage manager for current CSS theme
    - One theme list
- List of CSS themes
    - array of theme lists
- Current CSS theme
    - one theme list -->

## Data

### Colour Object

```js
{
    hex: "#000000",
    strength: 100,
}
```

### Theme List

```js
{
    name: "violet eggplant",
    colours: [
        Colour Objects go here
    ]
}
```
