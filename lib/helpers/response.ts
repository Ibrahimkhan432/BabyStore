export const response = (
  status: boolean,
  message: string,
  data?: any
) => {
  return {
    status,
    message,
    data: data ?? null,
  }
}
