# Final Project

Our final project is a course planner index similar to that of [WPI Planner](https://planner.wpi.edu/). On top of course planning, we have additional features include:

- Course Tracker
- Course Flowchart

## Run Instructions

To ensure that everyone have the same environment, I suggest using **pnpm**. You can quickly install by running the `install` script in the "scripts" folder. This
will install pnpm and setup environment variables paths. Linux users must call `install.sh` and Window users must call `install.bat`. If you want to uninstall pnpm,
the `clean.bat` & `clean.sh` scripts are available.

To start the app, from the root directory, run the following commands:

1. `pnpm install` - installs all required dependencies
2. `pnpm run dev` - starts and watches express server & builds and watches frontend directory

## Our tech stack

Our frontend consists of React + TailwindCSS and ShadcnUI as our component library. In the backend we have an NodeJS, ExpressJS web server. For the database we use MongoDB.
