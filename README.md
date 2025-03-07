# Final Project

Project link: https://final-project-jade-jays-planner.vercel.app/ 

Our final project is a course planner similar to that of [WPI Planner](https://planner.wpi.edu/).
On top of the default features, we added some additional ones including:

- A tracking sheet
- An interactive course flowchart showing prerequisite data

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

# Notes

This version of the app is rather messy. This was mainly due to a poorly thought-out system architecture that made
both client and server state management really verbose and bloated. If you feel down in the dumps while looking at
this codebase and are curious, the improved version that didn't make it to production is in the `dev` branch and 
contains a much MUCH simpler codebase.