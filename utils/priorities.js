const priorities = {
  none: {
    emoji: '⚪️',
    title: 'None',
    hexColor: '#ffffff',
    colorText: 'white',
    order: 0,
  },
  red: {
    emoji: '❤️',
    title: 'Red',
    hexColor: '#ff8b8b', // Muted pastel red
    colorText: 'red',
    order: 1,
  },
  orange: {
    emoji: '🧡',
    title: 'Orange',
    hexColor: '#ffb35c', // Muted pastel orange
    colorText: 'orange',
    order: 2,
  },
  yellow: {
    emoji: '💛',
    title: 'Yellow',
    hexColor: '#fff28b', // Muted pastel yellow
    colorText: 'yellow',
    order: 3,
  },
  green: {
    emoji: '💚',
    title: 'Green',
    hexColor: '#8cf08c', // Muted pastel green
    colorText: 'green',
    order: 4,
  },
  blue: {
    emoji: '💙',
    title: 'Blue',
    hexColor: '#8bb5ff', // Muted pastel blue
    colorText: 'blue',
    order: 5,
  },
  purple: {
    emoji: '💜',
    title: 'Purple',
    hexColor: '#d18bff', // Muted pastel purple
    colorText: 'purple',
    order: 6,
  },
};
export default priorities;

export function getHexColorForPriority(priorityKey, prioritiesMap) {
  return prioritiesMap[priorityKey]
    ? prioritiesMap[priorityKey].hexColor
    : '#ffffff'; // Default to white if priority is not found
}

// Function to darken a color by a certain factor (0 to 1)
export function darkenColor(color, factor) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const newR = Math.max(0, Math.min(255, Math.round(r - r * factor)));
  const newG = Math.max(0, Math.min(255, Math.round(g - g * factor)));
  const newB = Math.max(0, Math.min(255, Math.round(b - b * factor)));

  return `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

export function getContrastColor(hexColor) {
  // Convert hexadecimal color to RGB
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine contrast color
  const contrastColor = luminance < 0.51 ? 'white' : 'black';
  return contrastColor;
}
