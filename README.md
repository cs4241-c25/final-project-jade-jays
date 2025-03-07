# Final Project

Project link: https://final-project-jade-jays-planner.vercel.app/ 
Explanation Video: https://youtu.be/xpKKP0cE6_M

Our final project is a course planner similar to that of [WPI Planner](https://planner.wpi.edu/). It the course data from the same source, and uses that to allow the users to schedule courses, plan their degree track, and see what classes they need as prerequisites. 
We have 3 main features, scheduling, tracking, and a course flow chart. The scheduling is akin to the WPI planner, allowing users to view section times for individual courses they select.
The tracking page is a digital, automated version of the PDF given to students to see what classes they need to graduate. They can select courses from the various subject categories, and see if those courses fit into the requirements.
The course flow chart shows how the courses selected in the tracking sheet fit together in terms of prerequisites, and allow the user to view all prerequisites for the course that have not been added to the tracking sheet.


## Credentials
- username: admin
- password: admin

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