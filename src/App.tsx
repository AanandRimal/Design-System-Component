import React from 'react';
import './App.css';
import KrispMake from './KrispMake';
import { ThemeProvider } from './contexthook/ThemeProvider';

const App: React.FC = () => {
  return (
    <div >
  
      <ThemeProvider>
      <KrispMake/>
      </ThemeProvider>


    </div>
  );
}
export default App;
