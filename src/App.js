import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './layouts/Main';
import Home from './component/Home'
import Quiz from './component/Quiz'
import Question from './component/Question';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      
      element: <Main></Main>,
      children:[
        {
          path:'/',
          
          element:<Home></Home>
        },
        {
          path:'/quiz',
          element:<Quiz></Quiz>
        },
        {
          path:'/question',
          element:<Question></Question>
        }
      ]
    },
   
  ]);
 
  return (
    <div className="App">
      
        <RouterProvider router={router} />

    </div>
  );
}

export default App;
