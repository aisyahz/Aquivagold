export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  price: string;
  images: string[];
  directions: string;
  faqs: { question: string; answer: string }[];
  reviews: { rating: number; text: string; author: string; date: string }[];
  bgClass: string;
}

export interface WhyChoose {
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  rating: number;
  text: string;
  author: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  state: string;
  ageRange: string;
  productInterested: string;
  quantity: string;
  budgetRange: string;
  additionalNotes: string;
}
