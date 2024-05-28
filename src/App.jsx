import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePAge";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        {/* <Route path="generator" element={<GeneratorPage />} />
        <Route path="generator/saved" element={<SavedThemePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;