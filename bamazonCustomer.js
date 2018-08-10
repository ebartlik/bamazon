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
        //   connection.end();
        });
    }
        function initialize() {
            inquirer.prompt({
                type: 'rawlist',
                name: 'product_id',
                message: 'Which product ID would you like to purchase?',
                choices: 
                ['1', 
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                ]
              })
              
              .then(function(answer) {
                switch (answer.product_id) {
                case '1':
                  idOne();
                  break;

                case '2':
                idTwo();
                break;

                case '3':
                idThree();
                break;

                case '4':
                idFour();
                break;

                case '5':
                idFive();
                break;

                case '6':
                idSix();
                break;

                case '7':
                idSeven();
                break;

                case '8':
                idEight();
                break;

                case '9':
                idNine();
                break;

                case '10':
                idTen();
                break;
              
                }

            });
        
        }

        function idOne() {
            inquirer
              .prompt([

              {
                name: "stock_quantity",
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
            // console.log(answer.id);
            connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
                if (err) {
                    console.log(err);
                    return;
                }
                for (var i = 0; i<res.length; i++){

                console.log(res);
                console.log(
                    "Product Name: " +
                      res[i].product_name + "" +
                      "Left in stock: "+
                      res[i].stock_quantity

                      //get response for product name and quantity left
                
                    );
                    if(res[i].stock_quantity < answer.stock_quantity){
                       console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                         }     //           }
                 
                
                        }      
            // initialize();
            });
        });
        
        
    

    
    }

    function idTwo() {
        inquirer
          .prompt([

          {
            name: "stock_quantity",
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
        // console.log(answer.id);
        connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
            if (err) {
                console.log(err);
                return;
            }
            for (var i = 0; i<res.length; i++){

            console.log(res);
            console.log(
                "Product Name: " +
                  res[i].product_name + "" +
                  "Left in stock: "+
                  res[i].stock_quantity

                  //get response for product name and quantity left
            
                );
                if(res[i].stock_quantity < answer.stock_quantity){
                   console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                     }     //           }
             
            
                    }      
        // initialize();
        });
    });
    
    



}

function idThree() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idFour() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idFive() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idSix() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idSeven() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idEight() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idNine() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}

function idTen() {
    inquirer
      .prompt([

      {
        name: "stock_quantity",
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
    // console.log(answer.id);
    connection.query("SELECT * FROM products WHERE ?", { product_id: answer.product_id }, function(err, res) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i<res.length; i++){

        console.log(res);
        console.log(
            "Product Name: " +
              res[i].product_name + "" +
              "Left in stock: "+
              res[i].stock_quantity

              //get response for product name and quantity left
        
            );
            if(res[i].stock_quantity < answer.stock_quantity){
               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
                 }     //           }
         
        
                }      
    // initialize();
    });
});





}



      // initialize();

   
//     // var query = "SELECT product_name, stock_quantity FROM products WHERE ?";
        //     connection.query("SELECT stock_quantity FROM products WHERE product_name = Fire Stick"), function(err, res) {
        //     // connection.query(query, { id: answer.id }, function(err, res) {
        //         // for (var i = 0; i < res.length; i++) {
        //             console.log( " Quantity Left: " + stock_quantity);
        //          // }

        //           if(stock_quantity < answer.quantity){
        //               console.log("We only have" + res[i].stock_quantity + " left, please select a different quantity");
        //           }
                
                //    initialize();
            //}
             // });
           // }
        
                
            
        
          
          
          
    

     
    


        