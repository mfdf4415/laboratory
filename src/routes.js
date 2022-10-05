import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ProposalsPage from "./pages/ProposalsPage"
import MaterialPage from "./pages/MaterialPage"
import ReservationPage from "./pages/ReservationPage"
import ExperimentsPage from "./pages/ExperimentsPage"
import LoginPage from "./pages/LoginPage"
import LaboratoryDatePage from "./pages/LaboratoryDatePage"
import ReservPage from "./pages/ReservPage"


const routes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/about-us", element: <AboutUsPage /> },
    { path: "/proposals", element: <ProposalsPage /> },
    { path: "/material", element: <MaterialPage /> },
    { path: "/reservation", element: <ReservationPage /> },
    { path: "/reservation/:id", element: <LaboratoryDatePage /> },
    { path: "/reservation/:id/reserv", element: <ReservPage /> },
    { path: "/experiments", element: <ExperimentsPage /> },
    { path: "/", element: <HomePage /> },
]

export default routes