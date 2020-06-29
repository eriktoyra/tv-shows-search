interface APIResponse<T> extends Response {
  data?: T;
}

export async function API<T>(request: RequestInfo): Promise<APIResponse<T>> {
  const response: APIResponse<T> = await fetch(request);

  try {
    response.data = await response.json();
  } catch (error) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}