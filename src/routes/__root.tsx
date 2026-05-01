import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VELTOR — Criação de Sites Premium" },
      {
        name: "description",
        content:
          "VELTOR cria sites premium, rápidos e estratégicos para empresas que querem autoridade, credibilidade e conversão no digital.",
      },
      { name: "author", content: "VELTOR" },
      { name: "theme-color", content: "#000000" },
      { property: "og:title", content: "VELTOR — Criação de Sites Premium" },
      { name: "twitter:title", content: "VELTOR — Criação de Sites Premium" },
      { name: "description", content: "VELTOR builds premium websites that elevate brands with a sophisticated, minimalist design focused on conversion." },
      { property: "og:description", content: "VELTOR builds premium websites that elevate brands with a sophisticated, minimalist design focused on conversion." },
      { name: "twitter:description", content: "VELTOR builds premium websites that elevate brands with a sophisticated, minimalist design focused on conversion." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/759f51fc-162e-4e4b-89c5-8f69da240bee" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/759f51fc-162e-4e4b-89c5-8f69da240bee" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
