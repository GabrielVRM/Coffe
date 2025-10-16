import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  .no-coffe {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 35rem;
    height: 30rem;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    height: auto;
    width: 70rem;
  }

  .type-address {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .address {
    display: flex;
    flex-direction: column;

    overflow: hidden;
    width: 40rem;
    height: auto;
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;

    .form-address {
      display: grid;
      height: auto;
      grid-template-areas:
        "cep . ."
        "rua rua rua"
        "numero complemento complemento"
        "bairro cidade uf ";

      gap: 1rem;
      margin-top: 2rem;
      span {
        font-size: 14px;
        color: red;
      }
    }
  }
  .subtitle {
    display: flex;
    width: 100%;
    justify-content: start;
    gap: 0.3rem;
    .icon {
      margin-top: 0.2rem;
      color: ${(props) => props.theme.productYellowDark};
    }
    div {
      h2 {
        font-size: larger;
      }
    }
  }
  .checkout {
    text-align: center;
    width: 28rem;
    height: auto;
    background: ${(props) => props.theme.baseCard};
    text-align: center;
    border-top-right-radius: 18px;
    border-bottom-left-radius: 18px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    .content-items-checkout {
      overflow: auto;
    }
    .items-checkout {
      display: flex;
      justify-content: center;
      width: auto;
      gap: 2rem;
      height: 6rem;
      padding: 1rem;
      img {
        width: 4rem;
      }
    }

    .items-amount {
      display: flex;
      flex-direction: column;
      .total_amount-title {
        font-weight: bolder;
        font-size: 1.6rem;
      }
      .total_amount {
        font-weight: bolder;
        font-size: 1.6rem;
      }
      div {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 1rem;
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .items-quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 10px;
      border-radius: 8px;
      background: ${(props) => props.theme.baseButton};
      .btn {
        margin-top: 0.1rem;
        border: none;
        background: inherit;
        color: ${(props) => props.theme.productPurpleDark};
        cursor: pointer;
      }
    }
  }
  .btn-confirm {
    margin-top: 3rem;
    button {
      width: 100%;
      padding: 0.3rem;
      background: ${(props) => props.theme.productYellow};
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .divider {
    margin: 2rem;
    border: 1px solid ${(props) => props.theme.baseButton};
  }
  .type-payments {
    display: flex;
    flex-direction: column;

    overflow: hidden;
    width: 40rem;
    height: 12.9rem;
    background: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
  }
  .card-credit {
    width: 100%;
    margin-top: 1rem;
    gap: 1rem;
    display: flex;
    text-align: start;
  }
`;
export const AddressInput = styled.input<{ area?: string }>`
  ${({ area }) => area && `grid-area: ${area};`}
  width:100%;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme.baseInput};
  &:focus {
    border: none;
  }
`;

export const ButtonTypePayments = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.31rem;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.baseButton};
  cursor: pointer;
`;
