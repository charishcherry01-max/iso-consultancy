const { getAverageColor } = require('fast-average-color-node');

async function getColors() {
    try {
        const color = await getAverageColor('c:/Users/shipa/ISO/frontend/public/logo-new.jpg');
        console.log("Average color hex:", color.hex);
    } catch (err) {
        console.error(err);
    }
}
getColors();
