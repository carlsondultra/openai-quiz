## Getting Started
Get started by doing the following: 
```
git clone https://github.com/carlsondultra/openai-quiz.git
cd openai-quiz
npm install
```
Under the root directory, create a .env file, with the following inside of it:
```
DATABASE_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
OPENAI_API_KEY=
API_URL=
```
Finally, to run the development server:
```
npm run dev
```
Afterwards, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.