const getColors = require('get-image-colors');

async function extract() {
    try {
        const colors = await getColors('c:/Users/shipa/ISO/frontend/public/logo-new.jpg');
        colors.forEach(color => {
            console.log(color.hex());
        });
    } catch (e) {
        console.error(e);
    }
}
extract();
