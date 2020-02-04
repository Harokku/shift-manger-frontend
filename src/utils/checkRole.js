import jwtDecoder from "jwt-decode";
import {readJWT} from "./readJWT";

export const checkIfRole = (role) => {
  // Read auth token from local or session
  const authToken = readJWT();
  let decoded;

  // If token is present, read roles and return true if passed role is present
  // Manually check token validity
  try {
    decoded = jwtDecoder(authToken)
  } catch (e) {
    return false
  }
  return decoded.role.includes(role)
}