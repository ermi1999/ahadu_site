import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <div className="typewriter">
      <h1
        className={classNames(
          "font-bold text-[1.2rem] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal sm:leading-normal md:leading-relaxed lg:leading-loose xl:leading-loose",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "text-[0.7rem] sm:text-[1rem] md:text-[1.4rem] lg:text-3xl xl:text-4xl text-light-white",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return (
    <section className="flex items-center justify-center pt-20 pb-20 flex-col">
      {children}
    </section>
  );
};
