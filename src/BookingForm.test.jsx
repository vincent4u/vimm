import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();
  const availableTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmitForm.mockClear();
  });

  test("renders all form fields", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime=""
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("renders correct HTML5 validation attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime=""
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");

    const guestInput = screen.getByLabelText(/number of guests/i);
    expect(guestInput).toHaveAttribute("required");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  test("renders available booking times", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime=""
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("submits the form with correct data", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime="18:00"
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-12-31" }
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" }
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    fireEvent.click(screen.getByDisplayValue(/make your reservation/i));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2025-12-31",
      time: "18:00",
      guest: 4,
      occasion: "Birthday"
    });
  });

  test("submit button disabled when form is invalid / enabled when valid", () => {
    // initially invalid
    const { rerender } = render(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime=""
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitBtn = screen.getByDisplayValue(/make your reservation/i);
    expect(submitBtn).toBeDisabled();

    // re-render with selectedTime to simulate valid selection
    rerender(
      <BookingForm
        availableTimes={availableTimes}
        selectedTime="17:00"
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // fill other fields
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-12-31" }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" }
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" }
    });

    expect(submitBtn).not.toBeDisabled();
  });
});
