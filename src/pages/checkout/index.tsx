import { useContext, useEffect, useState } from "react";
import {
  CoffeeContext,
  type NewFormContextType,
} from "../../context/CoffeeContext";

import { AddressInput, ButtonTypePayments, Container } from "./styles";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

let t = 0;
export function Checkout() {
  const { newCoffe, setNewCoffe, setNewForm, setQuantity } =
    useContext(CoffeeContext);

  const [totalAmount, setTotalAmount] = useState(0);

  const newFormValidationSchema = zod.object({
    rua: zod.string().min(1, "Informe o nome da rua"),
    numero: zod.string().min(1, "Informe o numero da sua casa"),
    complemento: zod.string().min(1, "Informe o nome do seu complemento"),
    bairro: zod.string().min(1, "Informe o nome do bairro "),
    cidade: zod.string().min(1, "Informe o nome da cidade"),
    uf: zod.string().min(1, "Informe o seu estado"),
    cep: zod.string().min(1, "Informe o seu cep"),
  });
  const amount: number[] = [];
  useEffect(() => {
    newCoffe.map((e) => amount.push(Number(e.amount) * Number(e.quantity)));
    setTotalAmount(amount.reduce((acc, currentValue) => acc + currentValue, 0));
  }, [newCoffe]);
  const tax = 3.5;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  });
  interface HandleType {
    id: number;
    addition: string;
  }
  function handleQuantityCoffee({ id, addition }: HandleType) {
    switch (addition) {
      case "-":
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        newCoffe &&
          newCoffe.map((e) =>
            e.id === id && (e.quantity ?? 0) > 1
              ? setNewCoffe((state) =>
                  state?.map((e) =>
                    e.id === id ? { ...e, quantity: (e.quantity ?? 0) - 1 } : e
                  )
                )
              : e
          );

        break;
      case "+":
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        newCoffe &&
          newCoffe.map((e) =>
            e.id === id
              ? setNewCoffe((state) =>
                  state?.map((e) =>
                    e.id === id ? { ...e, quantity: (e.quantity ?? 0) + 1 } : e
                  )
                )
              : e
          );

        break;
    }
  }

  function handleRemovedCoffee(id: number) {
    const removed = newCoffe.filter((e) => e.id !== id);
    setNewCoffe(removed);
  }

  const handleSubmitInput = (data: NewFormContextType) => {
    setNewForm(data);
    setQuantity(0);
    // reset();
    navigate("/confirmed");
  };

  console.log("re-renderizei o component" + t++);
  return (
    <Container onSubmit={handleSubmit(handleSubmitInput)}>
      {newCoffe.length > 0 ? (
        <div className="content">
          <div className="content-address">
            <span>
              <h1>Complete seu pedido</h1>
            </span>

            <div className="address">
              <div>
                <div className="subtitle">
                  <div className="icon">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h2>Endereço de Entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </div>
                <div className="form-address">
                  <label style={{ gridArea: "cep" }}>
                    <AddressInput placeholder="CEP" {...register("cep")} />
                    {errors.cep && <span>{errors.cep.message}</span>}
                  </label>

                  <label style={{ gridArea: "rua" }}>
                    <AddressInput placeholder="rua" {...register("rua")} />
                    {errors.rua && <span>{errors.rua.message}</span>}
                  </label>

                  <label style={{ gridArea: "numero" }}>
                    <AddressInput
                      placeholder="Número"
                      {...register("numero")}
                    />
                    {errors.numero && <span>{errors.numero.message}</span>}
                  </label>

                  <label style={{ gridArea: "complemento" }}>
                    <AddressInput
                      placeholder="Complemento"
                      {...register("complemento")}
                    />
                    {errors.complemento && (
                      <span>{errors.complemento.message}</span>
                    )}
                  </label>

                  <label style={{ gridArea: "bairro" }}>
                    <AddressInput
                      placeholder="Bairro"
                      {...register("bairro")}
                    />
                    {errors.bairro && <span>{errors.bairro.message}</span>}
                  </label>

                  <label style={{ gridArea: "cidade" }}>
                    <AddressInput
                      placeholder="Cidade"
                      {...register("cidade")}
                    />
                    {errors.cidade && <span>{errors.cidade.message}</span>}
                  </label>

                  <label style={{ gridArea: "uf" }}>
                    <AddressInput placeholder="UF" {...register("uf")} />
                    {errors.uf && <span>{errors.uf.message}</span>}
                  </label>
                </div>
              </div>
            </div>
            <div className="type-payments">
              <div className="subtitle">
                <div className="icon">
                  <CurrencyDollarIcon size={26} color="#4B2995" />
                </div>
                <div>
                  <h2>Endereço de Entrega</h2>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
              <div className="card-credit">
                <ButtonTypePayments type="button">
                  <CreditCardIcon color="#4B2995" />
                  <span>Cartão de crédito</span>
                </ButtonTypePayments>
                <ButtonTypePayments type="button">
                  <CreditCardIcon color="#4B2995" />
                  <span>Cartão de débito</span>
                </ButtonTypePayments>
                <ButtonTypePayments type="button">
                  <CreditCardIcon color="#4B2995" />
                  <span>Dinheiro</span>
                </ButtonTypePayments>
              </div>
            </div>
          </div>

          <div className="">
            <span>
              <h1>Cafés selecionados</h1>
            </span>
            <div className="checkout">
              <div className="content-items-checkout">
                {newCoffe.map((e) => (e.quantity ?? 0) > 0) &&
                  newCoffe.map((e) => {
                    const id: number = e.id ?? 0;
                    return (
                      <>
                        <div className="items-checkout">
                          <div>
                            <img src={e.img} />
                          </div>
                          <div className="items">
                            <span>{e.title}</span>
                            <div className="items-quantity">
                              <button
                                className="btn"
                                type="button"
                                onClick={() =>
                                  handleQuantityCoffee({ id, addition: "-" })
                                }
                              >
                                <span>-</span>
                              </button>
                              <span>{e.quantity}</span>
                              <button
                                className="btn"
                                type="button"
                                onClick={() =>
                                  handleQuantityCoffee({ id, addition: "+" })
                                }
                              >
                                <span>+</span>
                              </button>
                              <button
                                className="btn"
                                type="button"
                                onClick={() => handleRemovedCoffee(id)}
                              >
                                <TrashIcon size={20} color="#4B2995" />
                                <span>Remover</span>
                              </button>
                            </div>
                          </div>
                          <div>
                            <span>
                              R${" "}
                              {Number(e.amount * (e.quantity ?? 0)).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="divider"></div>
                      </>
                    );
                  })}
              </div>

              <>
                <div className="items-amount">
                  <div>
                    <p> Total de itens</p>
                    <p>R$ {totalAmount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <p>R$ {totalAmount ? tax : 0}</p>
                  </div>
                  <div>
                    <p className="total_amount-title">Total</p>
                    <p className="total_amount">
                      R$ {(totalAmount ? totalAmount + tax : 0).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="btn-confirm">
                  <button type="submit">Confirmar Pedido</button>
                </div>
              </>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-coffe">
          <h1>
            Não há cafés selecionados, por favor volte e escolha seu café! ☕
          </h1>
        </div>
      )}
    </Container>
  );
}
