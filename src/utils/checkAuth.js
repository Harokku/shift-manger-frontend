// TODO: Implement auth check
import jwtDecoder from "jwt-decode";

export const checkIfAuth = () => {
  // Try to read token from local or session
  const authToken = localStorage.getItem("jwt") !== null ? localStorage.getItem("jwt") : sessionStorage.getItem("jwt");
  let decoded; // Will store decoded token

  // If token is present and valid and not expired return true (authenticated), else return false
  try {
    decoded = jwtDecoder(authToken)
  } catch (e) {
    // If error (not valid) return false (not authenticated and clear storage
    localStorage.removeItem("jwt")
    sessionStorage.removeItem("jwt")
    return false
  }
  // If error (expired) return false (not authenticated and clear storage
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem("jwt")
    sessionStorage.removeItem("jwt")
    return false
  } else {
    // Token ok, return true (authenticated)
    return true
  }
}