const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// export const clientFetch = async <T>(
//   path: string,
//   options: RequestInit = {},
// ): Promise<T> => {
//   const res = await fetch(`${baseUrl}${path}`, options);

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message || `Request failed with status ${res.status}`);
//   }

//   return data as T;
// };

export const clientFetch = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || `Request failed with status ${res.status}`);
  }

  return data as T;
};
