# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Desktop Preview of the Project](./design/desktop-preview.jpg)


### Links

- Live Site URL: [Live Site](https://kensocialdb.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS 
- Javascript
- Mobile-first workflow



### What I learned
In this project, I learnt about the dark mode feature that Tailwind CSS has and how to implement it. I learnt about how to toggle it manually and how it can be 
used to conform to your systems preference. I also learnt how to make toggle buttons.


To see how you can add code snippets, see below:

```html
<html class="dark">
<body>
  <!-- Will be black -->
  <div class="bg-white dark:bg-black">
    <!-- ... -->
  </div>
</body>
</html>
```

```js
const darkModeFeature = () => {
   localStorage.theme = 'light'

 if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
}
```


### Continued development

I intend learning more about toggling multiple theme modes, applying more transitions and animations to my sites I build.



### Useful resources

- [Tailwind Dark Mode Use](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually) - This helped me with implementing the dark  mode feature.
- Frontend Mentor


## Author

- Twitter - [@KennedyOhia](https://www.twitter.com/KennedyOhia)
- LinkedIn - [Chimdinma Ohia](https://www.linkedin.com/ChimdinmaOhia)


## Acknowledgments

Many Thanks to Walure Capital. UI was gotten from Frontend Mentor
