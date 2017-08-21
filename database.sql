CREATE TABLE employees(
	id serial PRIMARY KEY,
	first_name VARCHAR(80) NOT NULL,
	last_name VARCHAR(80) NOT NULL,
	job_title VARCHAR(80) NOT NULL,
	salary INT NOT NULL,
	is_active BOOLEAN true NOT NULL
);

INSERT INTO employees (first_name, last_name, job_title, salary)
VALUES ('Jon', 'Snow', 'King of the North', 5000),
('Adam', 'Savage', 'Professional Geek', 100000),
('John', '117', 'Master Chief', 94136);