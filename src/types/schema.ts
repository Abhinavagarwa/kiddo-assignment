export type ActionType =
  | "ADD_TO_CART"
  | "DEEP_LINK"
  | "APPLY_MYSTERY_GIFT_COUPON";

export interface Action {
  type: ActionType;
  payload?: Record<string, any>;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface BaseNode {
  id: string;
  type: string;
}

export interface BannerHeroNode extends BaseNode {
  type: "BANNER_HERO";
  imageUrl: string;
  action?: Action;
}

export interface ProductGridNode extends BaseNode {
  type: "PRODUCT_GRID_2X2";
  products: Product[];
}

export interface DynamicCollectionNode extends BaseNode {
  type: "DYNAMIC_COLLECTION";
  title: string;
  products: Product[];
}

export type HomeNode =
  | BannerHeroNode
  | ProductGridNode
  | DynamicCollectionNode;

export interface ThemeConfig {
  primary: string;
  background: string;
}

export interface HomepagePayload {
  theme: ThemeConfig;
  sections: HomeNode[];
}