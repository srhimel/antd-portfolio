
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import Service from './pages/Single/Service/Service';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import MyServices from './pages/MyServices/MyServices';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Single/Blog/Blog';
import Header from './components/Header/Header';
import MainFooter from './components/MainFooter/MainFooter';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<MyServices />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </BrowserRouter>



    </>

  );
}

export default App;
