export const useCartHooks = () => {
  const addCart = async (id: number) => {
    try {
      const response = await fetch("https://takehometest-production.up.railway.app/cart", {
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
