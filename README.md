# Color Manipulation Library

The Color Manipulation Library is a lightweight JavaScript package for performing various color manipulation operations.

## Installation

You can install the Color Manipulation Library package via npm:

```bash
npm install color-manipulation
```

## Usage

```javascript
const ColorManipulation = require('color-manipulation');

// Convert hex color to RGB
const rgbColor = ColorManipulation.hexToRgb('#ff0000');
console.log(rgbColor); // Output: rgb(255, 0, 0)

// Convert RGB color to hex
const hexColor = ColorManipulation.rgbToHex(255, 0, 0);
console.log(hexColor); // Output: #ff0000

// Darken a color
const darkenedColor = ColorManipulation.darkenColor('#ff0000', 20);
console.log(darkenedColor); // Output: #990000

// Lighten a color
const lightenedColor = ColorManipulation.lightenColor('#0000ff', 20);
console.log(lightenedColor); // Output: #4d4dff
```

## API

### `hexToRgb(hex: string): string`

Converts a hexadecimal color value to its RGB equivalent.

- `hex`: The hexadecimal color value.

### `rgbToHex(r: number, g: number, b: number): string`

Converts RGB color values to a hexadecimal color string.

- `r`, `g`, `b`: The red, green, and blue components of the color.

### `darkenColor(hex: string, percentage: number): string`

Darkens a color by a specified percentage.

- `hex`: The hexadecimal color value.
- `percentage`: The percentage by which to darken the color.

### `lightenColor(hex: string, percentage: number): string`

Lightens a color by a specified percentage.

- `hex`: The hexadecimal color value.
- `percentage`: The percentage by which to lighten the color.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
