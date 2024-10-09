# frontend-config

Repository to have the base for custom Vue3 frontends for Cornflow.

## Overview

This repository serves as a configuration template for projects based on Vue 3, TypeScript, Pinia, and Vue Router. It provides a structured setup to kickstart your frontend development.

## Features

- **Vue 3**: The progressive JavaScript framework.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Pinia**: Store for managing application state.
- **Vue Router**: The official router for Vue.js.

## Project Structure

### Pinia Store

Located in `src/store/general.ts`:

Defines a Pinia store named `general` with state, actions, and getters for managing notifications and user data.
The aim is to declare here all the data that needs to be used between components.

### Router

Located in `src/router/index.ts`:

Configures the Vue Router with routes for sign-in, index, and main views, including authentication checks and redirections.
The aim is to define here all your routes.

### App.vue

Located in `src/App.vue`:

The main application component that sets up the router view and provides snackbar services.

### Services

- **AuthService.ts**: Handles login, signup, logout, token, and user management.
- **SnackbarService.ts**: Manages snackbar notifications.
- **NotificationManager.ts**: Manages notifications.

### Views

- **LoginView.vue**: Login page.
- **IndexView.vue**: Index page.
- **MainView.vue**: Main content page. This is a template and should be replaced with your main view. Name of the component can be updated to the project's needs.

### Components

- **AppView.vue**: Main application component view.
- **LoginSignup.vue**: Login and signup component.
- **AppDrawer.vue**: Application drawer component. This should be updated with all the pages needed for the project.

### Interfaces

Located in `src/interfaces/` Intended for defining TypeScript interfaces.

### Models

Located in `src/models/`: Intended for defining data models.

### Repositories

Located in `src/repositories/`: Intended for data access logic.

### Plugins

- **Vuetify**: Material Design component framework.
- **i18n**: Internationalization plugin with locale files (`en.ts`, `fr.ts`, `es.ts`).
- **Webfontloader**: Loads web fonts (e.g., Roboto).

### Utils

- **data_io.ts**: Utility functions for data input/output.

### Configuration

Located in `src/config.ts`:

Defines configuration settings such as backend URL and signup enablement.
Backend url should be updated in `.env`.

### API

Located in `src/api/api.ts`:

Provides functions for making HTTP requests to the backend, including GET, POST, PUT, PATCH, and DELETE methods.

### Assets

- **Logo**: Contains logo files that should be replaced with the client ones.
- **Styles**: Contains CSS files (`variables.css` and `main.css`).

## Libraries

### Dependencies

- **@mdi/font**: Material Design Icons font.
- **ajv**: JSON Schema Validator.
- **apexcharts**: Modern charting library that helps developers to create beautiful and interactive visualizations for web pages.
- **exceljs**: Excel file parser and builder.
- **jsonschema**: JSON Schema validation.
- **mango-vue**: A Vue.js component library.
- **pinia**: Store for managing application state.
- **prettier**: Code formatter.
- **read-excel-file**: Read Excel files in browser.
- **vite-plugin-vuetify**: Vite plugin for Vuetify.
- **vue**: The progressive JavaScript framework.
- **vue-i18n**: Internationalization plugin for Vue.js.
- **vue-router**: The official router for Vue.js.
- **vue3-apexcharts**: Vue 3 component for ApexCharts.
- **vuetify**: Material Design component framework for Vue.js.
- **webfontloader**: Asynchronously load web fonts.

## Getting Started

To get started with this template, follow these steps:

1. **Copy the Repository Contents**: Manually copy the contents of this repository to your new project directory.

2. **Install Dependencies**: Navigate to your project directory and install the dependencies:

```bash
cd your-project-directory
npm install
```

3. **Run the Development Server**: Start the development server:

```bash
npm run dev
```

4. **Build the Project for Production**: Build the project for production:

```bash
npm run build
```
