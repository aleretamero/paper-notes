import { Image } from '../components/Image';
import presentation from '../assets/images/presentation.png';

import { LayoutSection } from '../layouts/SectionLayout';
import { Title, ButtonLink } from '../components';

export const Home = () => {
  return (
    <LayoutSection className="flex-row items-center justify-center">
      <div className="w-1/2 h-full flex justify-center items-center gap-8 flex-col">
        <Title Tag="h1">Paper Notes</Title>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
          odio, reiciendis quas deserunt soluta rem quis. Ipsum, ducimus culpa
          quasi temporibus facilis perferendis, aliquid veniam ratione id
          repudiandae doloribus?
        </p>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut alias
          odio, reiciendis quas deserunt soluta rem quis. Ipsum, ducimus culpa
          quasi temporibus facilis perferendis, aliquid veniam ratione id
          repudiandae doloribus?
        </p>
        <ButtonLink to="/register">Registre-se gratuitamente</ButtonLink>
      </div>
      <Image src={presentation} alt="" />
    </LayoutSection>
  );
};
