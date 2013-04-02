API Mashup
==========

Author: Daniel Zhao ( danielantoiny@gmail.com )

Online Repository at GitHub: https://github.com/dazhaoniel/apimashup

This is a simple GIS web applications for searching restaurants data and view restaurant locations on Google Map. 


Execute the program
-------------------
Before you start, please make sure you have GeoDjango, Django and python 2.7 installed on your local computer. 

Setup tables:
$ python manage.py syncdb

Run server:
$ python manage.py runserver

Then go to http://localhost:8000 and experiment with the application.

Please clear the database after each execution, by executing '$ python manage.py reset lunchMap', then type "yes" to empty the lunchMap_restaurant table.


Tools Used
----------
食べログAPI, Google Maps API, Python Django Web Framework, SQLite Database


Problems and difficulties
-------------------------
1. 食べログAPI only returns 20 results on one page at a time
2. I have trouble fining a better database that stores xml format data and works well with Django. So I chose to use SQLite, thus had to clear the table everytime I execute a query.
