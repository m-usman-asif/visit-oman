const MAX_LIMIT = 3;
const MIN_LIMIT = -3;

let fontSizeProperties = ['--font-size-vo-heading', '--font-size-vo-subheading', '--font-size-vo-paragraph', '--vo-card-label', '--font-size-vo-button'];
let lineHeightProperties = ['--font-size-vo-subheading', '--line-height-vo-subheading', '--line-height-vo-pagi-heading', '--line-height-vo-paragraph', '--vo-card-label-line-height', '--line-height-vo-button'];
const allProperties = [...fontSizeProperties, ...lineHeightProperties];

let counter = 0;

export const increaseCSSProperties = () => {
    if (counter < MAX_LIMIT) {
        const root = document.documentElement;
        allProperties.forEach((property) => {
            const currentValue = getComputedStyle(root).getPropertyValue(property).trim();
            const numericValue = parseInt(currentValue, 10);
            root.style.setProperty(property, (numericValue + 1) + 'px');
        });
        counter++;
    } else {
    }
};

export const decreaseCSSProperties = () => {
    if (counter > MIN_LIMIT) {
        const root = document.documentElement;
        allProperties.forEach((property) => {
            const currentValue = getComputedStyle(root).getPropertyValue(property).trim();
            const numericValue = parseInt(currentValue, 10);
            root.style.setProperty(property, (numericValue - 1) + 'px');
        });
        counter--;
    } else {
    }
};

export const resetCSSProperties = () => {
    const root = document.documentElement;
    allProperties.forEach((property) => {
        root.style.removeProperty(property);
    });
    counter = 0;  // Reset the counter as well
};
