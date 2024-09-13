interface Produto {
  description: string;
}

const ItemListContainer = ({ description }: Produto) => {
  return (
    <div>
      <h1>{description}</h1>
    </div>
  );
};

export default ItemListContainer;
