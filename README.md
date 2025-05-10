# Remindu

<img width="1301" alt="Screen Shot 2023-08-05 at 8 55 06 PM" src="https://github.com/v-eraw/remindu/assets/23413257/fadbb3eb-e684-4a41-acfd-f7c24c856afe">

## Project Overview

Remindu is a Next.js application that helps users manage their tasks and calendar events.

## Project Structure

```
remindu/
├── actions/         # Redux actions
├── components/      # React components
├── pages/          # Next.js pages and API routes
├── reducers/       # Redux reducers
├── styles/         # CSS and styling files
├── utils/          # Utility functions and services
├── public/         # Static assets
└── docs/           # Project documentation
    ├── tasks/      # Individual task documentation
    └── structure.md # Project structure documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Cloud Platform account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/remindu.git
cd remindu
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up Google Calendar integration:

   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google Calendar API for your project
   - Go to the Credentials page
   - Create an OAuth 2.0 Client ID
   - Download the credentials and save them as `credentials.json` in your project root directory

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

## Current Tasks and Next Steps

### Immediate Tasks

1. [ ] Set up Google Calendar authentication

   - [ ] Create Google Cloud project
   - [ ] Enable Calendar API
   - [ ] Generate credentials
   - [ ] Test authentication flow

2. [ ] Implement basic calendar features

   - [ ] View calendar events
   - [ ] Create new events
   - [ ] Edit existing events
   - [ ] Delete events

3. [ ] Set up AI Journal Integration

   - [ ] Set up OpenAI API integration
   - [ ] Create database schema for notes and goals
   - [ ] Implement AI chat interface
   - [ ] Create journal dashboard

4. [ ] Design and implement UI
   - [ ] Create calendar view component
   - [ ] Design event creation form
   - [ ] Implement event editing interface
   - [ ] Add responsive styling
   - [ ] Create journal interface
   - [ ] Design goals management UI

### Future Tasks

- [ ] Add task management features
- [ ] Implement reminders and notifications
- [ ] Add user authentication
- [ ] Create dashboard view
- [ ] Add data persistence
- [ ] Implement advanced AI features
  - [ ] Pattern recognition in journal entries
  - [ ] Goal progress analysis
  - [ ] Smart event suggestions
  - [ ] Habit tracking

## Project Organization

### Documentation Structure

- `docs/structure.md`: Contains the complete project structure, architecture decisions, and technical documentation
- `docs/tasks/`: Contains individual markdown files for each major task or feature
  - Example: `docs/tasks/calendar-integration.md`
  - Example: `docs/tasks/user-authentication.md`

### Task Documentation Format

Each task document should include:

1. Task Overview
2. Technical Requirements
3. Implementation Steps
4. Testing Requirements
5. Dependencies
6. Notes and Considerations

## Development Guidelines

### Code Organization

- Keep components small and focused
- Use TypeScript for type safety
- Follow Next.js best practices
- Maintain consistent file naming conventions

### Git Workflow

- Create feature branches for new tasks
- Use meaningful commit messages
- Keep PRs focused and manageable
- Review code before merging

### Testing

- Write unit tests for utilities
- Add integration tests for API routes
- Test components with React Testing Library

## Security Notes

- Never commit `credentials.json` or `token.json` to version control
- Keep API keys and secrets in environment variables
- Follow security best practices for authentication

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review task-specific documentation in `docs/tasks/`
- Refer to `docs/structure.md` for project architecture

## License

[Add your license here]
