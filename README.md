# Image Card view
Card view showing list of team members
- placeholder data fetched from [Random User Generator](https://randomuser.me/api/?results=50)
- Toggle between grid/list view
- Search by name
- Sort by firstname asc/desc
- React Lazy loading used for cards
- Responsive design

## Running the Project

### Prerequisites
This app was built with Node.js v17.1.0

### Running the App
1. `npm install`
2. `npm start`
* The app will run on localhost:3000

### Running the Tests
1. `npm run test`

## Third-Party Libraries
1. [Create React App](https://github.com/facebook/create-react-app)
   * Used for boiler-plate React setup and pre-configured build/compile tools.
2. [Random User Generator](https://randomuser.me/api/?results=50)
   * Used for placeholder user data.

## Features to Improve
* Testing--I have only written one test for the card component. Not sure how to write the other tests but have provided suggested test scenarios.

* Styling--Not sure which approach would be the most clean and suitable for maintanance. I prefer to use inline styling of react components but not possible for media queries. Here I've seperated css files / component to make it easy to find. Positioning of background image on list card need minor adjustment.

* File Structure--I like to keep component files in a seperate folder in `src`. Possibly keep assets in an asset folder.

* Clean code--I'm sure there are plenty of re-factoring to do. For example did I struggle with the sorting function syntax, hence the long version.

## Features to Add
* 


