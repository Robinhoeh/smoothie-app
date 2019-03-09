### Index page
 - This will be the homepage
 - Gets added to routes:[]
 - Card gets built by v-for over smoothies data
  - Smoothies is local data, until firestore is built
 - Dummy data is needed in order to loop over so cards are present
 - Once we have access to the data - we USE that data as much as we can to MAKE the app DYNAMIC as possible
 - When setting up an initial build, THINK: how can you access the data as soon as possible to make app dynamic from the beginning
 - When you access data and loop over that's already nested inside of an array, use the INDEX that VUE gives you for the KEY
 - Slug is a URL friendly version the title of the current path/page

 #### Delete smoothie button
 - Add the delete icon
 - Attach delete function
 - Need to know which smoothie we are deleting
  - Pass that specific smoothie function using the .id from current smoothie iteration
 - When deleting an item, we need to let the DATA know we are taking away an item
 - Reference the data, smoothie array,  THEN update it with the new array
  - The id being passed in is the id being clicked on - filter checks if that id EXISTS in the original array - if condition is FALSE or is equal to the same id being passed, it takes it out of original array, if smoothie.id is NOT equal or TRUE to id being passed in, it leaves it in original array

 - We update the back end first, delete the item from the DB  - THEN - update the local smoothies array

 #### Accessing DB

 - Import from firestore
 - export from init.js
 - Import to index.vue
 Once we have access to the DB, we go into the Created() phase ⬇️

 #### Created phase
  - Gives us access to page before data or anything is displayed

  1. Grab data from DB
  2. Push data from DB to LOCAL data array
  3. Allows access to data before page renders

SNAPSHOT - state of smoothie collection at current time
doc.data() is exaclty the data we need]
Now - the id being passed in when deleting, is the randomized ID from firebase


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

 - smoothie.id thats being passed to the .doc() is referenced from the created phase
 which is being referenced from firestore

  - What event is on the update smoothie button?


### Design

Index
Navbar
  Add smoothie page

  Edit smoothie page




