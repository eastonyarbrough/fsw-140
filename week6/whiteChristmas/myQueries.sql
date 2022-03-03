-- Create table for data
CREATE TABLE IF NOT EXISTS temperatures (
	yr INT,
	dy INT,
	m1 INT,
	m2 INT,
	m3 INT,
	m4 INT,
	m5 INT,
	m6 INT,
	m7 INT,
	m8 INT,
	m9 INT,
	m10 INT,
	m11 INT,
	m12 INT
)

-- Import csv file to table. I used OpenOffice to save the csv file without the header row.
-- This allowed me to create the table expecting integer data instead of varying character.
-- It also prevented me from having to use a bunch of alter statements.

-- Show the average daily temperature for August 10th, 1964.
SELECT m8 / 10 AS temp FROM temperatures
WHERE yr = 1964 AND dy = 10

-- Charles Dickens is said to be responsible for the tradition of expecting snow at Christmas Daily Telegraph.
-- Show the temperature on Christmas day (25th December) for each year of his childhood. He was born in
-- February 1812 - so he was 1 (more or less) in December 1812.
-- Show the twelve temperatures.
SELECT yr, m12 / 10 AS temp FROM temperatures
WHERE yr BETWEEN 1812 AND 1823 AND dy = 25

-- We declare a White Christmas if there was a day with an average temperature below zero between 21st and 25th of December.
-- For each age 1-12 show which years were a White Christmas. Show 'White Christmas' or 'No snow' for each age.
SELECT yr - 1811 AS age,
CASE WHEN MIN(m12) < 0 THEN 'White Christmas' ELSE 'No Snow' END AS snow
FROM temperatures
WHERE yr BETWEEN 1812 AND 1823 AND dy BETWEEN 21 AND 25
GROUP BY(yr)

-- A person's White Christmas Count (wcc) is the number of White Christmases they were exposed to as a child (between 3 and 12
-- inclusive assuming they were born at the beginning of the year and were about 1 year old on their first Christmas).
-- Charles Dickens's wcc was 8.
-- List all the years and the wcc for children born in each year of the data set. Only show years where the wcc was at least 7.
SELECT yr, CASE WHEN MIN(m12) < 0 THEN COUNT(yr) ELSE '0' END AS wcc
FROM temperatures WHERE yr BETWEEN yr AND yr + 11 AND dy BETWEEN 21 and 25
GROUP BY(yr) ORDER BY(yr) ASC

-- Display the average temperatures for August by decade.
SELECT yr, AVG(m8 / 10) AS august FROM temperatures
WHERE yr BETWEEN yr AND yr + 9
GROUP BY(yr) ORDER BY(yr) ASC
