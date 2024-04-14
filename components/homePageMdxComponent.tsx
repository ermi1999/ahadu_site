import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";

interface HomepageMdxProps {
  code: string;
}

interface componentProps {
  className?: string | undefined;
}

const components = {
  pre: ({ className, ...props }: componentProps) => (
    <>
      <div className="flex flex-row items-center rounded-lg rounded-b-none px-2">
        <div className="space-x-2 flex flex-row py-2">
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
        </div>
      </div>
      <pre
        className={cn(
          "overflow-x-auto rounded-lg rounded-t-none border-t py-4 flex",
          className
        )}
        {...props}
      />
    </>
  ),
  code: ({ className, ...props }: componentProps) => (
    <code
      className={cn(
        "relative rounded px-[0.1rem] md:px-[0.3rem] py-[0.1rem] md:py-[0.2] font-mono text-xs md:text-sm",
        className
      )}
      {...props}
    />
  ),
};
export default function HomepageMdx({ code }: HomepageMdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
