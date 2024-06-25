document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
    { id: 1, name: "burger", img: "menu1.jpg", price: 20000 },
    { id: 2, name: "Pizza," img: "menu2.jpg", price: 20000 },
    { id: 3, name: "Boba", img: "menu3.jpg", price: 20000 },
    { id: 4, name: "Kentang-goreng", img: "menu4.jpg", price: 20000 },
    { id: 5, name: "dimsum-brazil", img: "menu5.jpg", price: 20000 },
],
  }));
});
