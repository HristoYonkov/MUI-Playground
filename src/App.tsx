import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NavBar from './components/NavBar/NavBar';
// import Todos from './pages/Todos/Todos';
// import NotFound from './pages/404/NotFound';
import Home from './pages/Home/Home';

import './App.css';

function App() {
    return (
        <div className='Root'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/todos' element={<Todos />} />
                    <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
