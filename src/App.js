import './App.css';
import { Route, Routes} from 'react-router-dom'
import LandingPage from './components/landingpage/LandingPage'
import ProfileDetails from './components/pages/ProfileDetails'
import PostsDetails from './components/pages/PostsDetails'
import ToDoScreen from './components/pages/ToDoScreen'
import GalleryScreen from './components/pages/GalleryScreen'

function App() {
  return (
   <>

   <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/profiledetails/:id' element={<ProfileDetails />} />
    <Route path='/postdetails/:id' element={<PostsDetails />} />
    <Route path='/gallery/:id' element={<GalleryScreen />} />
    <Route path='/todo/:id' element={<ToDoScreen />} />
   </Routes>

   </>
  );
}

export default App;
