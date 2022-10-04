import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ProposalsPage from "./pages/ProposalsPage"
import MaterialPage from "./pages/MaterialPage"
import ReservationPage from "./pages/ReservationPage"
import ExperimentsPage from "./pages/ExperimentsPage"
import LoginPage from "./pages/LoginPage"


const routes = [
    {path:"/",element:<HomePage />},
    {path:"/login",element:<LoginPage />},
    {path:"/about-us",element:<AboutUsPage />},
    {path:"/proposals",element:<ProposalsPage />},
    {path:"/material",element:<MaterialPage />},
    {path:"/reservation",element:<ReservationPage />},
    {path:"/experiments",element:<ExperimentsPage />},
]

export default routes