import BannerHero
from "../components/BannerHero/BannerHero";

import ProductGrid
from "../components/ProductGrid/ProductGrid";

import DynamicCollection
from "../components/DynamicCollection/DynamicCollection";

export const ComponentRegistry = {
  BANNER_HERO: BannerHero,

  PRODUCT_GRID_2X2: ProductGrid,

  DYNAMIC_COLLECTION:
    DynamicCollection,
} as const;