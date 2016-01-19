   
# FCC API Timestamp Microservice
------------------------------

This node.js app was written as part of [this](http://www.freecodecamp.com/challenges/timestamp-microservice) Freecodecamp API challenge. A live version of the app is [here](https://shaykyasin-fcc-timestamp.herokuapp.com/).

The contracts of the app are as follows:
> User stories:
> * I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
> * If it does, it returns both the Unix timestamp and the natural language form of that date.
> * If it does not contain a date or Unix timestamp, it returns null for those properties.

#### Usage
```

https://shaykyasin-fcc-timestamp.herokuapp.com/January%2019,%202016

https://shaykyasin-fcc-timestamp.herokuapp.com/1453218679

```
#### Response
```

{"unix":1453218679,"natural":"January 19, 2016"}

```
Released under the MIT License

Copyright (c) 2015 Shayk Yasin