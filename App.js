import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Bookingpage from "./component/Bookingpage";
import BookingForm from "./component/BookingForm";
import ConfirmationPage from "./component/ConfirmationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookingpage" element={<Bookingpage />} />
          <Route path="/confirmationpage" element={<ConfirmationPage />} />
          <Route path="/bookingform" element={<BookingForm />} />

          {/* Optional: Add a fallback route for unknown paths */}
          <Route
            path="*"
            element={<h2>404: Page not found. Go back to <a href="/">home</a></h2>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
