export function getOrders() {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
}

export function getInventory() {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
}

export function getCustomers() {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}
