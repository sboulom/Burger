    DROP DATABASE IF EXISTS burger_db;

    CREATE DATABASE burger_db;

    USE burger_db;

    CREATE TABLE burger
    (
        id INTEGER NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR(30) NOT NULL,
        devoured BOOLEAN,
        PRIMARY KEY (id)

    );