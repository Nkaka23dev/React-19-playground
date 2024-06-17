/* eslint-disable react/prop-types */
import { useFormState } from "react-dom";
export const AddToCartFormUseFormState = ({ id, title }) => {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <form
      action={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <input
        type="hidden"
        name="itemID"
        value={id}
        placeholder="Add to cart"
        className="border border-gray-300 p-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to cart
      </button>
      <h2 className="mt-3 tex-sm text-gray-700">{message}</h2>
    </form>
  );
};

const addToCart = (prevState, queryData) => {
  const itemID = queryData.get("itemID");
  if (itemID === "4") {
    return "Added To Cart";
  } else {
    return "Failed To Add To Cart: item is already sold out";
  }
};
