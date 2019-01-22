const app = require("./src");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Started on 0.0.0.0:${PORT}`));