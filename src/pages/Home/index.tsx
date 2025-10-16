import { Container, ContainerCoffee } from "./styles";
import imgHome from "../../assets/home.png";
import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "@phosphor-icons/react";

import { Icon } from "../../components/Icon";
import { Coffee } from "../../components/Coffee";
import type { CoffeesSubscriptionType } from "../../@types/styled";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
export function Home() {
  const { coffeesSubscription } = useContext(CoffeeContext);
  return (
    <>
      <Container>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <span>
              <Icon Icon={ShoppingCartIcon} />
              Compra simples e segura
            </span>
            <span>
              <Icon Icon={PackageIcon} color={"baseText"} />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Icon Icon={TimerIcon} color="productYellow" />
              Entrega rápida e rastreada
            </span>
            <span>
              <Icon Icon={CoffeeIcon} color="productPurpleDark" /> O café chega
              fresquinho até você
            </span>
          </div>
        </div>
        <div>
          <img src={imgHome} alt="image of coffee" />
        </div>
      </Container>
      <ContainerCoffee>
        <div className="title-Coffee">
          <h1>Nossos Cafés</h1>
          <div className="coffees">
            {coffeesSubscription.map((e: CoffeesSubscriptionType) => (
              <Coffee
                id={e.id}
                key={e.id}
                img={e.img}
                title={e.title}
                subscription={e.subscription}
                paragraph={e.paragraph}
                amount={e.amount}
                quantity={e.quantity}
              />
            ))}
          </div>
        </div>
      </ContainerCoffee>
    </>
  );
}
