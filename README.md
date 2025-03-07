# Final Project

Project link: https://final-project-jade-jays-planner.vercel.app/ 

Our final project is a course planner similar to that of [WPI Planner](https://planner.wpi.edu/).
On top of the default features, we added some additional ones including:

- A tracking sheet
- An interactive course flowchart showing prerequisite data

## Usage instructions
The application's home page requires you to login. Below are the credentials required to login
```
username: admin
password: admin
```

## Our tech stack

Here is a list of the technologies we used:

### Frontend stack
- React
- Mostly CSS Modules
- Some TailwindCSS sprinkled in
- Mantine UI Library
- Vite

### Backend stack
- NodeJS
- ExpressJS
- MongoDB (database)

### Deployment & Project structure
- Pnpm 
- Turborepo
- Vercel
- Render

For deployment, we hosted an api server on Render and the actual application on Vercel.  

## Challenges we faced

The big technical challenge that we faced was during deployment. Setting up Express for Vercel was not a intuitive. Additionally, having a monorepo structure didn't help. Instead, we opted to deploy the server on Render, which supported Web Services rather enforcing a serverless framework onto the developer. Once the API server was deployed on Render, setting up the frontend to deploy on Vercel was a simple task.

An additional challenge was trying to align schedules with each other. Because of problem, development was very uncoordinated and code quality couldn't be ensured. By the point code was commited, it would be too much work to parse. Eventhough facing this problem, we try our best to meetup with each other, stay on top of things, and assign tasks. Although with these hiccups, we were able to complete the application in time and implemented some features that if given enough time to polish, we think, would be really benefit the WPI community.

## What everyone did

### Cameron
- worked on the flowchart page, which includes
- linking it to the tracking sheet selected courses.
- colored nodes for selected/unselected classes, colored edges between nodes indicating prereq type,
- a full prereq option that recursively gets all of the prereq requirements for each course and displays them as unselected courses
- clickable nodes that animate edges connected to the node, draggable nodes, and included interface for panning, zooming, and fitting to screen.
- also worked on the login page and functionality, which uses localstorage to make sure users can't navigate to pages they aren't supposed to and logout functionality.

### Thinh
- Setup the development techstack and REPL for the project using pnpm and turborepo
- Setup the api server including database connection, database schemas, lots of data parsing for the backend
- Made api endpoints used by the client to communicate with the client
- Setup data fetching functions so that the client can send api calls and fetch data from the backend
- Worked on implementing the common features of WPI planner, e.i, Course list and Schedule, making sure to include all the relevant edge cases.
- Rewrote and improved on the initial iteration's system, making client and server communication much simpler, thus simplifying the codebase. (2nd iteration is in `dev` and is not deployed)
- Optimized the 2nd iteration to make rendering feel snappy to improve UX 
- Deployed the web app and making sure everything worked, CORs, rewriting Vercel routes.
- Used Render for the api server and Vercel for the frontend, which routes api calls to the api server.


## Notes

This version of the app is rather messy. This was mainly due to a poorly thought-out system architecture that made
both client and server state management really verbose and bloated. If you feel down in the dumps while looking at
this codebase and are curious, the improved version that didn't make it to production is in the `dev` branch and 
contains a much MUCH simpler codebase.
