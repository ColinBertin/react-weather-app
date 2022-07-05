


export const iconSelect = (weather) => {
  let icon = '';

  switch (weather) {
    case 'Clear':
      icon = '01d.png';
      break;
    case 'Clouds':
      icon = '03d.png';
      break;
    case 'Drizzle':
      icon = '09d.png';
      break;
    case 'Rain':
      icon = '10d.png';
      break;
    case 'Snow':
      icon = '13d.png';
      break;
    case 'Thunderstorm':
      icon = '11d.png';
      break;
    default:
      icon = '50d.png';
  }
  return icon;
}
