
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import Weather from "./pages/weather/Weather";
import FormValidation from "./pages/formValidation/FormValidation";
import NotFound from "./components/NotFound";
import { GlobalProvider } from "./context/GlobalProvider";



function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="weather" element={<Weather />} />
            <Route path="form" element={<FormValidation />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
