# rn-assignment6-11116926

In this assignment I was required to recreate the given UI and add some specific functionalies. These functionalities are listed and explained below:

#### Header
The header for the app has a menu icon, the shop logo, and a shopping bag button and a home button for navigation between screen. The shopping bag leads to the CartScreen, and the home button to the HomeScreen.

#### HomeScreen 
This component can be found in the components folder of the app. It shows all available items in the store. The items are rendered using the ProductCard Component, which is also in the components folder. 

#### ProductCard
The ProductCard component shows an image, title, description and price of each item in the store. It also has an add button that allows the user to add an item to the cart. Items in the cart can be viewed by clicking the shopping bag button in the header

#### CartScreen
The CartScreen component Shows all item that have been added from the HomeScreen. It renders these using the CheckoutItem component from the components folder.

#### CheckoutItem
This component contains the image, title decription and price of an item added from the Homescreen. It also has a remove button that removes an item from the cart.

### Extra Functionalities
- This app uses Async Storage to store the added items locally on the device.

