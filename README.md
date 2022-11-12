# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

I just started learning ReactJS and i was itching to build something on my own. I first wanted to design it myself but i figured that would divert me from focusing solely on React. Then i found Frontend Mentor and their program provided the design i needed to build this small component

### The challenge

Users should be able to:

-   View the optimal layout depending on their device's screen size
-   See hover and focus states for interactive elements

### Screenshot

![screenshot.png](./screenshot.png)

### Links

-   Solution URL: [Github](https://github.com/Jeffreyon/product-preview-card-component)
-   Live Site URL: [Deployed with surge](https://product-card-react.surge.sh/)

## My process

I started off with a React app created using create-react-app, it gave me all the tooling I needed so i could focus on building the component.

Coding wise, i wanted to have the skeleton of my markup in place and the data that powered the preview, so i created a Product Card component that accepted a `product` object to render any kind of product data passed. Once i set that up i started styling

Styling it with custom css took the most part of my time, i found myself going through the CSS documentation on [DevDocs.io](https://devdocs.io) a lot but over time i fixed the styling quirks i had

Once i had the mobile view down, i started building the desktop view but the project had different images for each screen so i created 2 `<img />` elements and set up media queries so that only one image would show per breakpoint. I don't know if that's good performance-wise but i wanted to ship fast.

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

I got a full beginners overview to the ReactJS framework

### Continued development

I want to improve how i styled the component, maybe using sass or tailwind. The layout is good but it's still glued together with too much hard-coded css

Plus there are quirks with the build process. For some reason, the build does not reference static assets with the right url so i have to manually edit the output and serve with surge

## Author

-   Website - [Jeffrey Onuigbo](https://www.github.com/Jeffreyon)
-   Frontend Mentor - [@jeffreyon](https://www.frontendmentor.io/profile/Jeffreyon)
-   Twitter - [@jeffreyon\_](https://www.twitter.com/jeffreyon_)
