interface APIResponse<T> extends Response {
  data?: T;
}

export async function API<T>(request: RequestInfo, abortController: AbortController): Promise<APIResponse<T>> {
  const response: APIResponse<T> = await fetch(request, { signal: abortController.signal });

  try {
    response.data = await response.json();
    // eslint-disable-next-line no-empty
  } catch (error) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
