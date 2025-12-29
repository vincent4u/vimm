// import { useState } from "react";
// import { submitAPI } from "./api"; // API import

// function BookingForm(props) {
//   const [date, setDate] = useState("");
//   const [guest, setGuest] = useState(1);
//   const [occasion, setOccasion] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       date,
//       time: props.state.selectedTime,
//       guest,
//       occasion
//     };
//     const success = await submitAPI(formData);
//     if (success) {
//       alert("✅ Reservation submitted successfully!");
//       setDate("");
//       props.dispatch({ type: "SET_SELECTED_TIME", payload: "" });
//       setGuest(1);
//       setOccasion("");
//     } else {
//       alert("❌ Failed to submit. Please try again.");
//     }
//   };

//   return (
//     <>
//       <h1>Reserve your Table</h1>
//       <h5>“Reserve your table in advance and enjoy an unforgettable dining experience.”</h5>

//       <form
//         style={{
//           display: "grid",
//           border: "1px solid rgba(49, 51, 49, 0.6)",
//           padding: "20px",
//           boxShadow: "2px 2px 2px rgba(0,0,0,0.5)",
//           gap: "20px"
//         }}
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <label htmlFor="res-date">Choose date</label>
//           <input
//             type="date"
//             id="res-date"
//             value={date}
//             aria-required="true"
//             onChange={(e) => {
//               const selectedDate = e.target.value;
//               setDate(selectedDate);
//               props.updateTimes(selectedDate); // async fetch
//               props.dispatch({ type: "SET_SELECTED_TIME", payload: "" }); // reset selected time
//             }}
//           />
//         </div>

//         <div>
//           <label htmlFor="res-time">Choose time</label>
//           <select
//             id="res-time"
//             aria-required="true"
//             value={props.state.selectedTime}
//             onChange={(e) =>
//               props.dispatch({ type: "SET_SELECTED_TIME", payload: e.target.value })
//             }
//           >
//             <option value="">--select time--</option>
//             {props.state.availableTimes.map((time, index) => (
//               <option key={index} value={time}>{time}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="guests">Number of guests</label>
//           <input
//             type="number"
//             placeholder="1"
//             min="1"
//             max="10"
//             id="guests"
//             value={guest}
//             onChange={(e) => setGuest(Number(e.target.value))}
//           />
//         </div>

//         <div>
//           <label htmlFor="occasion">Occasion</label>
//           <select
//             id="occasion"
//             value={occasion}
//             aria-required="true"
//             onChange={(e) => setOccasion(e.target.value)}
//           >
//             <option>Birthday</option>
//             <option>Anniversary</option>
//           </select>
//         </div>

//         <input type="submit" value="Make Your reservation" />
//       </form>
//     </>
//   );
// }

// export default BookingForm;

// 

import { useState } from "react";

function BookingForm({ availableTimes, selectedTime, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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

      <form className="booking-form" onSubmit={handleSubmit}>

        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "UPDATE_DATE", payload: e.target.value });
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) =>
            dispatch({ type: "SET_SELECTED_TIME", payload: e.target.value })
          }
        >
          <option value="">Select time</option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guest}
          onChange={(e) => setGuest(Number(e.target.value))}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
}

export default BookingForm;
