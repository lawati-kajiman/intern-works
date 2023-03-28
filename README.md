# Getting Started with my **Demo-App**

This project is made for practice purpose and is used for practice purpose only.

## initializing **Demo-App**
```
git clone https://github.com/lawati-kajiman/intern-works.git 
```
- After clone you can do your stuff or can practice here. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# projects that are done

### login-page
This project includes a log-in  page and consist of clear and submit button which works as clearing input field and showing the value on-click respectively.

This projects is mainly done focusing on `useState`.
[click me](https://legacy.reactjs.org/docs/hooks-state.html) to know more about `useState`.

`navigation` to home page is also added while clicking the submit button.

### Home-page
This project include user profile with their **name** and **adress**.

Data of user are stored in json file called **userdata.json** inside **data** folder.

Data that are called using `required` is mapped in a `div` with the help of `map`.
[click here ](https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react) to know more about `map`.

`navigation` to movie page is also added while clicking the movie button.

### Movies-page
This project is based on imdb rating for movies .
`axios` is used to get the data from api and are being showed in a `div`. 

### Games-page
This is a React component that fetches data from an API and displays it in a table using the `@mui/x-data-grid` component. Here's a breakdown of the code:

- Import `React`, `useState`, `useEffect`, `axios`, and the `DataGrid` component from `@mui/x-data-grid`.
- Define the Games component using an arrow function.
- Declare a state variable called `onlinegames` using the `useState` hook. The initial value of this state variable is an empty array.
- Define the `columns` array that defines the columns of the data grid. Each column has a `field` property that corresponds to a property in the data, a `headerName` property that is the header of the column, and a width property that is the `width` of the column.
- Define the `rows` variable as the `onlinegames` state variable. This variable will be used as the rows of the data grid.
- Define a `useEffect` hook that fetches data from the API when the component mounts. The `axios` library is used to make the API call, and the API key and host are included in the request headers. The `params` object includes the filters for the API call. When the API response is received, the data is parsed and set as the `onlinegames` state variable using the `setonlinegames` function.
- Render the `DataGrid` component with the `rows`, `columns`, `pageSize`, `rowsPerPageOptions`, `checkboxSelection`, and `disableSelectionOnClick` props.
Overall, this component fetches data from an API and displays it in a table using the `@mui/x-data-grid` component.

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
