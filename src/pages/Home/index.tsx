import * as Styled from './styles';

import { Image } from '../../components/Image';
import presentation from '../../assets/images/presentation.png';

import { Section } from '../../layouts/Section';
import { Title, ButtonLink } from '../../components';

export const Home = () => {
  return (
    <Section bg="var(--primary-light)">
      <Styled.Container>
        <Styled.Content>
          <Title tag="h1">Paper Notes</Title>
          <Styled.Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
            odio, reiciendis quas deserunt soluta rem quis. Ipsum, ducimus culpa
            quasi temporibus facilis perferendis, aliquid veniam ratione id
            repudiandae doloribus?
          </Styled.Paragraph>
          <Styled.Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
            odio, reiciendis quas deserunt soluta rem quis. Ipsum, ducimus culpa
            quasi temporibus facilis perferendis, aliquid veniam ratione id
            repudiandae doloribus?
          </Styled.Paragraph>
          <ButtonLink to="/register">Registre-se gratuitamente</ButtonLink>
        </Styled.Content>
        <Image src={presentation} alt="" />
      </Styled.Container>
    </Section>
  );
};
