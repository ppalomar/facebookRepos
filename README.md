This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), and in there we used `Redux`, `Redux-Saga`, `React-Router`, `Material-UI`, `Axios`, `Reselect`, `Enzyme`, `Jest`, `Cypress` and `History`.

Install dependecies:

`yarn install` or `npm install`

Start application:

`yarn start` or `npm start`

Unit tests are made only in the `RepoList` and `RepoRow` components. There we are covering presentational layer using `Enzyme` and `Jest` snapshots. Also we are covering `action creators` and the `reducer` in the file `module.test.js`, to execute them run:

`yarn test` or `npm run test`

Run e2e tests, (Only tested the transition between main page and detail page):

`yarn e2e` or `npm run e2e`

Then when `Cypress` console is opened, click in `app.spec.js` inside e2e folder to run the App e2e tests.

Screenshots:

Main List view:
![Main List](/screeshots/listView.png?raw=true "Main List")

Repo Detail view:
![Repo Detail](/screeshots/detailView.png?raw=true "Repo Detail")