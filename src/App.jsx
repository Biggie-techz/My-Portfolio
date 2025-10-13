import Home from '../src/pages/home';
import ProjectDetails from '../src/pages/ProjectDetails';
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About';
import Services from '../src/pages/Services';

const App = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        {/* <Route path='/projects' element={<Projects />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default App;
