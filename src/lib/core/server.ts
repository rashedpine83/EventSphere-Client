const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_BASE_URL is missing");
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
  console.log(`${baseUrl}${path}`);

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json();
};
