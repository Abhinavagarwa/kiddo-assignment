import { z } from "zod";

const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  price: z.number(),
});

const BannerSchema = z.object({
  id: z.string(),
  type: z.literal("BANNER_HERO"),
  imageUrl: z.string(),
}).passthrough();

const ProductGridSchema = z.object({
  id: z.string(),
  type: z.literal("PRODUCT_GRID_2X2"),
  products: z.array(ProductSchema),
}).passthrough();

const DynamicCollectionSchema = z.object({
  id: z.string(),
  type: z.literal("DYNAMIC_COLLECTION"),
  title: z.string(),
  products: z.array(ProductSchema),
}).passthrough();

const UnknownComponentSchema = z.object({
  id: z.string(),
  type: z.string(),
}).passthrough();

export const HomepageSchema = z.object({
  theme: z.object({
    primary: z.string(),
    background: z.string(),
  }),

  sections: z.array(
    z.union([
      BannerSchema,
      ProductGridSchema,
      DynamicCollectionSchema,
      UnknownComponentSchema,
    ])
  ),
});

export type HomepagePayload =
  z.infer<typeof HomepageSchema>;