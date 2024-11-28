# GitHub Explorer

GitHub Explorer is a React-based web application that allows users to search for repositories on GitHub, view detailed information about a repository, manage issues, filter them by state (open/closed), and visualize issue data with a pie chart.

This project is built with React, TypeScript, Tailwind CSS, and Chart.js.

## Features

1. **Repository Search**: Search GitHub repositories by name.
2. **Repository Details**: View detailed information for a selected repository, including its URL, description, forks count, stargazers count, and open issues count.
3. **View Repository on GitHub**: Link directly to the repository's GitHub page.
4. **Issue Management**: View and filter the list of issues for a repository by their state (open or closed).
5. **Issue Breakdown**: View a pie chart that visually shows the breakdown of issues in the repository (open vs closed).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or above)
- [npm](https://www.npmjs.com/) (v8 or above)

### Steps to Run Locally

1. Clone the repository:
    ```bash
    https://github.com/tebogocodes/deepalert-.git
    cd deepalert
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

4. Visit `http://localhost:3000` in your browser to access the application.

## Project Structure

- **`/src`**: Contains the main code of the app.
  - **`/api/github.ts`**: A utility to handle GitHub API requests.
  - **`/components`**: Contains reusable components like search bar, repository details, issues list, and pie chart.
   

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that enhances development with static typing.
- **Tailwind CSS**: A utility-first CSS framework for fast and responsive design.
- **Chart.js**: A JavaScript library used to display pie charts.
- **Axios**: Promise-based HTTP client used to make requests to the GitHub API.

## API Documentation

The application uses GitHub’s public API to fetch data about repositories and issues.
