# Name-Into-Color

[![Code Climate](https://codeclimate.com/github/nirmalathapa/Name-Into-Color/badges/gpa.svg)](https://codeclimate.com/github/nirmalathapa/Name-Into-Color)
[![Build Status](https://travis-ci.org/nirmalathapa/Name-Into-Color.svg?branch=master)](https://travis-ci.org/nirmalathapa/Name-Into-Color)

A simple react-sinatra app which converts any string(name) to the corresponding color. You can checkout the app online in https://name-into-color.herokuapp.com/
The idea inspired(stolen) from [Numberphile Illegal Numbers Video](https://youtu.be/wo19Y4tw0l8)

![Screenshot](/screenshot.png?raw=true "Screenshot")

# Dev Setup

Make sure you have `bundler` and `yarn` and `foreman` installed

```
gem install bundler
gem install foreman
npm install -g yarn or brew install yarn
```

1. Install gems for sinatra

```
bundle install
```


2. Install react dependancies

```
yarn install
```

3. Start app

```
foreman start -f Procfile.dev
```
