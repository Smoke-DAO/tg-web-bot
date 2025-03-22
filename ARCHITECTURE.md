# Telegram Web App Architecture

## Overview
The application follows a layered architecture pattern with MobX for state management. This architecture provides a clean separation of concerns and a centralized state management system.

## Key Components

### 1. Services Layer
Located in `src/services/`
- **API Service**: Handles all communication with the backend
  - Manages authentication headers
  - Provides methods for various API endpoints:
    - `userApi.fetchProfile()`: Get user profile data
    - `puffsApi.createPuff()`: Create new smoke session
  - Centralizes error handling for API requests
  - Uses Telegram WebApp data for authentication

### 2. Store Layer 
Located in `src/stores/`
- **RootStore**: The main store that contains all sub-stores
- **UserStore**: Manages user-related state and actions
  - Stores user profile data
  - Handles authentication state
  - Provides methods for user-related actions

### 3. UI Layer
Located in `src/screens/` and `src/components/`
- **Screen Components**: Page-level components
- **UI Components**: Reusable UI elements
- Components connect to stores using the `useStores` hook

## Data Flow

1. **App Initialization**
   - When the app starts, it immediately attempts to load the user profile
   - Telegram WebApp data is used for authentication

2. **API Communication**
   - All API requests go through the services layer
   - Telegram init data is attached to requests for authentication
   - API endpoints:
     - GET /v2/users/{id}: Fetch user profile
     - POST /v2/puffs: Create new smoke session, returns QR code data

3. **State Management**
   - User data is stored in the UserStore
   - Components observe store changes using MobX
   - Profile data includes:
     - User ID (used as Smoke ID)
     - Token balance ($moken)
     - Other profile stats

4. **UI Updates**
   - Components render based on store state
   - User actions trigger store methods, which may call API services
   - Example flows:
     - Profile view: Display user stats from UserStore
     - Smoke Session: Create puff -> Show QR -> Share link

## Authentication Flow
Authentication happens automatically using the Telegram WebApp data:
1. App extracts user data from `window.Telegram.WebApp.initData`
2. This data is sent with API requests in the "telegram-init-data" header
3. Backend validates the data and identifies the user

## State Management With MobX
- Stores are created as classes with observable properties
- Components are wrapped with `observer` HOC to react to store changes
- Actions modify state through methods defined in stores
- Asynchronous operations use `runInAction` to update state after completion
