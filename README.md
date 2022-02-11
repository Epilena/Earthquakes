# Earthquakes
## leaflet visualization of USGS earthquake data

### Introduction
United States Geological Survey (USGS) data was utilized in the creation of a leaflet visualization.  The USGS provides scientific data about natural hazards, the health of the ecosystem and enviornment; and the impacts of climate and land-use change. This project will specifically utilize earthquake data.  There is a large amount of data collected daily world- wide.  

### Methods
To complete the task of visualizing the earthquakes, HTML and JavaScript were necessary.  A static file was required for the CSS and JavaScript files.  A JSON file was obtained from USGS to visualize.  There are a number of endpoints, all_week was selected to increase the number of markers when compared to a by day endpoint.  A map was created utilizing leaflet and several functions were needed to have marker color determined by depth and marker size determined by magnitude.  Earthquakes with higher magnitudes appear larger and earthquakes at a greater depth appear darker. Popups with additional information and a legend were created to complete the project. 

### Results



![final result](https://user-images.githubusercontent.com/88807979/153587504-3a4304d3-300b-4d17-942d-a5ad9cc93e3a.png)


### Discussion
Ensuring that functions were created appropriatley proved to be a challenge.  Each component required a seprate function to make it easier to debug each portion.  The legend also posed challenges there were ultimately resolved by adding a CSS component to the code.  
