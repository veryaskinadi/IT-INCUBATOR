select 
    sqrt(number1) as root,
    log(number2) 
from 
    decimals
;

select
    floor(number1) number1,
    ceil(number2) number2
from 
    decimals
;

select 
  id,
  name, 
  birthday,
  Lower(race) race
  
from 
  demographics
;


select * 
from 
  companies
order by
  employees DESC
;

select 
  to_hex(arms) as arms,
  to_hex(legs) as legs
from 
  monsters
;


select 
  name,
  age,
  semester,
  mentor, 
  tuition_received
from students
  where tuition_received = false;


INSERT into participants (name, age, attending) values ('Dilyara', 33, true);
SELECT * FROM participants;


select
  name,
  country
from travelers
where country != 'Canada' AND country != 'Mexico' AND country != 'USA';


select 
  name,
  age
from 
  users
where age >= 18;


select 
  DISTINCT age
from 
  people


select 
  max(age) age_max,
  min(age) age_min
from people


select 
  sum(age) age_sum
from people



CREATE FUNCTION increment(n int) 
RETURNS 
  int AS $$
  BEGIN 
    RETURN n+1;
  END;

$$ LANGUAGE plpgsql;


select *
from
  students
where 
  IsActive = 1;


SELECT * 
FROM
 people
WHERE age > 50 ORDER BY age DESC;