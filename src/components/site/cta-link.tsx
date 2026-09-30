import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaVariant = "primary" | "secondary" | "ghost";

const variants: Record<CtaVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

type RouterLinkProps = ComponentProps<typeof Link>;

export function CtaLink({
  children,
  className,
  variant = "primary",
  ...props
}: RouterLinkProps & { variant?: CtaVariant; children: ReactNode }) {
  return (
    <Link {...props} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  children,
  className,
  variant = "primary",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: CtaVariant;
  children: ReactNode;
}) {
  return (
    <a {...props} className={cn(variants[variant], className)}>
      {children}
    </a>
  );
}
