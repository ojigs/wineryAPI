const express = require("express");
const app = express();
const cors = require("cors");
const { response } = require("express");
const PORT = 3000;
const wines = require("./wines");

app.use(cors());
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/wines", (request, response) => {
  response.json(wines);
});

app.get("/api/wines/:name", (request, response) => {
  const wine = request.params.name.toLowerCase();
  if (wines[wine]) {
    response.json(wines[wine]);
  } else {
    response.json({ error: "Oops, wine not available. Check back later!" });
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}. Betta go catch it!`);
});
