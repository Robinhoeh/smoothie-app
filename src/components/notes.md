### On Form submit:

 - All ingredients should have been added to the smoothieIngredients array
 - Form Submit will update the FE as well as bind and send the data to Firestore

 ### Deleting an ingredient
  - On tab, ingredient is entered and trash icon shows up to deleted
  - On click of trash can icon, ingredient is removed from the page and the DB
  - Cycle through the array of ingredients
  - Compare the items in the array to the items being clicked
  - if clicked ones match the item being itereated over in array, remove item from page


### Editing a smoothie
 - Add the route in index.js
 - Attach a parameter
 - Create an Edit Smoothie component
 - In that component reference the param from the editSmoothie $route
 - index.vue = add router-link to point to EditSmoothie component, pass the params from index.js
 - Style accordingly

 ### Query firestore
  - Using created() phase allows allows us access to rendered data but not yet displayed
  - .where() takes 3 paramaters
   - Property inside records - slug
   - Evaluation param - > < ===
   - What do you want it to compare/equal to?
   -.get() asynchronous -
   - snapshot is firebase current records of data being returned, snapshot is collection of items

   FLOW:
    1. Grab slug
    2. Query DB
    3. Getting the record
    4. Pushing record onto data object
    5. NOW, record is stored locally on smoothie object
