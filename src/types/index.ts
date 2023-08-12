export interface ITariff {
  id: number;
  title: string;
  price: number | string;
  clubs: Array<IClub>;
  countClubs: number;
  subscription: Boolean;
}

export interface IClub {
  id: string;
  address: string;
}


export interface IFormValues {
  userName?: string;
  last_name?: string;
  clubs?: string;
  email?: string;
  phone?: number;
  birth_day?: Date;
  isCheck?: boolean;
}

export interface IProductValues {
  name: string,
  price: number,
  price_id: string,
}
