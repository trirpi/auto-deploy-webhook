const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Endpoint working!' }) 
);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`[*] Info: App listening on http://localhost:${port}`) );
