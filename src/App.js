// import { BrowserRouter, Route, Router } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from "./components/Context/AuthProvider";
import Layout from './Layout/Layout';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


document.title = "Laboratory"

function App() {
  return (
    <AuthProvider>
      <ToastContainer position="top-center"
        bodyClassName="toastBody"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, index) => <Route key={index} path={route.path} element={route.element}></Route>)}
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
