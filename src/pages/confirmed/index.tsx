import { Container } from "./styles";
import motoboy from "../../assets/Illustration.png";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import {
  CurrencyDollarIcon,
  MapPinIcon,
  TimerIcon,
} from "@phosphor-icons/react";
export function Confirmed() {
  const { newForm } = useContext(CoffeeContext);

  return (
    <Container>
      {newForm && (
        <>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <div className="content">
            <div className="info">
              <div>
                <span className="map">
                  <MapPinIcon size={28} color="white" />
                </span>
                <span>
                  Entrega em {newForm.rua}, {newForm.numero} {newForm.bairro} -{" "}
                  {newForm.cidade}, {newForm.uf}
                </span>
              </div>
              <div>
                <span className="timer">
                  <TimerIcon size={28} color="white" />
                </span>
                <span>Previsão de entrega 20 min - 30 min</span>
              </div>
              <div>
                <span className="current">
                  <CurrencyDollarIcon size={28} color="white" />
                </span>

                <span>Pagamento na entrega Cartão de Crédito</span>
              </div>
            </div>
            <div>
              <img src={motoboy} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
