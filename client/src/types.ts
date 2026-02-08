export interface Project {
  _id?: string;
  id?: string; // Static ID for URL routing
  title: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  impact?: string;
  gallery?: string[];
  image: string;
  category: string;
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
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
