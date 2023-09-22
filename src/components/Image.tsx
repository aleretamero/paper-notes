import { tv } from 'tailwind-variants';
import { ComponentPropsWithRef } from 'react';

const imageVariants = tv({
  base: 'flex justify-center items-center',
});

interface IImageProps extends ComponentPropsWithRef<'img'> {
  src: string;
  alt: string;
}

export const Image = ({ src, alt, className, ...props }: IImageProps) => {
  return (
    <div className={imageVariants({ className })}>
      <img className="block w-full" src={src} alt={alt} {...props} />
    </div>
  );
};
