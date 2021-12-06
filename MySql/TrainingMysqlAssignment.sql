use training;
select * from product;
select * from customer;
select * from purchase;

create table Product ( ProductID int, ProductName varchar(30), Description varchar(100), cost int);
insert into product values (101,'Samsung-tv','Television',25000);
insert into product values (102,'Hp-laptop','Laptop',38000);
insert into product values (103,'Gucci-watch','Watch',27000);
insert into product values (104,'Iphone14','Smartphone',73000);
insert into product values (105,'Sony-camera','Camera',55000);
insert into product values (106,'mobile','Smartphone',22000);
select * from product;

create table Customer ( CustomerID int, CustomerName varchar(30), Address varchar(100), City varchar(20), PostalCode int, Country varchar(20));
insert into Customer values (201,'Keshav','Muktanand Nagar','Jaipur',302022,'India');
insert into Customer values (202,'Naman','Mannat colony','Alwar',302022,'India');
insert into Customer values (203,'Nishant','Givind Nagar','Jaipur',302022,'India');
insert into Customer values (204,'Melissa','Time Square','NewYork',003422,'USA');
insert into Customer values (205,'Neha','Jannat Nagar','Delhi',403322,'India');
select * from customer;

create table Purchase ( CustomerID int, ProductID int);
insert into Purchase values (201,101);
insert into Purchase values (201,103);
insert into Purchase values (202,102);
insert into Purchase values (203,104);
insert into Purchase values (204,105);
insert into Purchase values (204,102);
select * from purchase;

select distinct city from customer;
select distinct city, Count(city) as city_count from customer group by city;
select * from product where cost>=15000;
select CustomerID, CustomerName, City from customer where CustomerID in (select CustomerID from purchase);
select * from product where productid in (select productid from purchase);
select customername from customer order by customername;
select customername,country from customer order by customername,country desc;
insert into customer(CustomerID,CustomerName,Address, City, PostalCode, Country) values(206,'Shyam','Haldighati','Jaipur',302027,'India');
select * from customer where postalcode is null;
select * from customer where postalcode is not null;
update product set productname='Vivo-mobile' where productname='mobile';
update product set description='Latest Smartphones' where productid=106 and productname='Vivo-mobile';
delete from customer where customerid=205;
truncate table customer;
select productid, productname, cost from product where cost=(select max(cost) from product);
select productid, productname, cost from product order by cost desc limit 0,1;
select productid, productname from product order by cost limit 0,1;

-- to get total amount purchased by all customers
select sum((select cost from product p where p.productid=temp.productid)*temp.product_count) 
from (select productid,count(productid) as product_count from purchase group by productid) as temp;

alter table customer rename COLUMN postalcode to pincode ;
alter table customer add rating int  AFTER pincode ;
create table student (id int, name varchar(20), marks int);
insert into student values(1,'keshav',98);
insert into student values(2,'shyam',97);
truncate table student;
drop table student;
select * from customer;
set autocommit=0;
delete from customer where customerid=206;
rollback;
commit;
set autocommit=1;
select customerid, count(productid) as total_Purchase from purchase group by customerid;
select c.customerid,c.customername,p.productname,p.cost from customer c , product p, purchase pu where c.customerid=pu.customerid and p.productid=pu.productid order by c.customerid; 
create table employee (empid int , name varchar(20), address varchar(50), city varchar(20), state varchar(20), primary key(empid)); 
create table department (deptid int , name varchar(20), empid int, constraint empdept foreign key(deptid) references  employee(empid)); 
insert into employee values (1,'Keshav','muktanand nagar','jaipur','rajasthan');
insert into employee values (2,'Naman','Chandni chok','Delhi','Delhi');
insert into employee values (3,'Nishant','Mahaveer Nagar','jaipur','rajasthan');
insert into department values (11,'IT',1);
insert into department values (12,'EE',2);
insert into department values (13,'Finance',3);
select e.name , d.name from employee e inner join department d on e.empid=d.empid;





