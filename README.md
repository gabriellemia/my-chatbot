# my-chatbot

Create a basic chatbot using the openAI api.  Ask the bot anything and get an AI response back.  

### Why?

During our Data and AI experience week at the School of Code, I did a bit of research into using LLM's and AI chatbots.  I wanted to see if I could create my own simple one.  Once I understand the way they are built I would like to experiment with integrating them into bigger projects eventually.

### Model

gpt-3.5-turbo

### Route set up

```yaml
export async function POST(req: Request) {
  const { messages } = await req.json();

  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
}
```

https://github.com/gabriellemia/my-chatbot/assets/78322726/5e711d1d-79f2-4c4e-a86d-72ad26219400



## Tech stack

Next.js

vercel SDK

OpenAI api


