import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type RequestBody = Record<string, unknown>;

const api = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: string) {
  return async (
    url: string,
    body: RequestBody = {}
  ): Promise<AxiosResponse> => {
    try {
      const requestOptions: AxiosRequestConfig = {
        method,
        url,
      };

      if (body && method === "GET") {
        requestOptions.params = body;
      } else if (body) {
        requestOptions.data = body;
      }

      const response = await axios(requestOptions);
      return response;
    } catch (error: unknown) {
      console.error("Error while calling API:", error);

      if (axios.isAxiosError(error)) {
        throw error.response?.data || new Error("Unknown Axios error occurred");
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  };
}

export const endpoint = {
  getProduct: () => api.get("https://dummyjson.com/products"),
  getProductDetail: (id: string) =>
    api.get(`https://dummyjson.com/products/${id}`),
};
