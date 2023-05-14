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