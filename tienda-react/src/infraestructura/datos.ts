import type { Producto } from "../dominio/tipos";

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Laptop ASUS Vivobook',
    marca: 'ASUS',
    precio: 2499.9,
    imagen: 'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png',
    stock: 12,
    categoria: 'laptops'
  },
  {
    id: 2,
    nombre: 'Laptop HP EliteBook',
    marca: 'HP',
    precio: 3299,
    imagen: 'https://cdn.dummyjson.com/products/images/laptops/HP%20Pavilion%2015%20Laptop/1.png',
    stock: 0,
    categoria: 'laptops'
  },
  {
    id: 3,
    nombre: 'Laptop Lenovo IdeaPad',
    marca: 'Lenovo',
    precio: 2899.9,
    imagen: 'https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png',
    stock: 3,
    categoria: 'laptops'
  }
];