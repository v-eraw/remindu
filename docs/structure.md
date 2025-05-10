# Project Structure Documentation

## Overview

This document provides a detailed overview of the Remindu project structure, architecture decisions, and technical documentation.

## Directory Structure

### `/actions`

- Contains Redux action creators
- Each file should correspond to a specific feature or domain
- Follow the pattern: `[feature]Actions.js`

### `/components`

- React components organized by feature
- Each component should be in its own directory with:
  - Component file (`.tsx`)
  - Styles (`.module.css` or `.scss`)
  - Tests (`.test.tsx`)
  - Types (`.types.ts`)

### `/pages`

- Next.js pages and API routes
- Follow Next.js file-based routing
- API routes should be in `/pages/api`
- Each API route should handle one specific endpoint

### Main App Entry Points

- **`pages/_app.tsx`**: Custom App component that wraps all pages. Used for global providers (e.g., Redux), global styles, and layout. This is where the Redux `<Provider>` is set up to make the store available throughout the app.
- **`pages/index.tsx`**: The main landing (home) page of the application. Renders the primary UI, including the calendar and todo list components, and applies dynamic background styles based on the time of day.

### Authentication & Landing Page Flow

- **Unauthenticated users**: See a welcoming landing page with a prominent "Sign in with Google" button. No access to main app features until authenticated.
- **Authenticated users**: See the main dashboard (calendar, todos, journal, etc.), with their Google profile info and a "Sign out" option.
- **Sign out**: Users can sign out, which returns them to the landing page.
- **Todos Storage**: For MVP, todos can be stored in localStorage or Redux state. For persistence across devices, use a backend database (e.g., MongoDB/PostgreSQL) linked to the user's Google ID.

### `/reducers`

- Redux reducers
- Each reducer should correspond to a specific feature
- Follow the pattern: `[feature]Reducer.js`

### `/styles`

- Global styles
- Theme configuration
- CSS variables and mixins

### `/utils`

- Utility functions
- Service integrations (e.g., Google Calendar, OpenAI)
- Helper functions
- Constants

### `/public`

- Static assets
- Images
- Fonts
- Other static files

### `/docs`

- Project documentation
- Task documentation
- Architecture decisions
- Technical specifications

### `/models`

- Database models and schemas
- Type definitions
- Data validation

### `/services`

- External service integrations
- API clients
- Authentication services
- AI service handlers

## Architecture Decisions

### State Management

- Using Redux for global state
- Local state for component-specific data
- Context API for theme and authentication

### API Integration

- RESTful API endpoints in `/pages/api`
- Google Calendar integration using OAuth 2.0
- OpenAI integration for AI features
- Environment variables for API keys

### Authentication

- Google OAuth for calendar access
- JWT for user authentication
- Secure token storage

### Database

- MongoDB/PostgreSQL for data persistence
- User profiles and preferences
- Journal entries and notes
- Goals and progress tracking

### AI Integration

- OpenAI GPT-4 for natural language processing
- Context-aware responses
- Conversation history management
- Prompt engineering system

### Styling

- CSS Modules for component-specific styles
- Global styles in `/styles`
- Responsive design principles

## Development Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Development branch
- Feature branches: `feature/[feature-name]`
- Bug fixes: `fix/[bug-description]`

### Code Review Process

1. Create feature branch
2. Implement changes
3. Write tests
4. Create pull request
5. Code review
6. Merge to develop
7. Deploy to staging
8. Merge to main

### Testing Strategy

- Unit tests for utilities
- Integration tests for API routes
- Component tests with React Testing Library
- E2E tests with Cypress (future)

## Deployment

### Environments

- Development: Local
- Staging: Vercel Preview
- Production: Vercel

### CI/CD

- GitHub Actions for CI
- Vercel for CD
- Automated testing
- Environment variable management

## Performance Considerations

- Code splitting
- Image optimization
- API route caching
- Static generation where possible
- AI response optimization
- Database query optimization

## Security Measures

- Environment variables for secrets
- API route protection
- Input validation
- XSS prevention
- CSRF protection
- Data encryption
- Privacy controls

## Monitoring and Logging

- Error tracking
- Performance monitoring
- User analytics
- API usage tracking
- AI interaction logging
- Database performance monitoring
