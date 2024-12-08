import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  //if you want to use openai api key, then try to use from backend side because sometime when you make
  //request, someone can get you api through request. so use in backend and call with the help of
  //frontend. we are doing this in frontend.
  dangerouslyAllowBrowser: true,
});

export class Assistant {
  #model;

  constructor(model = "gpt-4o-mini") {
    this.#model = model;
  }
  async chat(content, history) {
    try {
      const result = await openai.chat.completions.create({
        model: this.#model,
        messages: [...history, { content, role: "user" }],
      });
      return result.choices[0].message;
    } catch (error) {
      throw error;
    }
  }
}
