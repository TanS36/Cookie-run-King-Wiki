import { createGlobalStyle } from 'styled-components';
import { fontFace } from 'polished';

// Определите стили шрифта
const nunitoFont = fontFace({
  fontFamily: 'Nunito',
  fontFilePath: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
  fontStretch: 'normal',
  fontStyle: 'normal',
  fontWeight: 'normal',
});

// Создайте глобальные стили
const GlobalStyle = createGlobalStyle`
  .fonts-loaded * {
    font-family: 'Nunito', sans-serif;
  }
`;

// Функция для загрузки шрифта и применения стилей
const loadFontAndApplyStyles = () => {
  document.fonts.load('1em Nunito').then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
};

// Вызываем функцию загрузки шрифта при загрузке страницы
window.addEventListener('load', loadFontAndApplyStyles);

export default GlobalStyle;
