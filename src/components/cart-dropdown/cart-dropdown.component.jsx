import CustomButton from "../button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-itmes" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
