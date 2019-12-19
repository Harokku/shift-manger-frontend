// export const updateFromObj = (updateFunc) => (
//   (key, value) => (
//     updateFunc(state => ({...state, [key]: value}));
// )
// )
export function updateFromObj(updateFunc) {
  return (key, value) => {
    updateFunc(state => ({...state, [key]: value}));
  }
}