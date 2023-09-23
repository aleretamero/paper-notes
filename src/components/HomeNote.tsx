import { VariantProps, tv } from 'tailwind-variants';

const variants = tv({
  base: 'flex flex-col justify-between gap-4 border-2 p-2 text-base',
  variants: {
    color: {
      red: 'bg-red-600 border-red-900',
      green: 'bg-green-600 border-green-900',
      blue: 'bg-blue-600 border-blue-900',
      yellow: 'bg-yellow-600 border-yellow-900',
    },
  },
});

interface IHomeNoteProps extends VariantProps<typeof variants> {}

export const HomeNote = ({ color }: IHomeNoteProps) => {
  return (
    <li className={`${variants({ color })} min-h-[15rem]`}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        recusandae asperiores nihil fugit aspernatur nesciunt ad corrupti rem!
      </p>
      <span className="font-bold text-lg">@JohnDoe</span>
    </li>
  );
};
