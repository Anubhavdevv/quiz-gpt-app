const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.post("/chat", async (req, res) => {
    const {prompt} = req.body;
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
    });
    res.send(completion.data.choices[0].text);
});
const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});