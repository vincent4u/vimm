// You can copy this from the GitHub API: https://raw.githubusercontent.com/courseraap/capstone/main/api.js

export function fetchAPI(date) {
  // Simulate available times for a given date
  // For now, returns static times; the actual API may do more
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export async function submitAPI(formData) {
  // Simulate submitting the form
  console.log("Submitting form data:", formData);
  return true; // always succeed for now
}
