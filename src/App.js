// import { BrowserRouter, Route, Router } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from "./components/Context/AuthProvider";
import Layout from './Layout/Layout';
import routes from './routes';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)}
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
