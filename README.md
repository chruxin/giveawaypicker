# Giveaway-Picker ![travis-ci](https://travis-ci.org/42mandychen/giveawaypicker.svg?branch=master)
Randomly pick users for giveaways on Instagram and Facebook.

***The project is currently in progress.***

## React

I use [create-react-app](https://github.com/facebookincubator/create-react-app) that easily set up the whole project as a `React` app.

## Bootstrap 4

Set up [Reactstrap](http://reactstrap.github.io/) to use [bootstrap 4](https://v4-alpha.getbootstrap.com/) components in as React components.

To add `Reactstrap` and update dependencies properly, I ran:

```shell
$ yarn add bootstrap@4.0.0-alpha.6
$ yarn add react-addons-transition-group react-addons-css-transition-group
$ yarn add reactstrap
```

Then followed the instructions by adding

```javascript
import 'bootstrap/dist/css/bootstrap.css';
```

in [`src/index.js`](./src/index.js), and any component (button as an example) that you would like to use with

```javascript
import { Button } from 'reactstrap';
```

in [`src/App.js`](./src/App.js).

## Routing System

The routing system is done by using [react-router](https://reacttraining.com/react-router/). The routes are specified in [`src/App.js`](./src/App.js).

## Authentication

The [Instagram API](https://www.instagram.com/developer/authentication/) uses [OAuth 2.0 protocol](http://tools.ietf.org/html/draft-ietf-oauth-v2-12).

As GitHub only hosts static websites, this projects uses client-side/implicit authentication with the help of react-router for redirecting. 

The access token is persistent by using [localStorage](https://www.w3schools.com/html/html5_webstorage.asp).

## Travis

[Travis CI](https://travis-ci.org/) for build status. More tests to come.