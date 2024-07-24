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
  addProduct: async function (product: Item) {
    return api.post(endpoint, product).then((response) => response.data);
  },
  updateProduct: async function (id: string, updateData: Partial<Item>) {
    return api
      .put(`${endpoint}/${id}`, updateData)
      .then((response) => response.data);
  },
  deleteProduct: async function (id: string) {
    return api.delete(`${endpoint}/${id}`).then((response) => response.data);
  },
};
