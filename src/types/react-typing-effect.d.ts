declare module 'react-typing-effect' {
    import * as React from 'react';
  
    interface TypingEffectProps {
      text: string | string[];
      speed?: number;
      eraseSpeed?: number;
      cursorRenderer?: (cursor: string) => React.ReactNode;
      displayTextRenderer?: (text: string, i: number) => React.ReactNode;
    }
  
    const TypingEffect: React.FC<TypingEffectProps>;
  
    export default TypingEffect;
  }
  