# EPS - TOT (Angular) Setup Guide

## Prerequisites

- Node.js (v18 or later) [https://nodejs.org/en/download]()
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository or extract the project.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`.

## Running Tests

Run unit tests:

```bash
npm test
```

## Project Structure

- `src/app/core`: Core services, guards, and interceptors (Sessions 4 & 5).
- `src/app/courses`: Lazy loaded module (Session 4).
- `src/app/registration`: Reactive forms demo (Session 6).
- `src/app/login`: Simple login page.
