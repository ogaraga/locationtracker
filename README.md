# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Documentation

This is just a developmental project, although it was successfully deployed on vercel for dynamism. We used React and vite for this project with normal javascript. We employed mongodb as our database. 
# Mongodb 
was hosted in our local machine(computer) instead of the cloud based. This is why if you are not connected on the machine where the database is located, the data fetched from it will be funny to read at atimes. So, you need to connect to the local drive to enjoy this project maximally. Except you have the tools to migrate it to cloudbase database.
# Componentations
we divided our project into components for us to get the best results. There are about 11 conponents with different results.
# ContextApi
we employed the idea of contextAPI for state management of our components. Passing of props were made easy.
# Routing
we applied routing vey well and the use of Link route instead of the href a tag.
# Backend
Our backend was powered with express and nodejs. we installed some dependencies like mongoose, dotenv, cors, jsonwebtoken,etc to be able to work effectively and achieve a desired result
# Backend and Frontend
These two were powered and interconnected by cross-origin widecat. The widecat(*) applies to all url visited

# SECURITY AND NOTIFICATION
We were able to hash passwords, applied jwt token for authroization to use our website. We also engaged clients with custom alerts or notifications components to get attention of our site users as they click on the DOM elements on the SPA.
 
# INTEGRATION OF MAP WITH REACT
The geolocation browser Map was independently done to be able to track down the coordinates of the user location at any point in time. We therefore integrated it into map leaflet which helped us achieve greater result with its useMapEvents hooks and other library like the openStreetMap and its attribution class.
# DATABASE connection/express-server connection
Before anything can work, we needed to initiate or start the express to connect the server and the database together
# Frontend
we installed mongodb/mongoose at the front (reactjs) to avoid roll-up error so that vercel can resolve it properly
# VERCEL
our ultimate deployment host is vercel.
# Reloading or relaunching routes
Login page goes with jwt token. You can only access it via proper routing. Refreshing logging when the user time has expire, will return error.
# Pitfalls
The project is with pitfalls and when it happens, pls you can correct and let us know so that we can learn and improve. For example, if the database is not connected, your log in name might appear a number instead of letter or error may happen otherwise, you can roll on. Also, we maintained just 70% of responsiveness on mobile devices/tablets. Our update and delete API works fine backend but on the frontend, it shows error.
