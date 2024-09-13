interface Props {
  count: number;
}
const ItemCount = ({ count }: Props) => {
  return (
    <div>
      <div>{count}</div>
    </div>
  );
};

export default ItemCount;
