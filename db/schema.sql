DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);