import classNames from "classnames";
import { Button } from "./customButton";

interface HeroButtonProps {
  children: React.ReactNode;
}

interface HeroButtonElementProps {
  children: React.ReactNode;
  className?: string;
  lang: "am" | "en";
}

export const HeroPrimaryButton = ({
  children,
  className,
  lang,
}: HeroButtonElementProps) => {
  return (
    <Button
      href={`/${lang}/docs`}
      variant="primary"
      size="large"
      className={classNames(
        "translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-sm",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const HeroSecondaryButton = ({
  children,
  className,
}: HeroButtonElementProps) => {
  return (
    <Button
      href="https://github.com/ermi1999/ahadu.git"
      target="_blank"
      variant="secondary"
      size="small"
      className={classNames(
        "translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const HeroButton = ({ children }: HeroButtonProps) => {
  return (
    <section className="flex items-center justify-center pt-20 flex-row">
      {children}
    </section>
  );
};
