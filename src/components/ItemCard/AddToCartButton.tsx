

interface Props {
  children: string;
  onClick: () => void;
}

const AddToCartButton = ({ children, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-dark d-flex flex-row align-items-center gap-2" onClick={onClick}>
      {children}
      <span className="material-symbols-outlined">shopping_cart</span>
    </button>
  );
};

export default AddToCartButton;
