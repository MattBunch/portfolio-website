# Matt Bunch Portfolio Website

My personal portfolio website built to display portfolio items (such as Digital Rain Animation and Sorting Visualizer), education, work experience and contact information.

![Screenshot 1](https://i.ibb.co/dD9RpLB/Screenshot1.png?raw=true "Screenshot1")

![Screenshot 2](https://i.ibb.co/zH9gn95/Screenshot2.png?raw=true "Screenshot2")

![Screenshot 3](https://i.ibb.co/yPbGy8y/Screenshot3.png?raw=true "Screenshot3")

![Screenshot 4](https://i.ibb.co/s3rh8Fk/Screenshot4.png.png?raw=true "Screenshot4")

Thanks for Bootstrap for the free theme.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Website is designed to be modular and easily expandable for adding future portfolio items, experience and contact links.

Optional components such as Services and Teams can be added to the page by uncommenting them in `app.js`.

## Test cases

Tested on:

- School laptop
- Android A15

### Current live page:

https://portfolio-website-01-300900.web.app/

### Current github page:

https://github.com/MattBunch/portfolio-website

## Tech stack used:

- React
- Node
- HTML
- CSS
- Bootstrap
- Firebase

## Software used:

- Visual Studio Code
- ScreenToGif to capture gif images

## Devlog:

### 20/11/2020

Beginning of the program. Took the core Bootstrap template and added it to my project, then made Portfolio component based on the bootstrap code. Afterwards, I made each individual element a component similar to the Portfolio component. This makes it easy to drop each individual component in and out of the website by just commenting and uncommenting out the components inside of `App.js`.

Added my own custom photos.

Changed the primary coloring of the website from yellow to green in the `bootstrap.min.css` file.

### 21/11/2020

Each component made easily extendable, similar to the Portfolio component. Following components editted:

- Navbar: each section needs its own tab and link in the navbar
- About: each "About" node needs to be its own module

Need to find some way of getting the About tab to have pitures inside of them.

### 30/11/2020

- Portfolio images replaced with gifs.
- Timeline image added.

### 7/12/2020

- Gif files compressed to be below 3mb. Can be further compressed if needed.
- Contact page split into further components to remove form and make way for Github and Linkedin images.
- Github and LinkedIn icons added to Footer. Considering removing contact page.
- Footer made modular to support any number of icons.
- Added my name to header text.

### 6/01/2021

- Website hosted through Firebase at https://portfolio-website-01-300900.web.app & https://portfolio-website-01-300900.firebaseapp.com/
- Need to register a domain name like https://mattbunch.nz for my website in the future so I can put the link on my CV for applications.

### 7/01/2021

- Images added to README file.
- Need to configure Cloud Functions to scale for normal traffic to limit the number of concurrent instances. Further configurations are needed for the final deployment for the public website.
- Consider having database/SQL functionality where the `portfolioLinks`, `aboutLinks` etc. are called from the database to be rendered on the page. Would be a good example of my useage at mySQL database skills, and would be even simpler to update without having to hardcode the Strings in the `App.js` file.

### 4/04/2021

- Compartmentalized the data that was formerly sitting inside of App.js into seperate js files inside of data folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
