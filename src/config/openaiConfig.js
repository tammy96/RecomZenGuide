import OpenAI from "openai";

 export const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
  });