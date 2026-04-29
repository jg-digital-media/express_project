# Express Project - Daily Quote App

Last Update `29/04/2026 - 16:27`

+ This is a daily quote app built with `Express.js` and `Node.js`.  Ir requires both to be installed on your local machine.  Use `npm install` in your CLI/Terminal to install the dependencies.

## Content Menu

 [Todos](#todos) | [Entry Point](#entry-point) | [Notes](#notes) | [Links](#links) | [Project](#project) | [Log](#log)

### Todos

#### Tasks `10` Completed `2` 

##### Front End

+ `TODO: COMPLETED: 27-04-2026` Plan UI by a wireframe
+ `TODO: COMPLETED: 29-04-2026` Build static HTML fles
  + `TODO: ` Add copy for about app page `/about.php`
  + `TODO: ` Add reload button to restore the current daily Quote.
  
+ `TODO: ` Get and display current date dynamically with PHP
+ `TODO: ` Create a new local Node.js environment

##### Express.js

+ `TODO: ` Install Express
+ `TODO: ` Create a local server on port 3000  - http://localhost:3000
+ `TODO: ` Test a route with app.get
+ `TODO: ` Test planned application routes
+ Get a random quote on the home root `/`

[Back to top](#content-menu)
### Entry Point
+ app.js - entry point

[Back to top](#content-menu)

### Notes
[Back to Top](#)

+ `Overview`

  + This application is a simple Daily Quote Application created in `Express.js`. It calculates a number based on today’s date (essentially how many days have passed since a fixed point in time), then uses that number to consistently pick the same quote for that specific day; displaying this quote on the homepage.

  + We then have a button that will select a random quote and replace the "daily" quote until the page is reloaded.  The "Browse" page will display a list of all the quotes as retrieved dynamically from the JSON file.
+ `Code`

. . . 

+ `Prompts`

```text

    Implement a Daily quote that will appear and change every 24 hours

    The "New Quote" button on the same page should replace this quote with a random new quote, and author on each new button click.

    The data for the daily and ramdom quote is found in quote_list_one.json 

```

```text
    in browse.php replace the current content with some of the data from quote_list_one.json.   

    Display as many .quote---list--item elements as needed.  But for now keep all links as pointing to quote.php.  We're simulating an interaction at this point, not completing it. 

```


#### Installing Express


+ Ensure you have Node.js installed

+ Navigate to your project root directory

+ `npm init`

+ `npm install express`


....

[Back to top](#content-menu)

### Links

[Back to top](#content-menu)

### Project

Express Project Setup - to appear here

+ [URL](#https://projects.jonniegrieve.co.uk/express_project)
+ [Repository](#https://github.com/jg-digital-media/express_project)

### Log

#### `v2`

+ Stylesheet Update
+ Build includes JavaScript to handle quote requests, random quote generation and daily quote display

#### `v1`

+ Initial build

[Back to top](#content-menu)