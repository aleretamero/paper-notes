import { LayoutSection } from '../layouts/SectionLayout';
import { Title, ButtonLink } from '../components';

export const Home = () => {
  return (
    <LayoutSection
      className="
        grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center
        bg-violet-400 dark:bg-violet-950 relative overflow-y-hidden
        before:hidden before:md:block
        before:absolute before:top-0 before:right-0
        before:bg-notes-bg before:bg-no-repeat
        before:w-1/2 before:h-full before:bg-cover
        
      "
    >
      <div
        className="
          w-full h-full z-10 
          flex items-center md:items-start gap-12 flex-col
          text-center md:text-start
        "
      >
        <Title
          Tag="h1"
          size="lg"
          className="text-center md:text-start text-zinc-900 dark:text-zinc-100"
        >
          PaperNotes
        </Title>
        <p
          className="
            text-xl font-bold max-w-md md:max-w-[39.75rem]
            text-center md:text-start text-zinc-900 dark:text-zinc-100
          "
        >
          Embarque em uma jornada de inovação e eficiência com o Paper-Notes, o
          seu portal para anotações digitais.
        </p>

        <ButtonLink to="/register">Registre-se gratuitamente</ButtonLink>
      </div>
    </LayoutSection>
  );
};
