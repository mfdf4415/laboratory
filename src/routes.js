import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ProposalsPage from "./pages/ProposalsPage"
import MaterialPage from "./pages/MaterialPage"
import ReservationPage from "./pages/ReservationPage"
import ExperimentsPage from "./pages/ExperimentsPage"
import ExperimentPage from "./pages/ExprimentPage"
import LoginPage from "./pages/LoginPage"
import LaboratoryDatePage from "./pages/LaboratoryDatePage"
import ReservPage from "./pages/ReservPage"
import DescreaptionPage from "./pages/DescreaptionPage"
import NotFoundPage from "./pages/NotFoundPage"
import ShowExperimentPage from "./pages/ShowExperimentPage"
import ShowProposalPage from "./pages/ShowProposalPage"


const routes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/about-us", element: <AboutUsPage /> },
    { path: "/proposals", element: <ProposalsPage /> },
    { path: "/proposals/:id", element: <ShowProposalPage /> },
    { path: "/material", element: <MaterialPage /> },
    { path: "/reservation", element: <ReservationPage /> },
    { path: "/reservation/:id", element: <LaboratoryDatePage /> },
    { path: "/reservation/:id/reserv", element: <ReservPage /> },
    { path: "/experiments", element: <ExperimentsPage /> },
    { path: "/experiments/:id", element: <ExperimentPage /> },
    { path: "/experiments/:id/addExperimrnt", element: <DescreaptionPage /> },
    { path: "/experiments/:id/show/:item", element: <ShowExperimentPage /> },
    { path: "/", element: <HomePage /> },
    { element: <NotFoundPage /> },
]

export default routes