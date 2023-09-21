type CreateRequestArgs = {
  baseUrl: string;
  interceptors?: {
    request?: (config: RequestInit) => RequestInit | Promise<RequestInit>;
    response?: <D>(res: D) => D | Promise<D>;
  };
};

type RequestOptions<P> = {
  params?: P;
} & Pick<RequestInit, 'headers' | 'signal'>;

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createRequest = async <D>(
  url: string,
  { headers, ...config }: RequestInit = {},
  interceptors?: CreateRequestArgs['interceptors'],
  toJson = true,
): Promise<D> => {
  const init: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...config,
  };

  const requestInit = !interceptors?.request
    ? init
    : interceptors.request.constructor.name === 'AsyncFunction'
    ? await interceptors.request(init)
    : (interceptors.request(init) as RequestInit);

  const res = await fetch(url, requestInit);
  const json = toJson ? await res.json() : res;

  return interceptors?.response ? interceptors.response(json) : json;
};

export const createApi = ({ baseUrl, interceptors }: CreateRequestArgs) => {
  return {
    get: <D = unknown, P = unknown>(
      url: string,
      options?: RequestOptions<P>,
    ) => {
      return createRequest<D>(
        `${baseUrl}${url}`,
        { method: 'GET', signal: options?.signal, headers: options?.headers },
        interceptors,
      );
    },
    post: <D = unknown, P = unknown>(
      url: string,
      options?: RequestOptions<P>,
    ) => {
      return createRequest<D>(
        `${baseUrl}${url}`,
        {
          method: 'POST',
          body: JSON.stringify(options?.params),
          signal: options?.signal,
          headers: options?.headers,
        },
        interceptors,
      );
    },
    put: <D = unknown, P = unknown>(
      url: string,
      options?: RequestOptions<P>,
    ) => {
      return createRequest<D>(
        `${baseUrl}${url}`,
        {
          method: 'PUT',
          body: JSON.stringify(options?.params),
          signal: options?.signal,
          headers: options?.headers,
        },
        interceptors,
      );
    },
    patch: <D = unknown, P = unknown>(
      url: string,
      options?: RequestOptions<P>,
    ) => {
      return createRequest<D>(
        `${baseUrl}${url}`,
        {
          method: 'PATCH',
          body: JSON.stringify(options?.params),
          signal: options?.signal,
          headers: options?.headers,
        },
        interceptors,
      );
    },
    delete: <D = unknown, P = unknown>(
      url: string,
      options?: RequestOptions<P>,
    ) => {
      return createRequest<D>(
        `${baseUrl}${url}`,
        {
          method: 'DELETE',
          signal: options?.signal,
          headers: options?.headers,
        },
        interceptors,
        false,
      );
    },
  };
};

export const api = createApi({
  baseUrl: API_BASE_URL,
});
