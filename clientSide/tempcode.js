import fs from 'fs';
export { default as Component1 } from './Component1';
export { default as Component2 } from './Component2';
export { default as Component3 } from './Component3';
// add more components as needed

const components = {};

fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js') {
        const componentName = file.split('.')[0];
        components[componentName] = require(`./${file}`).default;
    }
});

export default components;
