# Flexera Pagination App

## Overview

Flexera Pagination App is a React application designed to search and display GitHub repositories using the GitHub API. The app allows users to navigate through paginated results, view repository details, and persist their selections even after refreshing the page.

## Features

1. **GitHub Repository Search:** The app fetches repository data from the GitHub API based on the provided page number and maximum number of records.

2. **Pagination:** Users can navigate through the search results using the Next and Previous buttons. The app dynamically updates the UI based on the selected page.

3. **Persistent Selections:** Selected repository IDs are stored in both the local storage and the app's state. This ensures that user selections persist even after a page refresh.

4. **Detailed Repository Cards:** Each repository is presented in a card format, displaying the author's profile photo, full name, and description.

5. **Navigation Controls:** The button container includes Previous and Next buttons, along with information about the current page and the total number of records. The Previous button is disabled on the first page, and the Next button is disabled on the last page.

6. **Footer with Author Information:** The footer displays the author's GitHub profile photo, name, and a link to their GitHub profile. This information is fetched from the GitHub API.

## Technologies Used

- **React:** The app is built using the React library for creating a dynamic and efficient user interface.

- **GitHub API:** The GitHub API is utilized to fetch repository data and author information.

- **CSS:** Custom CSS styles are implemented to design the UI from scratch.

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/harishzetetic/flexera_pagination.git

2. Navigate to the project directory.
   ```bash
   cd flexera_pagination

3. Install dependencies.
   ```bash
   npm install

4. Start the development server.
   ```bash
   npm start

5. Start the development server.
   ```bash
   Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Author

- **Your Name**
  - GitHub: [Visit My GitHub Profile](https://github.com/harishzetetic)

## Running Tests

Unit tests for the App component are provided in the __tests__ directory. Run the tests using the following command:

```bash
npm test





    

