create table products(
    itemid int primary key AUTO_INCREMENT,
    product_name varchar (50),
    department_name varchar(50),
    price float(10),
    stock_quantity float(20)
);

insert into  products (Product_name,department_name,price,stock_quantity) values
("clamp","dept a","workbench clamp",12,5),
("screwdriver","dept b","flat head",3,10),
("tire bar","dept c","tool for changing tries", 15, 10),
("3mm bracket","dept d","Mechanic",67,4);