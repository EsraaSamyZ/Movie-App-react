# Trending Movies, TV Shows, and People Application

This repository contains a web application that displays trending movies, TV shows, and people using data from The Movie Database (TMDb) API. The application allows users to view trending content, search for specific movies, shows, or people, and view details about each item.

## Project Preview
![image](https://github.com/EsraaSamyZ/Movie-App-react/assets/142722769/d5f98b1c-7336-4103-9e36-c60fdb417638)

## Functionality

### Key Features

- Retrieve daily trending lists from the TMDb API.
- Filter trending content by "movie," "tv," or "person."
- Perform server-side searching for movies, TV shows, and people.
- Display detailed information about each item.
- Utilize responsive design and ensure cross-browser compatibility.
- Implement routing using React Router for a smooth user experience.
- Use Material UI (MUI) for a consistent and user-friendly interface.

### API Endpoints

- Trending Content: [https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY](https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY)
- Search: [https://api.themoviedb.org/3/search/multi?api_key=YOUR_API_KEY&query={query}](https://api.themoviedb.org/3/search/multi?api_key=YOUR_API_KEY&query={query})
- Details: [https://api.themoviedb.org/3/{media_type}/{item_id}?api_key=YOUR_API_KEY](https://api.themoviedb.org/3/{media_type}/{item_id}?api_key=YOUR_API_KEY)

### Development Instructions

- The project is structured for clarity and maintainability.
- Code is well-organized, commented, and follows best practices.
- Business rules are correctly implemented.
- The application is responsive and compatible with various browsers.
- Functional components with hooks are used, leveraging the latest ReactJS features.
- Create React App was used for the initial setup.
- React Router is employed for client-side routing.
- Material UI (MUI) components are used to speed up development and ensure a polished UI.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
2. Install the project dependencies
3. Obtain your TMDb API key by signing up on the TMDb website.
4. Create a .env.local file in the project root and add your API key
5. Start the development server
6.Open your web browser and visit http://localhost:3000 to view the application.

## Technologies Used

- ReactJS
- React Router
- Material UI (MUI)
- Axios for API requests
- Create React App
- HTML5/CSS3




