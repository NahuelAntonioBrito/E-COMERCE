import { ReactNode, useState } from "react";

type Props = { children: ReactNode };

function boton({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  return (
    <button
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      onClick={handleClick}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default boton;
