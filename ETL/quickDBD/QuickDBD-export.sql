-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Cost" (
    "hurricane_id" INT   NOT NULL,
    "name" VARCHAR(255)   NOT NULL,
    "damage_usd" INT   NOT NULL,
    "norm_damage_usd" INT   NOT NULL,
    "year" INT   NOT NULL,
    "category" VARCHAR(255)   NOT NULL
);

