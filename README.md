# e-Form Bank Jakarta

Electronic form application for Bank Jakarta transactions.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd eform

# Install dependencies
npm install
```

### Run on Local

```bash
# Start development server
npm start

# Open [http://localhost:3000](http://localhost:3000) to view it in your browser
```

The page will reload when you make changes. You may also see any lint errors in the console.

## 📝 Available Scripts

### `npm start`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in the interactive watch mode.

## 🔧 Code Quality & Linting

### ESLint Scripts

```bash
# Check code quality
npm run lint

# Auto-fix ESLint issues
npm run lint:fix
```

### Prettier Scripts

```bash
# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

### Pre-commit Hooks
- Husky and lint-staged are configured
- Auto lint and format staged files before commit
- Ensures code consistency across the project

## 📁 Project Structure

```
src/
├── components/
│   ├── eform/
│   │   └── setoranTunai/
│   │       ├── DataPenerima.js
│   │       ├── DetailSetoran.js
│   │       └── SetoranTunaiPage.js
│   ├── Header.js
│   ├── ProgressSteps.js
│   └── TransactionCard.js
├── constants/
│   └── labels.js
└── App.js
```

## 🛠 Technologies Used

- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 📋 Code Standards

This project follows strict code standards:

- **ESLint**: Enforces code quality and best practices
- **Prettier**: Consistent code formatting
- **Pre-commit hooks**: Automated quality checks
- **Constants**: Centralized labels and configuration

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy the build folder to your hosting service
```