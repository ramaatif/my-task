-- to add new record on table
insert into Customers(customer_id,first_name,last_name,age,country) 
Values (6,'Rama','Atif',23,'Eg')
-- //////////////////////////////////////////////// to edit record on table
update Customers
set age =26
where customer_id =6
-- to delete record from table 
delete from Customers
-- NOTEEEEEE have to add where with its condition to prevent mistakes in all Sql Query
where customer_id=6;
