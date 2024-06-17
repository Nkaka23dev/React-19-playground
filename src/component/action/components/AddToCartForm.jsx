/* eslint-disable react/prop-types */
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Adding..." : "Add to Cart"}
    </button>
  );
};

export const AddToCartForm = ({ id, title, addToCart }) => {
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (error) {
      console.log(error);
    }
  };
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
      <SubmitButton />
    </form>
  );
};
