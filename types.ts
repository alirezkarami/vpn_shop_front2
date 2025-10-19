
export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  isPopular: boolean;
}

// Fix: Add Testimonial interface, which was missing and causing an import error in components/Testimonials.tsx.
export interface Testimonial {
  quote: string;
  avatarUrl: string;
  author: string;
  role: string;
}
