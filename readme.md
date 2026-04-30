# Express Project - Daily Quote App

Last Update `30/04/2026 - 11:24`

+ This is a daily quote app built with `Express.js` and `Node.js`. It requires both to be installed on your local machine. Use `npm install` in your CLI/Terminal to install the dependencies.

## Content Menu

[Todos](#todos) | [Entry Point](#entry-point) | [Notes](#notes) | [Links](#links) | [Project](#project) | [Log](#log)

### Todos

#### Tasks `13` Completed `9` 

##### Front End
[Back to top](#content-menu)

+ `TODO: COMPLETED: 27-04-2026` Plan UI by a wireframe
+ `TODO: COMPLETED: 29-04-2026` Build static HTML fles
  + `TODO: ` Add copy for about app page `/about.php`
  + `TODO: ` Add reload button to restore the current daily Quote.
  
+ `TODO: ` Get and display current date dynamically with PHP
+ `TODO: ` Create a new local Node.js environment

##### Express.js

+ `TODO: COMPLETED: 29-04-2026` Install Express
+ `TODO: COMPLETED: 29-04-2026` Create a local server on port 3000  - http://localhost:3000
+ `TODO: COMPLETED: 29-04-2026` Test a route with app.get
+ `TODO: COMPLETED: 29-04-2026` Test planned application routes
+ `TODO: COMPLETED: 30-04-2026` Get a random quote on the home root `/`
+ `TODO: COMPLETED: 30-04-2026` Show all quotes on browse route `/browse`
+ `TODO: COMPLETED: 30-04-2026` Dynamic route for individual quote pages `/browse/:id`
+ Introduce View Templates for all routes

[Back to top](#content-menu)

### Entry Point
[Back to top](#content-menu)

+ app.js - entry point


### Notes
[Back to Top](#)

+ `Overview`

  + This application is a simple Daily Quote Application created in `Express.js`. It calculates a number based on today’s date (essentially how many days have passed since a fixed point in time), then uses that number to consistently pick the same quote for that specific day; displaying this quote on the homepage.

  + We then have a button that will select a random quote and replace the "daily" quote until the page is reloaded.  The "Browse" page will display a list of all the quotes as retrieved dynamically from the JSON file.

+ `Code`

#### Use of multiple routes on `app.js`

```javascript

    // Test a route with app.get
    app.get("/", (req, res) => {  
    
        res.send("Quotes homepage");
    });

    app.get("/browse", (req, res) => {
    
        res.send("Quotes list page");
    });

    app.get("/browse/1", (req, res) => {
    
        res.send("Single quote page");
    });

```

#### Get a random quote on the home root `/`

```javascript

    const quotes = require("./data/quotes.json");

    // Get random quoute on the home route
    app.get("/", (req, res) => {
    
        const random = quotes[Math.floor(Math.random() * quotes.length)];

        res.send(`
            <h1>Daily Quote</h1>
            <blockquote>${random.quote}</blockquote>
            <p>- ${random.author}</p>
            <a href="/quotes">Browse Quotes</a>
        `);
    
        //res.send("Hello from your Quote App!");
    });

```

#### Show all quotes on browse route `/browse`

```javascript
    app.get("/browse", (req, res) => {

        let html = "<h1>All Quotes</h1>";

        quotes.forEach(q => {
            html += `<p><a href="/browse/${q.id}">${q.quote}</a></p>`;
        });

        html += `<a href="/">Back</a>`;

        res.send(html);

    });
```

#### Dynamic route for individual quote pages `/browse/1`

```javascript
    app.get("/browse/:id", (req, res) => {
        const quote = quotes.find(q => q.id == req.params.id);

        if (!quote) {
            return res.send("Quote not found");
        }

        res.send(`
            <h1>Quote</h1>
            <blockquote>${quote.quote}</blockquote>
            <p>- ${quote.author}</p>
            <a href="/browse">Back</a>
        `);

    });
```

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

+ Links will appear here


### Project
[Back to top](#content-menu)

Express Project Setup - to appear here

+ [URL](#https://projects.jonniegrieve.co.uk/express_project)
+ [Repository](#https://github.com/jg-digital-media/express_project)

### Log
[Back to top](#content-menu)

#### `v2`

+ Stylesheet Update
+ Build includes JavaScript to handle quote requests, random quote generation and daily quote display

#### `v1`

+ Initial build

[Back to top](#content-menu)