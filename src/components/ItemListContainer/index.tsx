import { useState } from "react";
import ItemCount from "../ItemCount";

interface Produto {
  description: string;
}

const ItemListContainer = ({ description }: Produto) => {
  const [count, setCount] = useState<number>(1);
  const itemCountAdd = () => {
    setCount(count + 1);
  };
  const itemCountSub = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <div className="flex flex-col  w-64 border-solid border-lime-950 border-2 rounded h-80">
        <h1>{description}</h1>
        <div className="flex space-x-24 m-auto p-4">
          <button onClick={() => itemCountSub()}>-</button>
          <ItemCount count={count} />
          <button onClick={() => itemCountAdd()}>+</button>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ItemListContainer;
