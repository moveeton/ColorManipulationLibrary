// color-manipulation.js

class ColorManipulation {
    static hexToRgb(hex) {
      // Remove hash if it's present
      hex = hex.replace('#', '');
      
      // Convert hex to RGB
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    static rgbToHex(r, g, b) {
      // Convert RGB to hex
      const hexR = r.toString(16).padStart(2, '0');
      const hexG = g.toString(16).padStart(2, '0');
      const hexB = b.toString(16).padStart(2, '0');
  
      return `#${hexR}${hexG}${hexB}`;
    }
  
    static darkenColor(hex, percentage) {
      // Convert hex to RGB
      let { r, g, b } = this.hexToRgbObject(hex);
  
      // Darken RGB values
      r = Math.max(0, Math.round(r * (100 - percentage) / 100));
      g = Math.max(0, Math.round(g * (100 - percentage) / 100));
      b = Math.max(0, Math.round(b * (100 - percentage) / 100));
  
      // Convert RGB back to hex
      return this.rgbToHex(r, g, b);
    }
  
    static lightenColor(hex, percentage) {
      // Convert hex to RGB
      let { r, g, b } = this.hexToRgbObject(hex);
  
      // Lighten RGB values
      r = Math.min(255, Math.round(r + (255 - r) * percentage / 100));
      g = Math.min(255, Math.round(g + (255 - g) * percentage / 100));
      b = Math.min(255, Math.round(b + (255 - b) * percentage / 100));
  
      // Convert RGB back to hex
      return this.rgbToHex(r, g, b);
    }
  
    static hexToRgbObject(hex) {
      // Remove hash if it's present
      hex = hex.replace('#', '');
      
      // Convert hex to RGB
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return { r, g, b };
    }
  }
  
  module.exports = ColorManipulation;
  