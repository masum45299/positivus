
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './Components/About/About';
import Main from './Components/Main/Main';

function App() {

  const router= createBrowserRouter([
    {path:"/", element:<Main/>,children:[
      {path:"/", element:<About/>},
      {path:"/about", element:<About/>},
      
    ]}
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
