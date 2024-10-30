export const useCartHooks = () => {
  const addCart = async (id: number) => {
    console.log("🚀 ~ addCart ~ id:", id);

    try {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: id }),
      });
      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { addCart };
};
