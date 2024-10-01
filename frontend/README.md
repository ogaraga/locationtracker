# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Documentation

This is just a developmental project, although it was successfully deployed on vercel for dynamism. I used React and vite for this project with normal javascript. I also employed mongodb as my database. 
# Mongodb AND CONNECTION
This project was hosted in our local machine(computer) instead of the cloud based. This is why if you are not connected on the machine where the database is located, You might not get a favorable response. So, you need to connect to your local machine to enjoy this project maximally. Except you have the tools to achieve same response.
# Componentations
I divided this project into components for us to get the best results. There are about 11 conponents with different routing results.
# ContextApi
I employed the idea of contextAPI for state management of our components. Passing of props were made easy.
# Routing
i applied routing very well and the use of Link route instead of the href(a tag).
# Backend
The backend was powered with express and nodejs. I installed some dependencies like mongoose, dotenv, cors, jsonwebtoken,etc to be able to work effectively and achieve some desired results.
# Backend and Frontend
These two were powered and interconnected handshakenly by cross-origin widecat. The widecat(*) applies to all url visited

# SECURITY AND NOTIFICATION
I was able to hash passwords, applied jwt token for authroization to use our website. I also engaged clients with custom alerts or notifications components to get attention of our site users as they click on the DOM elements on the SPA.
 
# INTEGRATION OF MAP WITH REACT
The geolocation browser Map was independently done to be able to track down the coordinates of the user location at any point in time. i therefore integrated it into map leaflet which helped me achieve greater result with its useMapEvents hooks and other library like the openStreetMap and its attribution class.
# DATABASE connection/express-server connection
Before anything can work here, you need to initiate or start the express.Js to connect the server and the database together. If you are not connected to database via nodejs/express, you mightnt login even though you get registered/signed up but I doubt the latter might happen. 
# Frontend
I installed mongodb/mongoose at the front (reactjs) to avoid roll-up error so that vercel can resolve it properly
# VERCEL
My ultimate deployment host is vercel.
# Reloading or relaunching routes
Login page goes with jwt token.  You can only access it via proper routing. Refreshing logging when the user time has expire, will return error or redirect to login page.
# Pitfalls
The project is with pitfalls and when it happens, pls you can correct and let me know so that I can learn and improve. For example, if the database is not connected or you are not connected to your local machine, you cannot register or login. Also, I achieved just 80% of responsiveness on mobile devices/tablets. My update and delete API works fine at backend but on the frontend, it shows error with successful updated variable displayed on the screen.
