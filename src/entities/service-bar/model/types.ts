export interface Service {
  title: string;
  price?: string | number;
  content?: {
    type: 'text' | 'list';
    payload: { type: string; cost: 'string' }[] | string[];
  };
}
