import { useState, useEffect } from "react";

function BookingForm({ availableTimes, selectedTime, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Check form validity whenever any field changes
  useEffect(() => {
    const formValid =
      date.trim() !== "" &&
      selectedTime.trim() !== "" &&
      guest >= 1 &&
      guest <= 10 &&
      occasion.trim() !== "";
    setIsValid(formValid);
  }, [date, selectedTime, guest, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return; // double-check

    const formData = {
      date,
      time: selectedTime,
      guest,
      occasion
    };

    submitForm(formData);
  };

  return (
    <>
      <h1>Reserve your Table</h1>
      <h5>“Reserve your table in advance and enjoy an unforgettable dining experience.”</h5>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {/* Date */}
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          required
          aria-label="On Click"
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "UPDATE_DATE", payload: e.target.value });
          }}
        />

        {/* Time */}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          required
          aria-label="On Click"
          onChange={(e) =>
            dispatch({ type: "SET_SELECTED_TIME", payload: e.target.value })
          }
        >
          <option value="">Select time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        {/* Guests */}
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guest}
          required
          aria-label="On Click"
          onChange={(e) => setGuest(Number(e.target.value))}
        />

        {/* Occasion */}
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        {/* Submit button disabled if form is invalid */}
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!isValid}
          aria-label="On Click"
        />
      </form>
    </>
  );
}

export default BookingForm;
