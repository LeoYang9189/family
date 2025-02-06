import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
          'Helvetica Neue', Arial, sans-serif;
      }

      .container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 2rem;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: linear-gradient(
          135deg,
          rgba(248, 250, 255, 1) 0%,
          rgba(242, 245, 255, 1) 20%,
          rgba(245, 240, 255, 1) 40%,
          rgba(235, 242, 255, 1) 60%,
          rgba(240, 245, 255, 1) 80%,
          rgba(248, 250, 255, 1) 100%
        );
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
          'Helvetica Neue', Arial, sans-serif;
        cursor: pointer;
        border: none;
        outline: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      /* 添加平滑滚动效果 */
      html {
        scroll-behavior: smooth;
      }

      /* 移除默认的输入框样式 */
      input {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
          'Helvetica Neue', Arial, sans-serif;
        border: none;
        outline: none;
      }

      // 金刚区背景
      .hero-section {
        background: linear-gradient(
          180deg,
          rgba(248, 250, 255, 1) 0%,
          rgba(242, 240, 255, 1) 50%,
          rgba(235, 240, 255, 1) 100%
        );
      }

      // 内容区背景
      .content-section {
        background: linear-gradient(
          180deg,
          rgba(235, 240, 255, 1) 0%,
          rgba(240, 238, 255, 1) 50%,
          rgba(240, 248, 255, 1) 100%
        );
      }

      // Contact 区背景
      .contact-section {
        background: linear-gradient(
          180deg,
          rgba(240, 248, 255, 1) 0%,
          rgba(245, 242, 255, 1) 50%,
          rgba(248, 250, 255, 1) 100%
        );
      }

      // 调整光晕效果
      .color-accent-1 {
        background: radial-gradient(
          circle at top left,
          rgba(220, 235, 255, 0.5) 0%,
          transparent 70%
        );
      }

      .color-accent-2 {
        background: radial-gradient(
          circle at bottom right,
          rgba(235, 230, 255, 0.5) 0%,
          transparent 70%
        );
      }

      .color-accent-3 {
        background: radial-gradient(
          circle at center,
          rgba(240, 235, 255, 0.4) 0%,
          transparent 70%
        );
      }
    `}
  />
); 