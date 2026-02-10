import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  officialEmail: process.env.OFFICIAL_EMAIL || 'anubhav0290.be23@chitkara.edu.in',
  openaiApiKey: process.env.OPENAI_API_KEY || ''
};

export default config;