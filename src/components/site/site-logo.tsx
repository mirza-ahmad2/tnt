import logoLight from "@/assets/logo-light.png";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imgClassName?: string;
  markOnly?: boolean;
};

export function SiteLogo({ className, imgClassName, markOnly = false }: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={logoLight}
        alt="TTN Talent"
        width={markOnly ? 120 : 180}
        height={markOnly ? 70 : 120}
        decoding="async"
        className={cn(
          "h-auto w-auto object-contain object-left",
          markOnly ? "h-8 w-auto sm:h-9" : "h-10 w-auto sm:h-11 md:h-12",
          imgClassName,
        )}
      />
    </span>
  );
}
