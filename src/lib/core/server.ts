const baseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is missing");
}

export const serverMutation = async <T>(
  path: string,
  data?: unknown,
  options: RequestInit = {},
  method: "POST" | "PATCH" | "PUT" | "DELETE" = "POST",
): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return await res.json();
};

export const serverFetch = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, options);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
};

// export const serverFetch = async <T>(
//   path: string,
//   options: RequestInit = {},
// ): Promise<T> => {
//   const url = `${baseUrl}${path}`;

//   console.log("BASE URL:", baseUrl);
//   console.log("REQUEST:", url);

//   const res = await fetch(url, options);

//   console.log("STATUS:", res.status);

//   if (!res.ok) {
//     const body = await res.text();

//     throw new Error(`
// Request URL: ${url}
// Status: ${res.status}
// Response: ${body}
// `);
//   }

//   return res.json();
// };
