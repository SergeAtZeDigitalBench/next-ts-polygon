export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
