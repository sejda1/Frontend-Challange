import Portfolyo from "./pages/Portfolyo";
import {LanguageProvider} from './contexts/LanguageContext';
import {DarkModeProvider }from './contexts/DarkModeContext';

function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Portfolyo />
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
