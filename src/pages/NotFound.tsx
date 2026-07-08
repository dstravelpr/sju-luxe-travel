import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Página no encontrada | SJU Luxe Travel"
        description="La página que buscas no existe. Vuelve al inicio o explora nuestros destinos de lujo."
        noindex
        suppressCanonical
      />
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-lg text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Error 404</p>
          <h1 className="mb-4 font-heading text-4xl text-foreground">Página no encontrada</h1>
          <p className="mb-8 text-muted-foreground">
            La página que buscas no existe o fue movida. Prueba con uno de los enlaces de abajo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="text-primary underline hover:text-primary/80">Inicio</Link>
            <Link to="/destinations" className="text-primary underline hover:text-primary/80">Destinos</Link>
            <Link to="/blog" className="text-primary underline hover:text-primary/80">Blog</Link>
            <Link to="/contact" className="text-primary underline hover:text-primary/80">Contacto</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
