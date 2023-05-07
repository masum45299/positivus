
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nvbr from './Components/Nvbr/Nvbr';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router= createBrowserRouter([
    {path:"/", element:<Nvbr/>},
    {path:"about", element:<Nvbr/>},
    {path:"services", element:<Nvbr/>}
  ])


  return (
    <div className="App">
      <RouterProvider
      router={router}
      />
      
    </div>
  );
}

export default App;
