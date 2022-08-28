const express = require('express');
const app = express();

const PORT = 4000

app.use(express.json());

app.get('/', (reg, res) => {
    res.send('hellooo')
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT} .`)
})