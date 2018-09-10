var mysql = require('mysql');
var inquirer = require('inquirer')
var connection = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  database:"bamazon",
  password: "root"
});

var command = process.argv[2];

var inventoryObj = { 
    product_name: process.argv[3],
    department_name: process.argv[4],
    price: parseFloat(process.argv[5]),
    stock_quantity: parseFloat(process.argv[6])
};

connection.connect(function(err) {
    if (err) throw err
    executeCommand(command, inventoryObj ,function(){
        console.log("Connected!")    
    });
   
});   
   
 
  

  function executeCommand(command,inventoryObj,callback)
  {
  switch(command)
   {
      case "view_Product_for_sale":
      connection.query("select * from products", function(err, res){
          if(err)
          throw err;
        for(let i= 0; i<res.length; i++){
            console.log(" - - - - - - - - - - - - - - - ")
            console.log("Item Number: " + res[i].itemid)
            console.log("Product Name: " + res[i].product_name)
            console.log("Price: $" + res[i].price)
        }
    });
    break;

    case "View-Low-Inventory":
    // let number = 5;

    // let queryStr = "select * from products where ?"
    connection.query("select * from products where stock_quantity < 5" , function(err, res){
        if(err)
        throw(err);
        for(let i= 0; i<res.length; i++){
            console.log(" - - - - - - - - - - - - - - - ")
            console.log("Item Number: " + res[i].itemid)
            console.log("Product Name: " + res[i].product_name)
            console.log("Price: $" + res[i].price)
            console.log("Stock Quantity: $" + res[i].stock_quantity)
        }
      
    });
    break;

    case "Add-New-To-Inventory":

    connection.query(`insert into products (product_name,department_name, price, stock_quantity) values(?,?,?,?)`,
    [
        inventoryObj.product_name, 
        inventoryObj.department_name, 
        inventoryObj.price, 
        inventoryObj.stock_quantity
    ]);
     break;
}
callback();
}






  