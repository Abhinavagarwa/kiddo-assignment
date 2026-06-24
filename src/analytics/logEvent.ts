export function logEvent(
  name: string,
  payload?: any
) {
  console.log(
    "[Analytics]",
    name,
    payload
  );
}
