import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { coatingServices, flooringServices } from "@/data/services";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Logo size="sm" className="shrink-0" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <ServicesDropdown />
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <LocationsDropdown />
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button
            asChild
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-x py-4 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileGroup
              label="Services"
              open={openMobile === "s"}
              onToggle={() => setOpenMobile(openMobile === "s" ? null : "s")}
            >
              <MobileLink to="/services" onClick={() => setOpen(false)}>
                All Services
              </MobileLink>
              <div className="mt-2 mb-1 px-3 text-xs uppercase tracking-widest text-primary">
                Concrete Coatings
              </div>
              {coatingServices.map((s) => (
                <a
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium hover:bg-surface-elevated hover:text-primary transition-colors"
                >
                  {s.name}
                </a>
              ))}
              <div className="mt-2 mb-1 px-3 text-xs uppercase tracking-widest text-primary">
                Flooring
              </div>
              {flooringServices.map((s) => (
                <a
                  href={`/services/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-3 py-2 text-sm font-medium hover:bg-surface-elevated hover:text-primary transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </MobileGroup>
            <MobileLink to="/projects" onClick={() => setOpen(false)}>
              Projects
            </MobileLink>
            <MobileLink to="/blog" onClick={() => setOpen(false)}>
              Blog
            </MobileLink>
            <MobileGroup
              label="Locations"
              open={openMobile === "l"}
              onToggle={() => setOpenMobile(openMobile === "l" ? null : "l")}
            >
              {locations.map((l) => (
                <MobileLink
                  key={l.slug}
                  to="/locations/$city"
                  params={{ city: l.slug }}
                  onClick={() => setOpen(false)}
                >
                  {l.city}
                </MobileLink>
              ))}
            </MobileGroup>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </MobileLink>
            <a
              href={site.phoneHref}
              className="mt-3 flex items-center gap-2 px-3 py-2 text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
      className="px-3 py-2 text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function ServicesDropdown() {
  return (
    <div className="group relative">
      <Link
        to="/services"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
        activeProps={{ className: "text-primary" }}
      >
        Services <ChevronDown className="h-3 w-3" />
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="w-[640px] rounded-lg border border-border bg-popover p-6 shadow-2xl grid grid-cols-2 gap-6">
          <div className="col-span-2 border-b border-border pb-3">
            <Link
              to="/services"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              All Services
            </Link>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Concrete Coatings
            </div>
            <ul className="space-y-1">
              {coatingServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="block rounded px-2 py-1.5 text-sm hover:bg-surface-elevated hover:text-primary transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              Flooring
            </div>
            <ul className="space-y-1">
              {flooringServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="block rounded px-2 py-1.5 text-sm hover:bg-surface-elevated hover:text-primary transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationsDropdown() {
  return (
    <div className="group relative">
      <Link
        to="/locations"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
        activeProps={{ className: "text-primary" }}
      >
        Locations <ChevronDown className="h-3 w-3" />
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="w-56 rounded-lg border border-border bg-popover p-3 shadow-2xl">
          <Link
            to="/locations"
            className="block rounded px-2 py-1.5 text-sm font-semibold hover:bg-surface-elevated hover:text-primary"
          >
            All Service Areas
          </Link>
          <div className="my-1 h-px bg-border" />
          {locations.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$city"
              params={{ city: l.slug }}
              className="block rounded px-2 py-1.5 text-sm hover:bg-surface-elevated hover:text-primary transition-colors"
            >
              {l.city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  to,
  params,
  onClick,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      onClick={onClick}
      className="block rounded px-3 py-2 text-sm font-medium hover:bg-surface-elevated hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium hover:bg-surface-elevated"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="ml-2 mt-1 border-l border-border pl-2">{children}</div>}
    </div>
  );
}
