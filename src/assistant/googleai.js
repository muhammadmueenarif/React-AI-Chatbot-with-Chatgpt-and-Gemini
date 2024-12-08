import { GoogleGenerativeAI } from '@google/generative-ai';

//Create instance of google generative  ai.
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

// export class
export class Assistant {
    #chat; //# is used to make this variable private so not anyone else can use this.
    constructor(model =  "gemini-1.5-flash") {
    //name of gemini model
    const gemini = googleai.getGenerativeModel({ model })
    this.#chat = gemini.startChat({ history: [] })        
    }
    async chat(content) {
        try {
            const result = await this.#chat.sendMessage(content);
            return result.response.text();
        } catch (error) {
            throw error;
        }
    }

// *symbol means it is generator function. generator can also be used with yield statement. allow us to pass 
// and resume execution of function till we wait on some response. it allows to work with asynchronous code 
// and handle data sequence more efficiently. it should return us everytime we get response
    async *chatStream(content) {
        try {
            const result = await this.#chat.sendMessageStream(content)
            //use for loop to store result in chunks. 
            for await(const chunk of result.stream) {
            //    console.log(chunk.text);
            yield chunk.text();
            }
        } catch (error) {
            throw error;
        }
    }

}