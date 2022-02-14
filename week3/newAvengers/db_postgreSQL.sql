-- Show all of the information on the Avengers.
SELECT * FROM avengers

-- Create a new table with information from another super hero group. Make sure there is an appropriate header and must be at least 30 rows.
-- Add a column to your new table for those who are interested in joining the Avengers. Make this be randomly assigned.
-- Add a column to your new table for their favorite Avenger (have it randomly choose between Tony Stark, Bruce Banner & Victor Shade).
CREATE TABLE IF NOT EXISTS NEWAVENGERS (
	NAME varchar(40) NOT NULL,
	GENDER varchar(6) NOT NULL,
	INTEREST boolean,
	FAV_AVENGER varchar(40) NOT NULL
)

INSERT INTO NEWAVENGERS (NAME, GENDER, INTEREST, FAV_AVENGER) VALUES
('Easton Yarbrough', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Davey Caviness', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Michael Pulliam', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Kelci Morgan', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Bobby Thomas', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Janak Rajani', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Churchill Perry', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Petrina Ada', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Alley Yarbrough', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Katrina Jackson', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Jarrod Jackson', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Joseph Jackson', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Jessie Nowlin', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Allen Carroll', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Mari Carroll', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Rachael Frogget', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Jeremy Frogget', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Amanda Aubrey', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Phillip Aubrey', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Bradley Bellar', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Austin Honeycutt', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Shawn Dail', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Peyton Morgan', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Landon Whisnant', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('James Stone', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Julia Stone', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Kenny Asbury', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Johnny Farva', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Roy Sukemov', 'Male', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]),
('Ni San', 'Female', random() > 0.5, (ARRAY['Anthony Edward Tony Stark', 'Robert Bruce Banner', 'Victor Shade'])[(random() * 2 + 1)]);

-- Use a JOIN statement between the two tables for who is interested in joining the Avengers.
SELECT avengers.name, avengers.gender, newavengers.name, newavengers.gender FROM avengers
JOIN newavengers ON newavengers.fav_avenger = avengers.name
WHERE interest = true

-- List all Avengers who have more than 1000 appearances in alphabetic order.
SELECT * FROM avengers WHERE appearances > 1000
ORDER BY name ASC
-- ERROR IN CSV FILE HERE. MUST RUN BELOW COMMANDS.

-- TO RESOLVE ERROR RUN ONE AT A TIME...
DELETE FROM avengers WHERE appearances LIKE 'Appearances'

ALTER TABLE avengers ALTER COLUMN appearances TYPE integer USING appearances::integer;

SELECT appearances FROM avengers

-- What Avengers do not have more than 1000 appearances?
SELECT * FROM avengers WHERE appearances <= 1000
ORDER BY name ASC

-- Not more than 500?
SELECT * FROM avengers WHERE appearances <= 500
ORDER BY name ASC

-- Not more than 50 and female?
SELECT * FROM avengers WHERE appearances <= 50 AND gender LIKE 'FEMALE'
ORDER BY name ASC

-- More than 150, male, and are full members?
SELECT * FROM avengers WHERE appearances > 150 AND gender LIKE 'MALE' AND honorary LIKE 'Full'
ORDER BY name ASC