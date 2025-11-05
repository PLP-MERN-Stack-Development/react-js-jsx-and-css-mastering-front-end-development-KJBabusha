# React.js and Tailwind CSS Assignment

This project demonstrates a modern React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration. The application features a responsive design, theme customization, and task management functionality.

## Project Features

1. **Component Architecture**
   - Modular and reusable components
   - Layout system with Navbar and Footer
   - Custom Button and Card components
   - Task management interface

2. **State Management**
   - React Context for theme management
   - Custom hooks for local storage
   - Task state management

3. **Features Implemented**
   - Dark/Light theme switching
   - Responsive navigation
   - Task creation and management
   - API integration
   - Local storage persistence

## Project Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Card.jsx        # Reusable card component
│   ├── Navbar.jsx      # Navigation component
│   ├── TaskManager.jsx # Task management component
│   └── Layout/         # Layout components
│       ├── Footer.jsx  # Footer component
│       └── Layout.jsx  # Main layout wrapper
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page
│   └── ApiPage.jsx     # API integration page
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js  # Local storage hook
├── context/            # React context providers
│   └── ThemeContext.jsx    # Theme management
└── App.jsx            # Main application component
```

## Implemented Components

1. **Layout Components**
   - `Layout.jsx`: Main layout wrapper with consistent structure
   - `Navbar.jsx`: Responsive navigation with theme toggle
   - `Footer.jsx`: Site footer with links and information

2. **UI Components**
   - `Button.jsx`: Reusable button component with variants
   - `Card.jsx`: Flexible card component for content display
   - `TaskManager.jsx`: Task management interface

3. **Feature Components**
   - Theme switching functionality
   - Local storage persistence
   - API integration in ApiPage
   - Responsive design implementation

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Future Improvements

1. **Authentication & Authorization**
   - Implement user authentication
   - Add role-based access control
   - Secure API endpoints

2. **Enhanced Features**
   - Add task categories and filtering
   - Implement drag-and-drop functionality
   - Add task due dates and reminders
   - Implement real-time updates

3. **Performance Optimization**
   - Implement code splitting
   - Add service worker for offline support
   - Optimize bundle size
   - Add loading states and skeletons

4. **Testing**
   - Add unit tests for components
   - Implement integration testing
   - Add end-to-end testing
   - Set up continuous integration

5. **Documentation**
   - Add JSDoc comments
   - Create component storybook
   - Add API documentation
   - Include deployment instructions

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 