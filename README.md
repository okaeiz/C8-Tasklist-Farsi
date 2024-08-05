# C8-Tasklist-Farsi

![Logo](./public/c8tf-logo.png)
![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)
[![EN](https://img.shields.io/badge/lang-EN-blue.svg)](README.md)
[![FA](https://img.shields.io/badge/lang-FA-green.svg)](README.fa.md)

*Read this in other languages: [English](README.md), [فارسی](README.fa.md)*

C8-Tasklist-Farsi is a custom implementation of a task list application for Camunda 8, with support for Right-to-Left (RTL) languages, specifically Persian (Farsi). It provides a web interface for managing tasks and processes, integrating with Camunda 8's Zeebe engine.

**Disclaimer:** This project is not officially affiliated with or endorsed by Camunda. It is an independent, community-driven project designed to work with Camunda 8 components.

## Project Structure 🏗️

This project is structured as a monorepo containing the following components:

- `taskapp-web`: React frontend for the task application
- `zeebe-backend`: Node.js backend for interfacing with Zeebe
- `processes-server`: Server for managing process definitions
- `tasks-server`: Server for handling tasks
- `keycloak-proxy`: Proxy for Keycloak authentication

## Features ✨

- View and manage tasks
- Start and interact with process instances
- View process definitions
- Right-to-Left (RTL) and Persian (Farsi) language support
- Integration with Camunda 8 (Zeebe)
- Authentication using Keycloak

## Prerequisites 🔧

- Node.js (version specified in each package's Dockerfile)
- Docker and Docker Compose
- Camunda 8 Platform (==Self-Managed==)
- Keycloak Server (Installed along with a Camunda 8 Self-Managed deployment)

## Setup and Installation 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/okaeiz/C8-Tasklist-Farsi.git
   cd C8-Tasklist-Farsi
   ```

2. Create `.env` files:
   Create a `.env` file in each package directory (`packages/taskapp-web`, `packages/zeebe-backend`, etc.) and populate them with the necessary environment variables. Refer to `.env.example` files in each component for required variables.
   <br />
3. Build and start the services using Docker Compose:

```bash
docker-compose build
docker-compose up -d
```

This will build and start all services defined in the docker-compose.yml file.
<br /> 4. Access the application:
Once all services are up and running, you can access the web application at <http://localhost:3000> (or the port specified in your Docker Compose configuration).

## Development 💻

To work on individual packages:

1. Navigate to the package directory:

```bash
cd packages/taskapp-web
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Repeat these steps for other packages as needed.

## Usage 🏃

The project is currently in development. Users may encounter issues when attempting to run the application. This section will be updated as the project progresses.

## Contributing 💁‍♂️

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

### Important Notice for Business Use

This software is licensed under AGPL-3.0, which places significant restrictions on its use, modification, and distribution, especially in a business context. Key points to consider:

- If you modify this software, you must make your modifications available under the AGPL-3.0 license.
- If you distribute this software or a modified version, you must provide the complete source code to recipients.
- If you run a modified version of this software on a server and allow users to interact with it remotely over a network, you must also make the complete source code available to those users.

Before using this software in a business context, carefully review the full license terms and consider seeking legal advice to understand the implications for your specific use case.

## Acknowledgements 🤝

- Camunda 8
- React
- Node.js
- Keycloak

## Troubleshooting 🔎

If you encounter CORS issues or other connection problems, ensure that:
All necessary environment variables are correctly set in the .env files.
The Docker network is correctly configured in docker-compose.yml.
Keycloak is properly configured for your application.
For more detailed troubleshooting, please refer to the logs of individual services:

```bash
docker-compose logs [service-name]
```

## Contact

Since this project is currently in the early stages of development, you may (and will) encounter issues. For any queries or support, please open an issue in the GitHub repository.
