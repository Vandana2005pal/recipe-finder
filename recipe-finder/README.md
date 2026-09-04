# Recipe Finder App

## About

A React-based recipe finder application that uses TheMealDB API to search for recipes and display detailed recipe information.

## Features

- Search recipes by name
- View recipe details, ingredients, and instructions
- Responsive design for smaller screens
- Loading and error states
- Empty search validation
- Reusable React components

## Tech Stack

- React
- JavaScript
- CSS
- TheMealDB API

## How to Run

```bash
npm install
npm run dev
```

## Prompts Used

### Prompt 1: Project Planning

I am a beginner React developer.

I want to build a Recipe Finder application using React and JavaScript.

The app should allow users to search for recipes, display recipe cards, and view recipe details.

Please help me plan this project step by step.

Suggest a simple folder structure, components, and features suitable for a beginner.

Do not generate the complete code yet.

### Prompt 2: Component Structure

Based on the Recipe Finder project plan, create a simple React component structure.

Use functional components and React hooks.

Explain the purpose of each component before providing the code.

Keep the code beginner-friendly and avoid unnecessary complexity.

### Prompt 3: API Integration

Help me integrate TheMealDB API into my React Recipe Finder app.

I want users to search for recipes and display the results.

Explain how fetch works, how to handle loading and errors, and how to store the API response in React state.

Please provide the code step by step.

### Prompt 4: UI Design

Help me improve the UI of my React Recipe Finder app.

I want a clean, modern, responsive design with a search bar, recipe cards, and a recipe details section.

Use CSS only.

Please suggest improvements that are suitable for a beginner and explain the changes.

### Prompt 5: Debugging

I am getting this error in my React Recipe Finder app:

[PASTE YOUR ACTUAL ERROR]

Here is the relevant code:

[PASTE CODE]

Please explain the cause of the error and suggest the smallest fix.

Do not rewrite the entire project.

## AI Assistance and Manual Improvements

### AI Assistance

I used AI to review my React Recipe Finder application and suggest improvements. AI helped me understand error handling, loading states, responsive design, and user experience improvements.

### Manual Improvements

1. Added a user-friendly error message when the API request fails.
2. Added a loading indicator while recipes are being fetched.
3. Improved the layout for smaller screens using CSS media queries.
4. Added validation to prevent unnecessary API calls when the search input is empty.
5. Separated the recipe card and recipe details into reusable components.
6. Added responsive recipe cards, focus styles, hover states, and a styled details section.

### Manual Improvement: Error Handling Testing

I tested the error-handling functionality by temporarily using an invalid API URL. The application displayed an error message and cleared the previous recipe results. After restoring the correct API URL, recipe results loaded successfully.

### Testing Result

The application handled API failure without crashing and successfully displayed recipes again after the correct API URL was restored.

## Live Demo

[Add your deployed link here]

## GitHub Repository

[Add your GitHub repository link here]
