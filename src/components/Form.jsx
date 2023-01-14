import React, { useState } from 'react'
import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

function Form() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [enable, setEnable] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/chat", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      {/* <h1>Ask me anything</h1>
      <textarea name="" id="" cols="40" rows="10" onChange={(e) => setQuestion(e.target.value)}></textarea>
      <button onClick={handleSubmit}>Answer please!</button>
      {
        enable ? <h2>Loading...</h2> : null
      }
      {
        <h2>{answer}</h2>
      } */}
    </div>
  )
}

export default Form