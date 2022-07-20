import { Company } from "./company";

export type User = {
  id: number,
  image: string,
  name: string,
  email: string,
  phone: string,
  company: Company,
  website: string
}