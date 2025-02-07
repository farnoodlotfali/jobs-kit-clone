import { ICategory } from "./category";
import { ICompany } from "./company";
import { ISpeciality } from "./speciality";
import { ISubCategory } from "./subCategory";

export interface IJob {
  category: ICategory;
  company: ICompany;
  country: string;
  datePosted: string;
  employmentType: string;
  expirationDate: string;
  featured: boolean;
  id: number;
  jobType: string;
  location: string;
  positionLevel: string;
  shares: number;
  speciality: ISpeciality;
  subCategory: ISubCategory;
  title: string;
  views: number;
}
