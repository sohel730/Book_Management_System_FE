import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyRoutes from './Components/Routes/Myroutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {MyRoutes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={route.element} // Ensure this is lowercase
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
