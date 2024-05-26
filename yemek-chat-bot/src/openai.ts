import dotenv from 'dotenv';
dotenv.config();

console.log('Loaded API Key:', process.env.OPENAI_API_KEY); 

export const openai_key = {
  apikey: process.env.OPENAI_API_KEY,
};
