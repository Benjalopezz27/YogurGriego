import { z, defineCollection } from 'astro:content';

const recetasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(200),
    tiempoPreparacion: z.number(),
    porciones: z.number(),
    dificultad: z.enum(['fácil', 'media', 'avanzada']),
    categoria: z.enum(['desayuno', 'postre', 'salado', 'bebida', 'snack']),
    tagsDieteticos: z.array(z.string()).optional(),
    ingredientes: z.array(z.string()),
    imagenPrincipal: z.string(),
    featured: z.boolean().default(false),
    link: z.string().url().optional(),
  }),
});

const productosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    descripcionCorta: z.string().max(200),
    precio: z.number(),
    peso: z.string(),
    proteinas: z.number(),
    certificaciones: z.array(z.string()),
    sabores: z.array(z.string()).optional(),
    imagen: z.string(),
    disponible: z.boolean().default(true),
    destacado: z.boolean().default(false),
    whatsappMsg: z.string().optional(),
  }),
});

export const collections = {
  recetas: recetasCollection,
  productos: productosCollection,
};
