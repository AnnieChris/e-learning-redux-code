import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';

import banner from './images/eLearning-Banner1.jpg';
import LoginForm from './components/UserLoginForm';
import AdminLoginForm from './components/AdminLoginForm';
import HomePage from './components/UserLoggedInPage';
import ProfilePage from './components/ProfilePage';
import CoursesPage from './components/CoursesPage';
import ContactUsPage from './components/ContactUsPage';
import RegisterPage from './components/RegistrationForm';
import InvalidLoginPage from './components/InvalidLoginPage';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import PostReducer from "./store/Reducer"
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(PostReducer, composedEnhancer)

function App() {
  return (
  <Provider store={store}>
    <Router>
    <div className="App">
      <Header/>
      <div className='banner_img'> 
        <img src={banner} alt=""/>
      </div>
      
      <Routes>
        <Route path='/UserLogin' element={<LoginForm />}></Route>
        <Route path='/AdminLogin' element={<AdminLoginForm />}></Route>
        <Route path='/newUser' element={<RegisterPage/>}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/courses' element={<CoursesPage />}></Route>
        <Route path='/contactus' element={<ContactUsPage />}></Route>
        <Route path='/invalidLogin' element={<InvalidLoginPage />}></Route>

      </Routes>
    </div>
    </Router>
    </Provider>
  );
}
export default App;
