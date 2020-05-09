# DropStopShop

The One Page Shopping Application for mobile popup marketing and sales.

## Setup Development ENV
Create workspace area `mkdir` to create the directory. Then 'git clone https://github.com/tbenson89/dropStopShop.git'
<br /> 
Run `npm install` to install the node_modules

## Development server

Run `ng serve` or click the debugger if you are setup using angular CLI on IntelliJ/Webstorm. 
<br />
Navigate to `http://localhost:4200/`.

## Express / Mongo Server

cd `cd src` and run `node server.js` to start the mongo db

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## RESTful API
_Routes and Endpointes_

- Starter Route
    
    '/'

- Get All Items

    '/shop/items/allItems'

- Create New Item

    '/shop/items/item/:id'

## Schema and Models
* Inventory
    * Item
        * Title 
        * IMG SRC
        * Price
        * Description  
        * MainCat
        * SubCat

