import { LayoutSection } from '../layouts/SectionLayout';
import { Title, ButtonLink } from '../components';
import { HomeNote } from '../components/HomeNote';

export const Home = () => {
  return (
    <LayoutSection className="items-start justify-center overflow-y-hidden">
      <div className="w-full max-w-lg h-full flex items-start gap-8 flex-col z-10 text-start">
        <Title Tag="h1" size="lg" className="text-start">
          Paper Notes
        </Title>
        <p className="text-xl font-bold">
          Embarque em uma jornada de inovação e eficiência com o Paper-Notes, o
          seu portal para anotações digitais. Descubra a liberdade de criar,
          organizar e planejar com a facilidade da escrita digital, enquanto
          mantém a nostalgia e a familiaridade do papel. Dê vida às suas ideias,
          faça suas metas decolarem e celebre a simplicidade de transformar
          pensamentos em ações, tudo isso no Paper-Notes, onde a tradição
          encontra o futuro.
        </p>

        <ButtonLink to="/register">Registre-se gratuitamente</ButtonLink>
      </div>

      <ul
        className="
          grid grid-cols-2 gap-4 max-w-2xl
          absolute right-0 top-0 
          [&_li:nth-child(odd)]:-mt-20 [&_li:nth-child(odd)]:mb-20
          [&_li:nth-child(even)]:-mt-4 [&_li:nth-child(even)]:mb-4
          "
      >
        <HomeNote color="red" />
        <HomeNote color="blue" />
        <HomeNote color="green" />
        <HomeNote color="yellow" />
        <HomeNote color="red" />
        <HomeNote color="blue" />
        <HomeNote color="green" />
        <HomeNote color="yellow" />
      </ul>
    </LayoutSection>
  );
};
