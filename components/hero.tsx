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
          "font-bold sm:text-3xl md:text-[2.7rem] lg:text-[3.60rem] xl:text-6xl leading-normal sm:leading-normal md:leading-relaxed lg:leading-loose xl:leading-loose",
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
    <section className="flex items-center justify-center pb-20 flex-col">
      {children}
    </section>
  );
};
