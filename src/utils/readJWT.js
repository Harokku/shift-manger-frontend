// TODO: Refactor manual reading with following func
export const readJWT = () => (
  localStorage.getItem("jwt") !== null ? localStorage.getItem("jwt") : sessionStorage.getItem("jwt")
)