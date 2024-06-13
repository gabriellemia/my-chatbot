# my-chatbot

Create a basic chatbot using the openAI api.  Ask the bot anything and get an AI response back.  

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


