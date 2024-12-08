import { GoogleGenerativeAI } from '@google/generative-ai';

//Create instance of google generative  ai.
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

export class Assistant {
    #chat; //# is used to make this variable private so not anyone else can use this.
    constructor(model =  "gemini-1.5-flash") {
    //name of gemini model
    const gemini = googleai.getGenerativeModel({ model })
    this.#chat = gemini.startChat({ history: [] })        
    }
    async chat(content) {
        try {
            const result = await chat.sendMessage(content);
        } catch (error) {
            throw error;
        }
    }
}