# A new website for DDA?

#### Video Demo: https://www.youtube.com/watch?v=ZXXkk9zq1yw

#### Description: This is a proposed website I developed for the engineering consulting company I currently work at.

## About

My CS50 Final Project is a light-weight static website developed to showcase and promote an engineering consultanting firm. To allow deployment to GitHub Pages, this website does not have any backend features to render and display components. However, React.js was employed to allow for dynamic display of static content based on user interactivity.

In total, the website has 5 "pages". My intention with this Final Project is to utilize different Bootstrap components in each "page" of the website.

The website is primiarly coded in TypeScript. Below is a summary of the major technical component of the website.

## Index.html

The website starts at `index.html`, which is the source file for all GitHub Pages website. The implementation of `index.html` is simple. The file only contains the import of scripts and styles necessary for the website. In the case of my website, I imported the scripts and styles for Bootstrap v5.2 and some font styles from Google Fonts. In addition, `index.html` also called the React App, which is what ultimately handles the rendering of HTML elements on the browswer.

## App.tsx

`App.tsx` is the source component for my React App website. Since a GitHub repository only allows for the inclusion of one HTML page (i.e. `index.html`), routing between different HTML pages was not possible. Therefore, `App.tsx` was used to dynamically render a React component based on the website link. In essence, each "page" of the website is just a React component that is rendered when the user clicks on a link.

To handle conditional rendering of React components, HashRouter was used. HashRouter was used over BrowserRouter since BroswerRouter is not available when the website is deployed to GitHub Pages.

## Page Components

The website contains 5 "page" components. These are the main React components that calls the smaller page-specific components and returns the HTML code for each page of the website.

`Home.tsx` is the home page of the website. The home page contains a Bootstrap Gallery component that displays an image slideshow.

`Projects.tsx` showcases projects completed by the company. This page contains various custom components needed to display, search, and filter through project cards.

`About.tsx` provides basic information about the company. Only static text and images are rendered on this page.

`Team.tsx` displays a list of current employees at the company. A modified Bootstrap ScrollSpy component is used to allow for quick navigation to a specific employee. Clicking on the employee displays a Bootstrap Modal component with the employee's biography.

`Careers.tsx` shows a list of open positions. The open positions are displayed using Bootstrap Accordion component.

## Common Components

Common components utilized by each "page" of the website includes the website Banner (Navbar) and the Footer.

The Banner component contains the company logo and navigation links around the website. The banner has two different styles. The default style is used on the Home page and Careers page and has transparent backgrounds. The alternative Banner has a solid white background and is used in all other pages. Utilization of standard or alternative style is defined by passing a prop to the Banner component.

The CSS file for the Banner component contains various logics including animation of the logo and changing of the background colour based on the scroll position of the page. In addition, the CSS file also handles condensing the navigation buttons into a list when the window size is smaller than a certain width.

Similarly, the Footer component contains standard website footer information. The CSS styling of the footer sets the footer as the lowest `z-index` element. This achieves an effect of slowly revealing the footer when scrolling to the end of the page content.

## Database File

Components which renders a "list" of information (i.e. list of projects, list of employees, list of open positions) utilizes the .map method to loop through a list of information that needs to be displayed on the website.

Since GitHub Pages is a static webpage hosting service and has no backend support, a formal database was not used for this project. Instead, lists data are stored in `.ts` files with data formatted in a csv-type format. These csv-type format are easily readable and accessible by non-technical administrative staff and allows for the easy update of projects, employees, and open position information in the future.

## Device Compatibility

During development, a considerable amount of time was spent to make the website usable on different screen height and width. In general, adjustment of content display is handled by using the `@media` rule in CSS. The website was tested on desktop and mobile and appears to function correctly on both platforms.

## Deployment

The website is deployed to GitHub Pages at the following link:
[kevinwenjili.github.io](https://kevinwenjili.github.io/dda-website/)

## Credits

CS50.ai and ChatGPT were used during the development of the website.

Project card filtering was based on the method employed this tutorial: [YouTube](https://www.youtube.com/watch?v=lfm_Hu0hEms)
