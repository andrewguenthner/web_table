UFO Sightings Database

Product:  This "purely for fun" demonstration activity provides a starting
point for building interactive tables in Javascript.

Rationale:  The prototype scripts and page elements developed will be used
to create an interactive table interface for the Hansen Solubility Parameters
project.  I will be presenting that project at the end of August at the 
American Chemical Society meeting in San Diego.  Because an interactive
table will be part of that display, I am working on the prototype functionality
now.

The system consists of a web page styled using Bootstrap 4, a dataset and rough
page design provided by Trilogy Educational Services, a style sheet, a Javascript
application, and a JSON data file.  The web page is named "index.html", and 
expects a folder named "static" with the scripts "app.js" and "data.js" in a "js"
sub-folder.  Within the "static" folder, there is also a stylesheet in the "css" sub-
folder.  Images are found in the "images" sub-folder.  

The web page will also import jQuery and related scripts from Bootstrap.

The table creation "app.js" has been designed for now to have two main functions.
The first is conversion of a generic JSON object array into a table, with column
headers that match the set of all English alphanumeric keys (spaces allowed) 
found in the JSON objects.  

The second functionality is a "Date" filter object.  For this version, the 
JSON object must contain a key named "datetime" for this filter to work
properly.  A future version will inspect the objects and assign filters based
on the data present -- min / max for numeric and data, and text content for
text.  For the Hansen Solubilty Parameter module, a special filter to handle
distances in solubility parameter space from a given entry will be provided.
The data set for the HSP table will be similar to this one, about 150 rows and
7 or 8 columns, so the page design should transfer reasonably well. 

Although eventually I will build a graphical interface for the Hansen Solubility
Parameter project, the interactive table can be deployed much earlier, and 
will give users a new and easier way to solve common problems like "find a solvent
that is similar to a set that I enter but not like these others".
