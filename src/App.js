import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Photos from './Pages/Gallery/Photos/Photos';
import Packages from './Pages/Packages/Packages/Packages';
import About from './Pages/Home/About Us/About';
import Contact from './Pages/Home/Contact Us/Contact';
import Login from './Pages/Login/Login';
import MyProfile from './Pages/Profile/MyProfile/MyProfile';
import MyBookings from './Pages/Profile/MyBookings/MyBookings';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import ManageBookings from './Pages/Profile/ManageBookings/ManageBookings';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking';
import BookingDetail from './Pages/Booking/BookingDetail/BookingDetail';
import AddService from './Pages/Profile/AddService/AddService';
import BookingPlace from './Pages/Booking/BookingPlace/BookingPlace';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/packages">
              <Packages />
            </PrivateRoute>
            <PrivateRoute path="/package/:bookingId">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/booking-place/:bookingId">
              <BookingPlace />
            </PrivateRoute>
            <Route path="/gallery">
              <Photos />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/my-profile">
              <MyProfile />
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <MyBookings />
            </PrivateRoute>
            <PrivateRoute path="/manage-bookings">
              <ManageBookings />
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
