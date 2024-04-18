import { createGlobalStyle } from 'styled-components';
import { fontFace } from 'polished';

// Определение стилей альтернативного шрифта
const alternativeFont = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');
  font-family: Arial, sans-serif;
`;

// Определение стилей основного шрифта
const nunitoFont = fontFace({
  fontFamily: 'Nunito',
  fontFilePath: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
  fontStretch: 'normal',
  fontStyle: 'normal',
  fontWeight: 'normal',
});

// Создание глобальных стилей
const GlobalStyle = createGlobalStyle`
  ${alternativeFont}
  ${nunitoFont}
`;

export default GlobalStyle;
