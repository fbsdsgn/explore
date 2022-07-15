import imgPlanet from "../../assets/svg/planet.svg"
import { Button } from "../Button";
import {
  Container,
  Content,
  Description,
  ImgPlanet,
  Title,
  Wrapper,
} from "./styles";

export const Hero = () => {
  return (
    <Container>
      <Content>
        <Title>Explore The Universe</Title>
        <Description>
          Lorem ipsum dolor sit emet. Lorem ipsum dolor sit emet lorem.
        </Description>
        <Wrapper>
          <Button>Sign In</Button>
          <Button outlined>Learn More</Button>
        </Wrapper>
        <ImgPlanet src={imgPlanet} />
      </Content>
    </Container>
  );
};
