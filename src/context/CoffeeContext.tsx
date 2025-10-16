import { createContext, useEffect, useState, type ReactNode } from "react";

import coffeExpresso from "../assets/ExpressoTradicional.png";
import ExpressoAmericano from "../assets/ExpressoAmericano.png";
import ExpressoCremoso from "../assets/ExpressoCremoso.png";
import ExpressoGelado from "../assets/ExpressoGelado.png";
import CaféLeite from "../assets/CaféLeite.png";
import Capuccino from "../assets/Capuccino.png";
import ChocolateQuente from "../assets/ChocolateQuente.png";
import Cubano from "../assets/Cubano.png";
import Havaiano from "../assets/Havaiano.png";
import Irlandês from "./../assets/Irlandês.png";
import Latte from "../assets/Latte.png";
import Macchiato from "../assets/Macchiato.png";
import Mocaccino from "../assets/Mocaccino.png";
import Árabe from "../assets/Árabe.png";
import type { CoffeesSubscriptionType } from "../@types/styled";

interface CoffeeContextProviderType {
  children: ReactNode;
}

export type NewFormContextType = {
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
};

interface CoffeeType {
  coffeesSubscription: CoffeesSubscriptionType[];
  setCoffeesSubscription: React.Dispatch<
    React.SetStateAction<CoffeesSubscriptionType[]>
  >;
  newCoffe: CoffeesSubscriptionType[];
  setNewCoffe: React.Dispatch<React.SetStateAction<CoffeesSubscriptionType[]>>;

  newForm: NewFormContextType;
  setNewForm: React.Dispatch<React.SetStateAction<NewFormContextType>>;

  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CoffeeContext = createContext({} as CoffeeType);
export function CoffeContextProvider({ children }: CoffeeContextProviderType) {
  const [coffeesSubscription, setCoffeesSubscription] = useState<
    CoffeesSubscriptionType[]
  >([
    {
      id: 1,
      img: coffeExpresso,
      title: "Expresso Tradicional",
      subscription: ["Tradicional"],
      paragraph: "O tradicional café feito com água quente e grãos moídos",
      amount: 9.9,
    },
    {
      id: 2,
      img: ExpressoAmericano,
      title: "Expresso Americano",
      subscription: ["Tradicional"],
      paragraph: "Expresso diluído, menos intenso que o tradicional",
      amount: 9.9,
    },
    {
      id: 3,
      img: ExpressoCremoso,
      title: "Expresso Cremoso",
      subscription: ["Tradicional"],
      paragraph: "Café expresso tradicional com espuma cremosa",
      amount: 9.9,
    },
    {
      id: 4,
      img: ExpressoGelado,
      title: "Expresso Gelado",
      subscription: ["Tradicional", "gelado"],
      paragraph: "Bebida preparada com café expresso e cubos de gelo",
      amount: 9.9,
    },
    {
      id: 5,
      img: CaféLeite,
      title: "Café com Leite",
      subscription: ["Tradicional", "com leite"],
      paragraph: "Meio a meio de expresso tradicional com leite vaporizado",
      amount: 9.9,
    },
    {
      id: 6,
      img: Capuccino,
      title: "Capuccino",
      subscription: ["Tradicional", "com leite"],
      paragraph:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      amount: 9.9,
    },
    {
      id: 7,
      img: ChocolateQuente,
      title: "Chocolate Quente",
      subscription: ["especial", "com leite"],
      paragraph: "O tradicional café feito com água quente e grãos moídos",
      amount: 9.9,
    },
    {
      id: 8,
      img: Cubano,
      title: "Cubano",
      subscription: ["gelado", "especial", "alcoólico"],
      paragraph:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      amount: 9.9,
    },
    {
      id: 9,
      img: Havaiano,
      title: "Havaiano",
      subscription: ["especial"],
      paragraph: "Bebida adocicada preparada com café e leite de coco",
      amount: 9.9,
    },
    {
      id: 10,
      img: Irlandês,
      title: "Irlandês",
      subscription: ["especial", "alcoólico"],
      paragraph: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      amount: 9.9,
    },
    {
      id: 11,
      img: Latte,
      title: "Latte",
      subscription: ["Tradicional", "com leite"],
      paragraph:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      amount: 9.9,
    },
    {
      id: 12,
      img: Macchiato,
      title: "Macchiato",
      subscription: ["Tradicional", "com leite"],
      paragraph: "O tradicional café feito com água quente e grãos moídos",
      amount: 9.9,
    },
    {
      id: 13,
      img: Mocaccino,
      title: "Mocaccino",
      subscription: ["Tradicional", "com leite"],
      paragraph: "Café expresso com calda de chocolate, pouco leite e espuma",
      amount: 9.9,
    },
    {
      id: 14,
      img: Árabe,
      title: "Árabe",
      subscription: ["Tradicional"],
      paragraph: "Bebida preparada com grãos de café árabe e especiarias",
      amount: 9.9,
    },
  ]);
  const [newForm, setNewForm] = useState<NewFormContextType>({
    bairro: "",
    cep: "",
    cidade: "",
    complemento: "",
    numero: "",
    rua: "",
    uf: "",
  });
  const [quantity, setQuantity] = useState<number>(0);

  const [newCoffe, setNewCoffe] = useState<CoffeesSubscriptionType[]>([]);
  useEffect(() => {
    const coffe = coffeesSubscription.filter((e) =>
      e.quantity! > 0 ? e : null
    );
    setNewCoffe(coffe);
  }, [coffeesSubscription]);
  return (
    <>
      <CoffeeContext.Provider
        value={{
          coffeesSubscription,
          setCoffeesSubscription,
          newCoffe,
          setNewCoffe,
          newForm,
          setNewForm,
          quantity,
          setQuantity,
        }}
      >
        {children}
      </CoffeeContext.Provider>
    </>
  );
}
