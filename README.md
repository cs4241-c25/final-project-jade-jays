# Final Project

Our final project is a course planner similar to that of [WPI Planner](https://planner.wpi.edu/).
On top of course planning, we have some additional features include:

- An intuitive course tracker
- An interactive course flowchart

## Dev Instructions

To ensure that development environment is consistent, I suggest using **pnpm**.

# Manual Webstorm Setup

Press `CTRL+ALT+S` to go to Webstorm's settings. In the search bar type Node.js.
Under Languages & Frameworks, click on the Node.js tab. Look for Node interpreter.
Click on the dropdown and select download, choose any Node version above 20 and
click download. This would install Node and other package managers, including
pnpm.

# Others

You can quickly install by running the `install` script in `Powershell`. This
will install pnpm and set up a path to the pnpm executable. This allows you to
call pnpm anywhere in the terminal. Window users must call `install.ps1`. If 
you want to uninstall pnpm, `clean.ps1` script is available.

Once pnpm is installed. To start developing, run the following commands in the
project's root directory:

1. `pnpm install` - installs all required dependencies
2. `pnpm run dev` - starts and watches express server & builds and watches
    frontend directory

## Our tech stack

Our frontend consists of React + TailwindCSS and ShadcnUI as our component library.
In the backend we have a Node.js + Express.js web server. For the database we use 
MongoDB.
