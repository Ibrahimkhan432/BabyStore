const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};
