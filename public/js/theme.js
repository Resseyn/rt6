document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeCss = document.getElementById('theme-css');
    
    // Загружаем сохраненную тему из localStorage (по умолчанию светлая)
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Устанавливаем начальную тему
    setTheme(currentTheme);
    
    // Обработчик нажатия на кнопку переключения темы
    themeToggle.addEventListener('click', () => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    // Функция установки темы
    function setTheme(theme) {
      // Обновляем ссылку на CSS файл темы
      themeCss.href = `/css/${theme}.css`;
      
      // Обновляем текст кнопки
      themeToggle.textContent = theme === 'light' ? 'Тёмная тема' : 'Светлая тема';
      
      // Обновляем переменную текущей темы
      window.currentTheme = theme;
    }
  });