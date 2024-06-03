import api from "./axios";

const endpoint = "products";

export const products = {
  getAll: async function () {
    return api.get(endpoint).then((response) => response.data);
  },
  getById: async function (id: string) {
    return api
      .get(`${endpoint}/${id}`)
      .then((response) => response.data.product);
  },
  getByCategory: async function (categoryId: string) {
    return api
      .get(`${endpoint}/category/${categoryId}`)
      .then((response) => response.data.products);
  },
};
