# Stunning Technical Challenge

A full-stack web application built with **Next.js**, **NestJS**, and **MongoDB Atlas**. Users can submit a website idea, generate three sections (Hero, About, Contact), and store them in MongoDB Atlas. The app demonstrates modern full-stack development with type safety, error handling, and a clean UI.

---

## Project Structure

- **frontend/**: Next.js app with a form (`IdeaForm.tsx`) for submitting website ideas and a preview (`SectionsPreview.tsx`) for displaying generated sections.
- **backend/**: NestJS API that generates dummy sections and stores them in MongoDB Atlas using Mongoose.
- **.gitignore**: Excludes `node_modules`, `.env`, and build outputs.
- **README.md**: Project documentation and setup instructions.

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) account
- [NestJS CLI](https://docs.nestjs.com/cli/overview):  
  ```sh
  npm install -g @nestjs/cli
  ```

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in `backend/` with:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@stunningcluster.wxd3j0m.mongodb.net/stunning?retryWrites=true&w=majority
   ```
   Replace `<username>` and `<password>` with your MongoDB Atlas credentials.
4. Start the backend server:
   ```sh
   npm run start:dev
   ```
   The API runs at [http://localhost:3000](http://localhost:3000).

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
   The app runs at [http://localhost:3001](http://localhost:3001).

---

## Usage

1. Open [http://localhost:3001](http://localhost:3001) in your browser.
2. Enter a website idea (e.g., "Landing page for bakery") in the form.
3. Click **Generate Sections** to create and display three sections: Hero, About, and Contact.
4. The app includes loading states and error handling for empty inputs or API failures.

---

## Technologies Used

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Axios
- **Backend**: NestJS, MongoDB Atlas, Mongoose

---

## Key Decisions

- Chose MongoDB Atlas for easy setup and scalability.
- Used a shared `Section` interface for type safety across frontend components.
- Stored `websiteIdea` in each section for filtering in MongoDB.

---

## Challenges Faced

- Fixed `.env` loading in NestJS by specifying `path.resolve` in `main.ts`.
- Resolved MongoDB authentication errors by updating credentials in `.env`.
- Handled TypeScript errors (e.g., missing `Section` exports) by creating a shared types file.

---

## Future Improvements

- Add user authentication for secure access.
- Enhance frontend UI with animations and responsive layouts.
- Implement pagination for large section lists.

---

## Testing



### Frontend Test

- Open [http://localhost:3001](http://localhost:3001), submit a website idea, and verify that the sections render.

---

## Notes

- Built using [GitHub Copilot](https://github.com/features/copilot) for code generation and debugging, which assisted in resolving issues like `.env` loading and MongoDB Atlas authentication errors.

---

## License

MIT
