const app = require('express')();
const crypto = require('crypto');

// configuration constants
const githubEndpointsToDir = {
    '/trirpi/endpoint1': '/home/trirpi/scribble'
}
const githubWebhookSecret = process.env.GITHUB_WEBHOOK_SECRET || 'secret';
const port = process.env.PORT || 7000;


// setup root endpoint for testing
app.get('/', (req, res ) => 
    res.json({ message: 'Endpoint working!' }) 
);


// create endpoints for each webhook
for (const [key, value] of Object.entries(githubEndpointsToDir)) {

    app.get(key, (req, res ) => {
        if (verifySignature(githubWebhookSecret, req.body, req.header('X-Hub-Signature'))) {
            console.log(value + "called.");
            res.status(200).json({'success': true});
        } else {
            res.status(500);
        }
    });

}

app.listen(port, () => console.log(`[*] Info: App listening on http://localhost:${port}`) );

function verifySignature(secret, data, requestSignature) {
    const computedSignature = 'sha1=' + crypto.createHmac('sha1', secret).update(data).digest('hex');

    return crypto.timingSafeEqual(Buffer.from(computedSignature, 'utf8'), Buffer.from(requestSignature, 'utf8'));
}

