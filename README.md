# yelpREST
An API built with Express, used to pull information from Yelp to be used in a web application.

The key token is provided, for now.

To create a server of your own, using your own access token, simply replace the token and run with commands:
1.) `npm install`

2.) `node server`

To use the API that has already been deployed on Heroku, make request with an interface using: 

  - https://ballotyelp.herokuapp.com
  
To make requests to the API inside of web application, make a GET request to the base URL

  - https://ballotyelp.herokuapp.com/yelpsearch/*TERM_PARAMETER_HERE*/*LOCATION_PARAM_HERE*
