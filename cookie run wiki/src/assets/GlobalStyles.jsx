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
  * {
    ${nunitoFont}
    font-family: 'Nunito', sans-serif;
    /* Другие стили здесь */
  }
`;

export default GlobalStyle;
