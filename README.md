# Example Micro Frontend

![Maintainer](https://img.shields.io/badge/maintainer-Alex_So-blue)

## Description

This repository contains the Example Micro Frontend. It serves as an overview of how to setup a MF with single SPA, Redux Toolkit and MSW.

## Requirements

- Node 18
- Yarn 1

## Libraries Used

- Single-SPA application
- Redux Toolkit, RTK Query (included within Redux Toolkit)
- Webpack, Babel, TypeScript, ESlint, Prettier, Jest (unit testing), MSW (API mocking)
- CircleCI

## Installation

```bash
$ yarn
```

### Configuration

There is nothing to be configured before you run the app.

## Usage

### Running the app

Run the App locally in standalone mode:

- `yarn start`

### Connect to the app

Run the App locally in standalone mode:

- Navigate to [http://localhost:3000/](http://localhost:3000)

### Test data seeding

If the app is running in standalone mode, the data shown on UI is mocked from `src/mocks/data.ts`. Those data will then be used in `src/mock/handlers.ts` for API mocking to retreive/patch data from the requests coming from UI.

### Testing

To run the unit tests:
`yarn test`

To run the coverage:
`yarn coverage`

## Learn more

- Single SPA: [https://single-spa.js.org/](https://single-spa.js.org/)
- Redux Toolkit: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- Mock Service Worker: [https://mswjs.io/](https://mswjs.io/)
