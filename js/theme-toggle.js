// static/js/theme-toggle.js
document.addEventListener("DOMContentLoaded", function() {
  // Get all theme toggle buttons (desktop and mobile)
  const themeButtons = [
    document.getElementById('theme-button'),
    document.getElementById('theme-button-mobile')
  ];
  
  // Check the user's preference
  const userPreference = localStorage.getItem('theme') || 'auto';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  function setTheme() {
    if (userPreference === 'dark' || (userPreference === 'auto' && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  // Initial setup
  setTheme();
  
  // Handle theme toggle click for all buttons
  themeButtons.forEach(button => {
    if (button) {
      button.addEventListener('click', () => {
        toggleTheme();
      });
    }
  });
  
  // Toggle theme function
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (userPreference === 'auto') {
      setTheme();
    }
  });
});