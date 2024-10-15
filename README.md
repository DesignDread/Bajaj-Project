IEEE CIET Website
Welcome to the repository for the IEEE CIET Website, a comprehensive platform designed for IEEE members and prospective members at Chitkara Institute of Engineering and Technology (CIET). This website streamlines event management, communication, and membership engagement while promoting IEEE’s activities and providing learning resources.

Table of Contents
Introduction
Features
Project Goals
Tech Stack
Installation
Usage
Contributing
Issues
License
Contact
Introduction
The IEEE CIET Website is designed to provide a seamless user experience for both IEEE members and admins. The platform supports automated event management, blog submissions, learning resources, and a chatbot to handle user queries. It also serves as a knowledge hub for prospective members, making the process of joining IEEE easier through an interactive "Apply Now" process.

Features
The website includes the following key features:

Home Page:

Hero section with a "Join Now" button.
Display of upcoming events, sponsors, and benefits of joining IEEE.
About Page: Overview of the IEEE CIET chapter and its mission.

Events Page: List of past and upcoming events with event registration functionality.

Alumni Page: Profiles and success stories of IEEE alumni members.

Contact Page: Contact form and admin details.

Admin Dashboard: Admin panel to manage events, blog posts, and other website content.

Blog Submission: Allows users to submit blogs for approval by admins.

Event Notifications: Automated emails and push notifications for event-related updates.

Learning Resources: IEEE technical materials and resources.

Chatbot: AI chatbot for instant event queries and FAQs.

Photo/Video Gallery: Visual highlights of IEEE events.

Project Goals
Improve Communication: Provide a centralized platform to share news, upcoming events, and key information with members.
Automate Event Management: Streamline the event registration process with automated confirmation emails and reminders.
Increase Member Engagement: Facilitate interaction through blogs, FAQs, and a chatbot for instant queries.
Enhance Information Sharing: Offer resources such as learning materials and IEEE benefits.
Promote Membership Growth: Provide an easy "Apply Now" process and clear reasons to join IEEE CIET.
Tech Stack
The project uses the following technologies:

Frontend:
Next.js
React.js
TailwindCSS: For styling.
Three.js & GSAP: For animations and visual effects.
Backend:
Node.js with Express.js
TypeScript
Database:
MongoDB: For storing event, user, and blog data.
Additional Services:
Nodemailer or SendGrid: For sending email notifications.
Firebase Cloud Messaging (FCM): For push notifications.
Vercel: Hosting the frontend.
Render: Hosting the backend.
Custom Chatbot: For handling event-related and general queries.
Installation
To run this project locally, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (v14 or above)
MongoDB (locally or use a cloud database like MongoDB Atlas)
Git
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/Soham2395/IEEE-Website.git
Navigate into the project directory:

bash
Copy code
cd ieee-website
Install dependencies for the frontend and backend:

Frontend:
bash
Copy code
cd frontend
npm install
Backend:
bash
Copy code
cd backend
npm install
Set up environment variables:

Create .env files in both frontend and backend folders with the following variables:
Backend (.env):
bash
Copy code
MONGODB_URI=your-mongodb-uri
EMAIL_SERVICE_API_KEY=your-email-api-key
FCM_SERVER_KEY=your-fcm-server-key
Frontend (.env):
bash
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000
Run the backend server:

bash
Copy code
cd backend
npm start
Run the frontend development server:

bash
Copy code
cd frontend
npm run dev
Open your browser and navigate to http://localhost:3000.

Usage
Once installed, the following features will be accessible:

Home Page: Displays upcoming events, IEEE benefits, and a "Join Now" section.
Admin Dashboard: Admins can upload and manage content.
Event Registration: Users can register for events and receive confirmation emails.
Blog Submission: Users can submit blogs for approval.
Learning Resources: Access to IEEE technical resources.
Contributing
We welcome contributions from the community! To contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git commit -m "Description of the feature"
Push your branch:
bash
Copy code
git push origin feature-name
Submit a pull request.
Issues
If you find any bugs or issues, please check the Issues section of this repository and submit a new issue if needed. Contributions to resolve issues are highly encouraged!

Contact
For any questions or inquiries, please reach out to:

Soham Chakraborty (Technical Head) - sohamchakraborty18.edu@gmail.com
test