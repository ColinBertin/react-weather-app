


export const nightIconSelect = (weather) => {
  let icon = '';

  switch (weather) {
    case 'Clear':
      icon = '01n.png';
      break;
    case 'Clouds':
      icon = '03n.png';
      break;
    case 'Drizzle':
      icon = '09n.png';
      break;
    case 'Rain':
      icon = '10n.png';
      break;
    case 'Snow':
      icon = '13n.png';
      break;
    case 'Thunderstorm':
      icon = '11n.png';
      break;
    default:
      icon = '50n.png';
  }
  return icon;
}

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
