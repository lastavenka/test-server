const app = require("./src");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Started on 0.0.0.0:${PORT}`));