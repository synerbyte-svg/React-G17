import { Link } from "react-router-dom";
import { useFavoritos } from "../../aplicacion/useFavoritos";
import { useState, useEffect } from "react";
import { obtenerProductos } from "../../infraestructura/api";
import type { Producto } from "../../dominio/tipos";
import ProductCard from "../components/ProductCard";

export default function Favoritos() {
    const { favoritos } = useFavoritos();
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        obtenerProductos().then((resultado) => {
            setProductos(resultado.productos);
        });
    }, []);

    const productosFavoritos = productos.filter((producto) =>
        favoritos.includes(producto.id)
    );

    if (favoritos.length === 0) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">Mis equipos favoritos</h1>
                <p className="mt-3">Todavía no tienes equipos favoritos.</p>
                <Link to="/" className="underline">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <section className="p-6">
            <h1 className="mb-6 text-2xl font-bold">Mis equipos favoritos</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productosFavoritos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregar={() => {}}
                    />
                ))}
            </div>
        </section>
    );
}