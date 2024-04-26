export enum RealtyType {
  FLAT = 'Flat',
  HOUSE = 'House',
}

export interface RealtyObject {
  type: RealtyType;
  cost: number;
  costPerMeter: number;
  rooms: number;
  area: number;
  floor?: number;
  floorTotal: number;
  address: string;
  images: string[];
}
