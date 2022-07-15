import { Container } from "./styles";

interface IButtonProps {
  children: string;
  outlined?: boolean;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};
