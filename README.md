# Samarthanam Event Admin Dashboard

A comprehensive event management dashboard designed for event organizers at Samarthanam. This application enables the creation, management, and tracking of events, volunteers, and tasks in one centralized platform.

## Project Overview

The Samarthanam Event Admin Dashboard is a web application built to help event organizers efficiently manage events, assign tasks to volunteers, and track event progress. It provides a user-friendly interface for handling all aspects of event management from creation to completion.

## Key Features

- **Event Management**: Create, edit, and manage events with detailed information including location, dates, and volunteer requirements
- **Volunteer Management**: Track volunteer registrations, skills, and participation
- **Task Assignment**: Create tasks, assign them to volunteers, and monitor progress
- **Dashboard Analytics**: View insights and statistics about events and volunteer participation
- **Chat Communication**: In-event messaging system for communication with volunteers

## Technologies Used

- **Frontend**:
  - Next.js 14.1.0 (React 18)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - Lucide Icons
  - React Hook Form with Zod validation
  - Recharts for data visualization

- **Backend**:
  - Supabase for authentication and database
  - Next.js API routes
  - PostgreSQL database

- **Authentication**:
  - NextAuth.js / Auth.js
  - Supabase authentication adapter

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd event-admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

The application uses Supabase with a PostgreSQL database. The schema.sql file contains all the necessary table definitions and relationships. Import this schema into your Supabase project to set up the database structure.

## Usage Instructions

1. **Login/Authentication**
   - Use your event organizer credentials to log in
   - First-time users need to complete the registration process

2. **Dashboard Navigation**
   - The main dashboard displays summary statistics and upcoming events
   - Use the sidebar to navigate between different sections

3. **Managing Events**
   - Create new events with the "Create Event" button
   - View and edit existing events
   - Track event status (draft, published, archived, completed)

4. **Volunteer Management**
   - View registered volunteers
   - Track volunteer skills and availability
   - Assign volunteers to specific tasks

5. **Task Assignment**
   - Create tasks for events
   - Assign skills required for each task
   - Track task completion status

## Contribution Guidelines

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

Please ensure your code follows the existing style conventions and includes appropriate tests.

## License

This project is created by team Samarthanam Saarthi VIT Pune.

## Acknowledgements

- Samarthanam Trust for the Disabled
- All contributors and developers who have worked on this project
