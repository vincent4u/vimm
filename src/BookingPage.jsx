import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";
import Header from "./Header";
import Footer from "./Footer";
import "./Booking.css";
/* =========================
   API-related helper functions
   (exported for unit testing)
========================= */

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (date) => {
  return fetchAPI(new Date(date));
};

/* =========================
   Reducer
========================= */

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return {
        availableTimes: updateTimes(action.payload),
        selectedTime: ""
      };

    case "SET_SELECTED_TIME":
      return {
        ...state,
        selectedTime: action.payload
      };

    default:
      return state;
  }
};

/* =========================
   Initial State
========================= */

const initialState = {
  availableTimes: initializeTimes(),
  selectedTime: ""
};

/* =========================
   Component
========================= */

const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

 return (
  <>
  <Header/>
  <main>
    <div className="booking-page">
      
      <div className="booking-container">
        <BookingForm
          availableTimes={state.availableTimes}
          selectedTime={state.selectedTime}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
};

export default BookingPage;
