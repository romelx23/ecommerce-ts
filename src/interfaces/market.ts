export interface MarketForm {
  name: string;
  description: string;
  address: string;
  phone: string;
  owner: string;
  email: string;
  schedule: string;
  category: string;
  social: string;
  socialMedia: MarketSocialMedia[];
  image: string;
}

export interface MarketSocialMedia{
    name: string;
    url: string;
}