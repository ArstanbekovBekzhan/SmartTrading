import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Home/Homepage.jsx';
import { Layout } from './component/Layout/Layout.jsx';
import Lesson from './pages/Lesson/Lesson.jsx';
import "./index.css"
import ErrorPage from './pages/Errors/Errors.Page.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/Sign_up' element={<Lesson />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
