export async function handleAsync(fn) {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}
