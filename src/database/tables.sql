-- SCRIPTS

CREATE SCHEMA bdtiresolve;

--CRIANDO A TABELA roles--
CREATE TABLE roles (
    id serial PRIMARY KEY, -- id do da role

    name varchar(20) -- nome da role
);

--CRIANDO A TABELA users--
CREATE TABLE users (
    id serial PRIMARY KEY, -- id do usuario

    name varchar(50), -- nome do usuario
    email varchar(100), -- email do usuario
    password varchar(20), -- senha do usuario

    role_id integer REFERENCES roles(id) -- id da role do usuario
);


--CRIANDO A TABELA reservations--
CREATE TABLE reservations (
    id serial PRIMARY KEY, -- id da reserva

    date date, -- data da reserva
    time time, -- hora da reserva
    status varchar(20), -- status da reserva
    class varchar(20), -- classe da reserva

    user_id integer REFERENCES users(id), -- id do usuario que fez a reserva
);
