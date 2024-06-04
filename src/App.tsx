import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/404/NotFound';
import Home from './pages/Home/Home';

import './App.css';
import Zones from './pages/Zones/Zones';
import Users from './pages/Users/Users';
import Markers from './pages/Markers/Markers';

function App() {
    return (
        <div className='Root'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/zones' element={<Zones />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/markers' element={<Markers />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
