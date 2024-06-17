/* eslint-disable react/prop-types */
export const CartDisplay = ({ cart }) => {
  if (cart.length === 0) return null;
  return (
    <div>
      <h2 className="text-xl font-bold my-4">Your Cart: </h2>
      <ul>
        {cart.map((value) => (
          <li className="text-base" key={value.id}>
            {value.title}
          </li>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
};
