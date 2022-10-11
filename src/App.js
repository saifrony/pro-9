import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './layouts/Main';
import Home from './component/Home'
import Quiz from './component/Quiz'
import Question from './component/Question';
import Error from './component/Error'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>, 
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:'/quiz',
          element:<Quiz></Quiz>,
          loader : ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
         

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
