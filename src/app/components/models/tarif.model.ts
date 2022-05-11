export interface Tarif {
  tarifName: string;
  speed: {
    upload: string;
    download: string;
  };
  benefit: {
    type1: string;
    type2: string;
    type3: string;
  };
  price: any;
}
