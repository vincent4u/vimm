import { useState } from "react";

function Form({ onBookingSubmit, isSubmitting }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { date, time, guests, occasion };

    // Simple validation: prevent empty fields
    if (!date || !time || !guests) {
      alert("Please fill in all required fields.");
      return;
    }

    onBookingSubmit(booking);

    // Reset form after submission
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid rgba(49, 51, 49, 0.6)",
        padding: "20px",
        boxShadow: "2px 2px 2px rgba(0,0,0,0.5)"
      }}
    >
      <div>
        <label htmlFor="res-date">Choose Date: </label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="res-time">Choose Time:</label>
        <select
          id="res-time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <br />
      </div>
      <br />
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="1"
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="other">Other</option>
        </select>
      </div>
      <br />
      <div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Make Your reservation"}
        </button>
      </div>
    </form>
  );
}

export default Form;
