DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(

	product_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
	-- price DECIMAL(3,2) NOT NULL,
    price INT (10) NOT NULL,
    stock_quantity INT(10) NOT NULL,
	PRIMARY KEY(product_id)
);

INSERT into products(product_name, department_name, price, stock_quantity) 
VALUES ("Fire Stick", "Electronics", 39.99, 300 ),
("Leather Chair", "Furniture", 59.99, 20 ), ("Hand Bag", "Acessories", 49.99, 300 ),
("Amazon Alexa", "Electronics", 69.99, 300 ), ("Desk", "Furniture", 79.99, 30 ),
("Silverware Set", "Silverware", 29.99, 300 ), ("Watch", "Acessories", 99.99, 100 ), 
("Basketball", "Sports", 39.99, 300 ), ("Yankees Hat", "Clothing", 49.99, 50 ),
("Amazon Fire TV", "Electronics", 299.99, 40);

SELECT * FROM products;