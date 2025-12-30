import { test, expect } from 'vitest';
import { reducer, initialState } from './BookingPage';

const mockState = { 
  availableTimes: ["17:00", "18:00"], 
  selectedTime: "" 
};

test("reducer updates availableTimes on UPDATE_DATE", () => {
  const newState = reducer(mockState, { type: "UPDATE_DATE", payload: "2025-12-31" });
  expect(newState.availableTimes).toEqual([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);
  expect(newState.selectedTime).toBe("");
});

test("reducer sets selectedTime on SET_SELECTED_TIME", () => {
  const selectedState = reducer(mockState, { type: "SET_SELECTED_TIME", payload: "18:00" });
  expect(selectedState.availableTimes).toEqual(mockState.availableTimes);
  expect(selectedState.selectedTime).toBe("18:00");
});
