# TravelQuest

**TravelQuest** is an intelligent travel planning website designed to simplify the journey for passengers by offering personalized travel itineraries based on their preferences. The platform allows users to choose their travel days, explore multiple route options, and make informed decisions with the help of an AI-powered chatbot. It provides tailored trip suggestions based on budget, trip duration, and preferred places to visit or stay, using machine learning and real-time data from various APIs.

## Features

- **Personalized Itineraries:** Generate customized travel plans based on user preferences like budget, trip duration, and places to visit.
- **AI-Powered Chatbot:** Provides instant responses to travel-related queries and offers suggestions on optimized routes, accommodation, and sightseeing.
- **Real-Time Data:** Integrated with Google Maps, OpenWeather, and Eventbrite APIs to offer up-to-date information on routes, weather, and local events.
- **Machine Learning Predictions:** Predicts the best travel times and optimized routes for a seamless travel experience.

## Tech Stack

### Front-End

- **React.js** – UI
- **Redux** – State management
- **Tailwind CSS** – Styling
- **Material-UI** – Pre-built UI components
- **React Router** – Navigation
- **Framer Motion** – Animations
- **Formik** – Form handling
- **Jest** – Unit testing
- **Vite** – Bundling and building tools
- **Lighthouse** – Performance audit and monitoring

### Back-End

- **Node.js (Express)** – Server-side framework
- **PostgreSQL** – Database for storing user data, preferences, and trip information
- **Google Maps API** – For route suggestions and distance calculations
- **OpenWeather API** – For weather forecasts and conditions
- **Eventbrite API** – To fetch local events happening at the destination
- **scikit-learn (Python)** – Machine learning models to predict travel times and optimized routes
- **Rasa** – For AI-driven chatbot
- **WebSockets (Socket.io)** – Real-time communication between server and client
- **JWT (JSON Web Token)** – Authentication for secure user sessions

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AshishBytes/TravelQuest.git
   cd TravelQuest

2. Install dependencies for the front-end:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the back-end:
   ```bash
   cd ../server
   npm install
   ```

4. Create a `.env` file in the root of the server folder and add your environment variables for the APIs:
   ```env
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   OPENWEATHER_API_KEY=your_openweather_api_key
   EVENTBRITE_API_KEY=your_eventbrite_api_key
   JWT_SECRET=your_jwt_secret
   ```

5. Run the server:
   ```bash
   npm run start
   ```

6. Run the front-end:
   ```bash
   cd ../client
   npm run dev
   ```

7. Visit `http://localhost:3000` in your browser to explore TravelQuest.

## Usage

1. Select your travel preferences, including trip dates, budget, and preferred destinations.
2. The AI chatbot will guide you through potential travel plans, suggest routes, and recommend places to visit.
3. Receive real-time updates on travel conditions, weather forecasts, and events happening in your destination.
4. Save and manage your travel plans for future reference.

## Contributing

We welcome contributions to improve TravelQuest! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the Apache License – see the [LICENSE](LICENSE) file for details.

## Developers

- **Ashish Singh**
- **Shailendra Mourya**
- **Diksha Batham**
- **Piyush Ranjan**

## Acknowledgements

- **Google Maps API** for route planning
- **OpenWeather API** for weather forecasts
- **Eventbrite API** for event data