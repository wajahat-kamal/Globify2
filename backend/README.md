# Backend Setup Instructions

## Environment Variables Required

Create a `.env` file in the backend root directory with the following variables:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/wk-globify

# JWT Configuration
SECRET_KEY=your-super-secret-jwt-key-here

# Cloudinary Configuration (if using)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Installation

```bash
npm install
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout

## Database

Make sure MongoDB is running and accessible at the URI specified in MONGO_URI. 