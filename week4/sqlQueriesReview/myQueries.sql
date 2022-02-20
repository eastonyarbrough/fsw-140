-- 1. Show all the information on our customers.
SELECT * FROM customers

-- 2. Show a list of states, in reverse alphabetical order, where our vendors are located, and include the names of the vendor.
SELECT vendname, vendstate FROM vendors
ORDER BY(vendstate) DESC

-- 3. What if we adjusted the retail price of each product by increasing it 7 percent?
UPDATE products SET retailprice = retailprice * 1.07
SELECT productname, retailprice FROM products

-- 4. Show a list of orders made by each customer in ascending date order.
SELECT CONCAT(customers.custfirstname, ' ', customers.custlastname) AS customer,
orders.orderdate, orders.customerid, orders.ordertotal FROM customers
JOIN orders ON orders.customerid = customers.customerid
ORDER BY(orderdate) ASC

-- 5. Give the names of all vendors based in Albany, Anchorage, and Dallas.
SELECT vendname, vendcity FROM vendors
WHERE vendcity LIKE '%Albany%'
OR vendcity LIKE '%Anchorage%'
OR vendcity LIKE '%Dallas%'

-- 6. Show an alphabetized list of products with a quantity on hand greater than or equal to 30.
SELECT * FROM products WHERE quantityonhand >= 30
ORDER BY(productname) ASC

-- 7. What vendors do we work with that don’t have an email address?
SELECT vendname, vendemailaddress FROM vendors
WHERE vendemailaddress IS NULL

-- 8. List employees and the dates their orders shipped sorted by order date.
SELECT CONCAT(employees.empfirstname, ' ', employees.emplastname) AS employee,
orders.orderdate, orders.shipdate FROM employees
JOIN orders ON employees.employeeid = orders.employeeid
ORDER BY(orders.orderdate) ASC

-- 9. Show the vendors and products they supply to us for products over $75 for vendors in Texas.
SELECT vendors.vendname, vendors.vendstate, products.productname, products.retailprice FROM vendors, products
WHERE products.retailprice > 75 AND vendors.vendstate = 'TX'

-- 10. Show employees who live in the same city and state as our vendors.
SELECT CONCAT(employees.empfirstname, ' ', employees.emplastname) AS employee, vendors.vendname,
CONCAT(vendors.vendcity, ', ', vendors.vendstate) AS city_state FROM employees JOIN vendors 
ON CONCAT(vendors.vendcity, ', ', vendors.vendstate) = CONCAT(employees.empcity, ', ', employees.empstate);

-- 11. Display customers who have no sales rep (employees) in the same state.
SELECT CONCAT(customers.custfirstname, ' ', customers.custlastname) AS customer, customers.custstate
FROM customers LEFT JOIN employees ON customers.custstate = employees.empstate
WHERE employees.empstate IS NULL

-- 12. What is the average quoted price of a helmet?
SELECT AVG(retailprice) AS average_price FROM products 
WHERE categoryid = 1 AND productname LIKE '%Helmet%'

-- 13. What was the date of the earliest ship date?
SELECT MIN(shipdate) AS earliest_ship FROM orders

-- 14. What is the total amount (in dollars) of orders from the state of Oregon?
SELECT SUM(ordertotal) AS oregon_total FROM orders
LEFT JOIN customers ON customers.customerid = orders.customerid
WHERE customers.custstate = 'OR'

-- 15. Show each employee, the employee’s total sales (in dollars), the employee’s total sales item quantity, and
--     the average item sales price ordered by the employee’s average item sales price highest to lowest.
SELECT CONCAT(employees.empfirstname, ' ', employees.emplastname) AS employee, SUM(orders.ordertotal) AS total_sales,
COUNT(employees.employeeid = orders.employeeid) AS item_quantity, AVG(orders.ordertotal) AS average_price
FROM employees LEFT JOIN orders ON employees.employeeid = orders.employeeid GROUP BY(employee)
ORDER BY(average_price) DESC