import { Button } from "../Button";
import { Container, Logo, Navbar, Link, Item, NavList, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Navbar>
        <Logo href="">Explore</Logo>
        <NavList>
          <Link href="#home">
            <Item>Home</Item>
          </Link>
          <Link href="#about">
            <Item>About</Item>
          </Link>
          <Link href="#about">
            <Item>Blog</Item>
          </Link>
          <Link href="#about">
            <Item>Gallery</Item>
          </Link>
        </NavList>

        <Wrapper>
          <Link color="blue">Log int</Link>
          <Button>Sign Up</Button>
        </Wrapper>
      </Navbar>
    </Container>
  );
};
