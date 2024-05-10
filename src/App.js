import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Index from './screen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:chatId?" index element={<Index />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
