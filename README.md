# C8-Tasklist-Farsi

![Logo](public/c8tf-logo.png)

This project is a custom implementation of a task list application for Camunda 8, with support for the Persian (Farsi) language. It provides a web interface for managing tasks and processes, integrating with Camunda 8's Zeebe engine.

## Project Structure

The project consists of several components:

- `taskapp-web`: React frontend for the task application
- `zeebe-backend`: Node.js backend for interfacing with Zeebe
- `processDefinitionsServer`: Server for managing process definitions
- `tasksServer`: Server for handling tasks
- `keycloak-proxy`: Proxy for Keycloak authentication

## Features

- View and manage tasks
- Start and interact with process instances
- View process definitions
- Persian (Farsi) language support
- Integration with Camunda 8 (Zeebe)
- Authentication using Keycloak

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/okaeiz/C8-Tasklist-Farsi.git
```

3. Install dependencies for each component:

```bash
cd taskapp-web && npm install
cd ../zeebe-backend && npm install
cd ../processDefinitionsServer && npm install
cd ../tasksServer && npm install
cd ../keycloak-proxy && npm install
```

5. Set up environment variables (refer to `.env.example` files in each component)

6. Start the services:

- Run each service in a separate terminal, or
- Use a tool like `concurrently` to run multiple services

## Usage

The project is still in development. You may struggle firing it up. This status will be updated.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add license information]

## Acknowledgements

- Camunda 8
- Zeebe
- React
- Node.js
- Keycloak
