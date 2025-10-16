import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Container } from "./styles";
import type { CoffeesSubscriptionType } from "../../@types/styled";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { Link } from "react-router-dom";

export function Coffee({
  id,
  img,
  title,
  subscription,
  paragraph,
  amount,
}: CoffeesSubscriptionType) {
  const [quantityCoffee, setQuantityCoffee] = useState<number>(0);

  const { coffeesSubscription, setCoffeesSubscription } =
    useContext(CoffeeContext);

  function handleQuantityCoffee(props: string) {
    switch (props) {
      case "-":
        coffeesSubscription.filter((e) =>
          e.id === id && quantityCoffee > 0
            ? setQuantityCoffee((state) => state - 1)
            : null
        );
        break;
      case "+":
        coffeesSubscription.filter((e) =>
          e.id === id ? setQuantityCoffee((state) => state + 1) : null
        );
        break;
    }
  }

  useEffect(() => {
    setCoffeesSubscription((state) =>
      state.map((e) =>
        id === e.id ? { ...e, quantity: Number(quantityCoffee) } : e
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityCoffee]);

  return (
    <>
      <Container>
        <img src={img} />
        <span>{subscription}</span>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <div className="amount">
          <span>R$ {amount}</span>
          <div className="quatity">
            <button className="btn" onClick={() => handleQuantityCoffee("-")}>
              <span>-</span>
            </button>
            <span> {quantityCoffee}</span>
            <button className="btn" onClick={() => handleQuantityCoffee("+")}>
              <span>+</span>
            </button>
          </div>
          <button className="icon">
            {quantityCoffee > 0 ? (
              <Link to={"/checkout"}>
                <ShoppingCartIcon weight="fill" size={20} />
              </Link>
            ) : (
              <ShoppingCartIcon weight="fill" size={20} />
            )}
          </button>
        </div>
      </Container>
    </>
  );
}
