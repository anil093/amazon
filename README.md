<h1>Bamazon </h1>
<ul>The goal was to create an Amazon-like store front using Node.js and MySQL.

Getting Started
Clone repo.
Run command in Terminal or Gitbash 'npm install'
Run 'ctrl + c' to exit each mode
What Each JavaScript Does
BamazonCustomer.js

Prints the products in the store.

Prompts customer which product they would like to purchase by ID number.

Asks for the quantity.

If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department table.
BamazonManager.js

<h3>Starts with a menu:</h3>

<li>View Products for Sale</li>
<li>View Low Inventory</li>
<li>Add to Inventory</li>
<li>Add New Product</li>
<li>Exit
<li>If the manager selects View Products for Sale, it lists all of the products in the store including all of their details.</li>

<li>If the manager selects View Low Inventory, it'll list all the products with less than five items in its StockQuantity column.</li>

<li>If the manager selects Add to Inventory, it allows the manager to select a product and add inventory.</li>

<li>If the manager selects Add New Product, it allows the manager to add a new product to the store.</li>

<li>If the manager selects Exit, it ends the session and doesn't go back to the menu.</li>

<li>BamazonSupervisor.js</li>

<li>Starts with a menu:</li>

<li>View Product Sales by Department</li>
<li>Create New Department</li>
<li>Exit</li>
<li>If the manager selects View Product Sales by Department, it lists the Department Sales and calculates the total sales from the overhead cost and product sales.

<li>If the manager selects Create New Department, it allows the manager to create a new department and input current overhead costs and product sales. If there are none, by default it will set at 0.</li>

I<li>f the manager selects Exit, it ends the session and doesn't go back to the menu.</ul>
![alt text](https://github.com/anil093/amazon/blob/master/images/customer1.png?raw=true "Logo Title Text 1")

![alt text](https://github.com/anil093/amazon/blob/master/images/customer1.png?raw=true "Logo Title Text 1")
![alt text](https://github.com/anil093/amazon/blob/master/images/customer2.png?raw=true "Logo Title Text 1")
![alt text](https://github.com/anil093/amazon/blob/master/images/customer3.png?raw=true "Logo Title Text 1")
![alt text](https://github.com/anil093/amazon/blob/master/images/manager1.png?raw=true "Logo Title Text 1")
![alt text](https://github.com/anil093/amazon/blob/master/images/manager2.png?raw=true "Logo Title Text 1")

<h1>Technologies used</h1>
<li>Node.js</li>
<li>Inquire NPM Package (https://www.npmjs.com/package/inquirer)</li>
<li>MYSQL NPM Package (https://www.npmjs.com/package/mysql)</li>
  <h3>Prerequisites</h3>
<li>- Node.js - Download the latest version of Node https://nodejs.org/en/</li>
<li>- Create a MYSQL database called 'Bamazon', reference schema.sql</li>
