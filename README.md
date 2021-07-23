# Countries App

Built using React, fetches REST countries API data using axios and displays information on screen. Added search feature on main countries page to quickly find a country.

BrowserRouter used for routing between the two main pages, Countries and Country. 
Header and Footer components rendered across both routes.
Axios and react-router-dom installed through npm.

project located on codesandbox

https://codesandbox.io/s/cranky-cache-mervynlevis-6661m


# Countries Page

Uses useEffect and Axios to fetch the api data for all countries. Then uses setState to set the response.json to the countries variable. This is then mapped over and each individual countries data is rendered, as a link to that particular countries page. Link is used from react-router-dom to generate a link to the particular country by setting the country.name variable to the final part of the url.

This component renders all countries when searchTerm is an empty string. When the user uses the search box the handleChange function is called, which uses setState to set searchTerm to the event.target.value. Then the component renders countries with names that contain the search term.

Added a search function to the app to quickly locate a country, instead of having to scroll through the 250 countries individually. 

# Country Page

The Country component fetches two pieces of data from REST Countries.
First, it fetches the information for the name of the country whose page has been rendered. This is achieved using useParams in React. Then setState is used generate the countries data from the API. This object is then mapped over to generate the country information. 
Currencies and Languages are individually mapped over to get the correct data, each within a span.

Secondly, all countries data is generated using the same method as the Countries component.
This data is used in generating the bordering countries buttons, which link to each bordering countries page. The border buttons themselves contain the alpha3code of the country. When any of these buttons are clicked, the handleClick function is called , which converts the event.target.value into the corresponding country name. I used the all api data object to get the country name that corresponds to this alpha3code, and use history.push to redirect to that country, which re-renders the Country component with the selected bordering country data.

# Error Page

Added simple 404 page for any route outside of Countries and Country, user taken to 404 page with link back to Countries page.
