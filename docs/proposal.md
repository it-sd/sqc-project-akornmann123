Red List of Threatened Species
===============

The site I chose to do my project on is IUCN Red List of Threatened Species.
This site keeps track of different information about the species that are in danger.
I will include data such as the Country and/or Region the endagered species are located, 
the endagered species themselves, and the habitats of the species. 

Web Service
-----------
[IUCN Red List of Threatened Species](http://apiv3.iucnredlist.org/api/v3/docs) apiKey (v3)
1. (GET species by country) /api/v3/country/getspecies/:country?token='YOUR TOKEN'
2. (GET records of all species) /api/v3/species/page/:page_number?token='YOUR TOKEN'
3. (GET individual species) /api/v3/species/:name?token='YOUR TOKEN'
4. (GET historical assessments by species) /api/v3/species/history/name/:name?token='YOUR TOKEN'
5. (GET threats by species) /api/v3/threats/species/name/:name?token='YOUR TOKEN'
6. (GET habitats by species) /api/v3/habitats/species/name/:name?token='YOUR TOKEN'

### Database Use ######
The tables I plan on making is a species table, country table, individual species table, history table,
threats table, and habitats table. The "Species" table will be the main table. All of the others will branch off of the main
"Species" table because the tables are all based on the species. For example, the "country" table will represent the endagered species by country.

### Initial Designs ######
![SampleLayout](https://user-images.githubusercontent.com/123998259/222934603-9863f1f0-6d3d-41ab-90a8-7eea0a1538cb.png)
![Sitemap](https://user-images.githubusercontent.com/123998259/222934612-0d4c8724-737f-4975-9fd5-6af89c3fed6b.png)

