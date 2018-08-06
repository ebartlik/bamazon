var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
     console.log("connected as id " + connection.threadId);
    //  connection.end();
    productList();
    initialize();
   });

   
    function productList() {
        connection.query("SELECT * FROM products", function(err, res) {
          if (err) throw err;
      
          // Log all results of the SELECT statement
          console.log(res);
          connection.end();
        });
    }
        function initialize() {
            inquirer.prompt({
                type: 'rawlist',
                name: 'action',
                message: 'Which product ID would you like to purchase?',
                choices: 
                ['ID:1', 
                'ID:2',
                'ID:3',
                'ID:4',
                'ID:5',
                'ID:6',
                'ID:7',
                'ID:8',
                'ID:9',
                'ID:10',
                ]
              })
              
              .then(function(answer) {
                switch (answer.action) {
                case 'ID:1':
                  idOne();
                  break;

                case 'ID:2':
                idTwo();
                break;
                
                case 'ID:2':
                idTwo();
                break;

                case 'ID:3':
                idThree();
                break;

                case 'ID:4':
                idFour();
                break;

                case 'ID:2':
                idTwo();
                break;

                case 'ID:2':
                idTwo();
                break;

                case 'ID:2':
                idTwo();
                break;

                case 'ID:2':
                idTwo();
                break;

                case 'ID:2':
                idTwo();
                break;
              
                }

            });
        
        } 

        function idOne() {
            inquirer
              .prompt([

              {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                }
            
            }
        ])
        .then(function(answer) {
            var query = "SELECT product_name, stock_quantity FROM products WHERE product_id = 1";
            connection.query(query, { quantity: answer.quantity }, function(err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Product: " + res[i].product_name + " || Quantity Left: " + res[i].stock_quantity);
                  }

                  if(res[i].stock_quantity > answer,quantity){
                      console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                  }
                   initialize();
                });
              });
          }
        
                
            
        
          
          
          
    
      
            