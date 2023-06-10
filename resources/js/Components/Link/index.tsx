import { cn } from "@/lib/utils";
import { FunctionComponent, ReactNode } from "react";

interface LinkProps {
  href: string,
  children: ReactNode,
  className?: string,
  target?: string
}

const Link: FunctionComponent<LinkProps> = ({ href, children, className, target, ...rest }) => {
  return (
    <>
      <a href={href} className={cn('', className)} target={target} {...rest}>{children}</a>
    </>
  );
}

export default Link;