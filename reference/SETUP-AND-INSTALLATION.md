# Setup and Installation

## Prerequisites

* [ ] Visual Studio Code - [https://code.visualstudio.com/Download]()
* [ ] Node.js (v18 or later) [https://nodejs.org/en/download]()
* [ ] Git - [https://git-scm.com/install/]()
* [ ] Angular CLI (`npm install -g @angular/cli`)
* [ ] Clone Project Repository

## Installation

1. Clone the repository or extract the project.
2. Install dependencies:
   ```bash
   npm install
   ```

## Verify Installation

Check node.js version:

```bash
node -v
```

Check npm version:

```bash
npm -v
```

Check Angular version:

```bash
ng --version
```

## Running the Application

Start the development server:

```bash
ng serve
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
