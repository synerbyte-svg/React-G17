import { createContext, useEffect, useState, type ReactNode } from "react";

interface ValorFavoritos {
    favoritos: number[];
    agregar: (id: number) => void;
    quitar: (id: number) => void;
    esFavorito: (id: number) => boolean;
}

const CLAVE_FAVORITOS = "techstore_favoritos";

function leerFavoritos(): number[] {
    try {
        const crudo: unknown = JSON.parse(
            localStorage.getItem(CLAVE_FAVORITOS) ?? "[]"
        );

        return Array.isArray(crudo)
            ? crudo.filter((id): id is number => Number.isInteger(id))
            : [];
    } catch {
        return [];
    }
}

export const FavoritosContext = createContext<ValorFavoritos | null>(null);

export function FavoritosProvider({ children }: { children: ReactNode }) {
    const [favoritos, setFavoritos] = useState<number[]>(leerFavoritos);

    useEffect(() => {
        localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
    }, [favoritos]);

    function agregar(id: number) {
        setFavoritos((actuales) =>
            actuales.includes(id) ? actuales : [...actuales, id]
        );
    }

    function quitar(id: number) {
        setFavoritos((actuales) => actuales.filter((actual) => actual !== id));
    }

    function esFavorito(id: number) {
        return favoritos.includes(id);
    }

    return (
        <FavoritosContext.Provider
            value={{ favoritos, agregar, quitar, esFavorito }}
        >
            {children}
        </FavoritosContext.Provider>
    );
}