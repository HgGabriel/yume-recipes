# Yume Recipes 🍱

A modern Japanese recipe website built with React + Vite and TypeScript, offering an immersive culinary experience for lovers of Japanese cuisine.

## 🚀 Features

### Core Features
- 🍣 Extensive collection of authentic Japanese recipes
- 🔍 Advanced search functionality by:
  - Ingredients
  - Categories (Seasonal, Dietary, etc.)
  - Preparation time
- ❤️ Favorite system with local storage persistence
- ⭐ 5-star rating system with visual indicators
- 🕒 Step-by-step cooking instructions with interactive accordion

### User Experience
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with appealing food photography
- 🔄 Smooth animations and transitions
- ♿ Accessibility-focused design

### Content Organization
- 🔥 Trending recipes section
- 🗂 Category-based browsing
- 🏷 Tag system for easy filtering
- 📌 Featured/special collections

## 🛠 Tech Stack

### Frontend
- ⚛️ React 18 (Functional Components + Hooks)
- 🟦 TypeScript for type safety
- ⚡ Vite for ultra-fast development
- 🎨 SCSS Modules for scoped styling
- 🛣 React Router DOM v6 for navigation
- 🎚 Swiper.js for interactive carousels
- 📦 Local Storage for persistent favorites

### Development Tools
- ESLint + Prettier for code quality
- Git for version control
- Vercel for project hosting

## 📱 Pages & Routes

| Route | Description | Key Components |
|-------|-------------|----------------|
| `/` | Homepage | HomeBanner, TrendingSection, CategoriesSection |
| `/recipes` | All recipes | RecipeGrid, SearchBar, Filters |
| `/recipes/:search` | Filtered recipes | RecipeGrid, ActiveFilters |
| `/recipe/:id` | Recipe details | RecipeDetails, IngredientsList, StepAccordion |
| `/favorites` | Saved recipes | FavoritesList, EmptyState |
| `/categories/:category` | Category view | CategoryHeader, RecipeGrid |


## 🏃‍♂️ Getting Started
```bash
### Prerequisites
- Node.js v16+
- npm v8+

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/yume-recipes.git

# Navigate to project directory
cd yume-recipes

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev
```

### Building for Production
```bash
# Create production build
npm run build
```

## 🌟 Key Components

| Component | Description | Features |
|-----------|-------------|----------|
| `HomeBanner` | Hero carousel | Auto-rotation, pause on interaction |
| `TrendingSection` | Popular recipes | visual indicators |
| `RecipeCard` | Recipe preview | Hover effects, quick view |
| `StepAccordion` | Cooking instructions | Multi-step expand, smooth animations |

## 🎯 Roadmap & Future Improvements

### Near-term
- [ ] User authentication system
- [ ] Recipe submission form
- [ ] Enhanced search with filters
- [ ] Meal planner feature

### Long-term
- [ ] User comments and reviews
- [ ] Shopping list generator
- [ ] Cooking timer integration
- [ ] Social sharing functionality
- [ ] Video tutorial support
- [ ] Seasonal content rotation
