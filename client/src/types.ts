export interface Project {
  _id?: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  createdAt?: string;
}

export interface Enquiry {
  _id?: string;
  name: string;
  email: string;
  service: string;
  message: string;
  createdAt?: string;
}
