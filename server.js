const express = require('express');
const bodyParser = require('body-parser');
const { Image } = require('canvas');
const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

// Load the MobileNet model
let model;
(async function loadModel() {
    model = await mobilenet.load();
})();

app.post('/analyze-water-content', async (req, res) => {
    try {
        const { image } = req.body;
        const base64Data = image.replace(/^data:image\/png;base64,/, "");
        const img = new Image();
        img.src = Buffer.from(base64Data, 'base64');
        
        const tfImg = tf.browser.fromPixels(img);
        const predictions = await model.classify(tfImg);
        
        // Dummy example of determining water content
        let waterContent = "Unknown";
        for (const prediction of predictions) {
            if (prediction.className.includes('water')) {
                waterContent = "75%"; // Simplified logic for example
                break;
            }
        }

        res.json({ waterContent });
    } catch (error) {
        res.status(500).json({ error: 'Error processing image' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
