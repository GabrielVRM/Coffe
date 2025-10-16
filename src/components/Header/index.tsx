import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import logo from "../../assets/Logo.png";
import { HeaderStyled } from "./styles";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Header() {
  const { newCoffe, setQuantity, quantity } = useContext(CoffeeContext);

  useEffect(() => {
    const newQuantity = newCoffe.map((e) => Number(e.quantity));
    setQuantity(newQuantity.reduce((acc, current) => acc + current, 0));
  }, [newCoffe]);

  return (
    <HeaderStyled>
      <Link to={"/"}>
        <img src={logo} />
      </Link>
      <div>
        <div className="location">
          <MapPinIcon weight="fill" size={26} />
          <span>São Paulo, Sp </span>
        </div>
        <div className="checkout">
          {quantity ?? 0 > 0 ? (
            <Link to={"/checkout"}>
              {<span className="quantity">{quantity}</span>}
              <ShoppingCartIcon weight="fill" size={26} />
            </Link>
          ) : (
            <a>
              {<span className="quantity">{quantity}</span>}
              <ShoppingCartIcon weight="fill" size={26} />
            </a>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
}
