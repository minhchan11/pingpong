# Ping Pong Generator

#### The generator will convert numerical entries to a series with "ping", "pong" and "ping-pong" inserted

#### By Minh Phuong

## Description

A simple HTML page called Ping Pong Generator. Ping Pong Generator will take a number submitted by the user and return a range of numbers from 1 to the chosen number with the following exceptions:
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"

## Setup/Installation Requirements

* Clone From GitHub
* Open index.html from desired browser

## Specification
* The program will determine that only number input is accepted and not text
⋅⋅* Input Example: text
⋅⋅* Output Example:

* The program will determine that only number input is accepted and not special characters
⋅⋅* Input Example: #@@
⋅⋅* Output Example:

* The program will only accept integers and alert the user when the number is not.
⋅⋅* Input Example: 3.5
⋅⋅* Output Example: "Please enter a valid value. The nearest valid values are 3 and 4"

* The program will only accept positive integers and alert the user when the number is not.
⋅⋅* Input Example: -3
⋅⋅* Output Example: "Please put in positive integers"

* The program will only accept one number.
⋅⋅* Input Example: 23 24
⋅⋅* Output Example: 2324

* The program will count up to the provided number.
⋅⋅* Input Example: 2
⋅⋅* Output Example: [1,2]

* The program will count up to the provided number and replace it if it with "ping" is divisible by 3.
⋅⋅* Input Example: 3
⋅⋅* Output Example: [1,2,"ping"]

* The program will count up to the provided number and replace it if it with "ping" is divisible by 3, and replace it if it with "pong" is divisible by 5.
⋅⋅* Input Example: 5
⋅⋅* Output Example: [1,2,"ping",4,"pong"]

* The program will count up to the provided number and replace it if it with "ping" is divisible by 3, and replace it if it with "pong" is divisible by 5, and replace it if it with "ping-pong" is divisible by 15.
⋅⋅* Input Example: 16
⋅⋅* Output Example: ["1", "2", "ping", "4", "pong", "ping", "7", "8", "ping", "pong", "11", "ping", "13", "14", "ping-pong", "16"]

* The program will clear the previous result, count up to the provided number and replace it if it with "ping" is divisible by 3, and replace it if it with "pong" is divisible by 5, and replace it if it with "ping-pong" is divisible by 15.
⋅⋅* Input Example: 8
⋅⋅* Output Example: ["1", "2", "ping", "4", "pong", "ping", "7", "8"]


## Known Bugs

No known bugs

## Support and contact details

Contact me at mphuong@kent.edu.

## Technologies Used

HTML, CSS, Bootstrap, Javascript, jQuery

### License

Copyright (c) 2017 *Minh Phuong*
