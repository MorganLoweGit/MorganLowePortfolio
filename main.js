function toggleDarkMode() { 
 const container = document.getElementById('simulateDarkMode');
  const buttonDarkMode = document.getElementById('toggleDarkMode');
  const dataTheme = container.getAttribute('data-theme');
  
  if(dataTheme === 'dark') {
    container.setAttribute('data-theme', 'light');
    buttonDarkMode.innerHTML = 'DARK MODE';
  } else {
    container.setAttribute('data-theme', 'dark');
    buttonDarkMode.innerHTML = 'LIGHT MODE';
  }
}