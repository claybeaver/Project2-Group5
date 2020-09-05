-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "cost" (
    "hurricane_id" INT   NOT NULL,
    "name" VARCHAR(255)   NOT NULL,
    "damage_usd" numeric   NOT NULL,
    "norm_damage_usd" numeric   NOT NULL,
    "year" INT   NOT NULL
);

CREATE TABLE "fatalities" (
    "hurricane_id" INT   NOT NULL,
    "name" VARCHAR(255)   NOT NULL,
    "year" INT   NOT NULL,
    "deaths" INT   NOT NULL
);

CREATE TABLE "hurricanes" (
    "hurricane_id" INT   NOT NULL,
    "date" INT   NOT NULL,
    "name" VARCHAR(255)   NOT NULL,
    "time" INT   NOT NULL,
    "status" VARCHAR(255)   NOT NULL,
    "latitude" VARCHAR(255)   NOT NULL,
    "longitude" VARCHAR(255)   NOT NULL,
    "max_wind" INT   NOT NULL,
    "air_pressure" INT   NOT NULL,
    "latitude_decimal" numeric   NOT NULL,
    "longitude_decimal" numeric   NOT NULL,
    "year" INT   NOT NULL
);

CREATE TABLE "master" (
    "date" INT   NOT NULL,
    "name" VARCHAR(255)   NOT NULL,
    "time" INT   NOT NULL,
    "status" VARCHAR(25)   NOT NULL,
    "latitude" VARCHAR(255)   NOT NULL,
    "longitude" VARCHAR(255)   NOT NULL,
    "max_wind" INT   NOT NULL,
    "air_pressure" INT   NOT NULL,
    "latitude_decimal" numeric   NOT NULL,
    "longitude_decimal" numeric   NOT NULL,
    "year" INT   NOT NULL,
    "hurricane_id" INT   NOT NULL
);

select * from hurricanes;
select * from cost;
select * from master;
select * from fatalities;

drop table hurricanes;
drop table cost;
drop table master;
drop table fatalities;