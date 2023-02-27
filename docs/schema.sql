DROP TABLE IF EXISTS Species, Individual Species, Country, Threats, History, Habitat;

CREATE TABLE Species(
  Species_Id string
);

CREATE TABLE Individual_Species(
  Species_Id string,
  Species_Name string
);

CREATE TABLE Country(
  Species_Id string,
  Country string,
  Region string
);

CREATE TABLE Threats(
  Species_Id string
  Species_Name string
);

CREATE TABLE Habitats(
  Species_Id string
  Species_Name string
);

CREATE TABLE History(
  Species_Id string
  Species_Name string
);

