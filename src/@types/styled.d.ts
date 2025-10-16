import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemesType = typeof defaultTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemesType {}
}

export interface CoffeesSubscriptionType {
  id?: number;
  img: string;
  title: string;
  subscription: string[];
  paragraph: string;
  amount: number;
  quantity?: number;
}
