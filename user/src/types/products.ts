

export type TagsDetailType = {
  id: string;
  type: string;
  value?: string;
  productDetail?: ProductDetailType[];
  productVariant?: ProductVariantType[];
};

export type ProductVariantType = {
  id: string;
  attributes?: TagsDetailType[];
  originPrice: number;
  displayPrice: number;
  stockQuantity?: number;
  hasImei: boolean;
  imeiList?: string[];
};

export type ProductDetailType = {
  id: string;
  imgDisplay?: ImageDetailType[];
  color?: ColorDetailType[];
  variants?: ProductVariantType[];
  brand?: TagsDetailType;
  attributes?: TagsDetailType[];
  description?: string;
  tutorial?: string;
};

export type ImageDetailType = {
  id: string;
  url: string;
  link?: string[];
  productDetail?: ProductDetailType;
};

export type ColorDetailType = {
  id: string;
  colorName: string;
  colorHex?: string;
  productDetail?: ProductDetailType;
};

export type FaultyProductType = {
  id: string;
  quantity: number;
  imei?: string[];
  reason?: string[];
  notes?: string[];
  created_at?: Date;
  updated_at?: Date;
};

