
// Fix: Import the 'Testimonial' type, which is used by the new 'fetchTestimonials' function.
import { PricingPlan, Testimonial } from '../types';

// این یک فایل API شبیه‌سازی شده است.
// می‌توانید این توابع را با فراخوانی‌های واقعی API به بک‌اند جنگو خود جایگزین کنید.
// به عنوان مثال، با استفاده از `fetch` یا کتابخانه‌ای مانند `axios`.

export const fetchPricingPlans = async (): Promise<PricingPlan[]> => {
  console.log("در حال دریافت پلن‌های قیمت‌گذاری از سرور...");
  // شبیه‌سازی تاخیر شبکه
  await new Promise(resolve => setTimeout(resolve, 500));

  const plans: PricingPlan[] = [
    {
      name: 'پایه',
      price: { monthly: 250, yearly: 2500 },
      features: ['۱۰ گیگابایت ترافیک', '۱ دستگاه', 'پشتیبانی پایه', 'اتصال امن'],
      isPopular: false,
    },
    {
      name: 'حرفه‌ای',
      price: { monthly: 550, yearly: 5500 },
      features: ['۱۰۰ گیگابایت ترافیک', '۵ دستگاه', 'پشتیبانی اولویتی', 'مسدودکننده تبلیغات', 'بالاترین سرعت'],
      isPopular: true,
    },
    {
      name: 'تجاری',
      price: { monthly: 1500, yearly: 15000 },
      features: ['ترافیک نامحدود', 'دستگاه‌های نامحدود', 'پشتیبانی اختصاصی ۲۴/۷', 'آی‌پی ثابت'],
      isPopular: false,
    },
  ];

  // In a real application, you would do something like:
  // const response = await fetch('https://your-api.com/plans');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch plans');
  // }
  // const data = await response.json();
  // return data;

  return plans;
};

// Fix: Add the 'fetchTestimonials' function, which was missing and causing an import error in components/Testimonials.tsx.
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  console.log("در حال دریافت نظرات از سرور...");
  // شبیه‌سازی تاخیر شبکه
  await new Promise(resolve => setTimeout(resolve, 500));

  const testimonials: Testimonial[] = [
    {
      quote: 'سرویس V2Fly زندگی دیجیتال من رو متحول کرد. سرعتش فوق‌العاده‌ست و دیگه نگران حریم خصوصی‌م نیستم. واقعا توصیه می‌کنم!',
      author: 'رضا احمدی',
      role: 'توسعه‌دهنده نرم‌افزار',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      quote: 'به عنوان یه فریلنسر، دسترسی پایدار و سریع به اینترنت جهانی برام حیاتیه. V2Fly تمام انتظاراتم رو برآورده کرده. پشتیبانی‌شون هم عالیه.',
      author: 'مریم صالحی',
      role: 'طراح گرافیک',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      quote: 'برای ترید و دسترسی به بازارهای مالی، یک اتصال امن و بدون قطعی نیاز داشتم. با V2Fly، با خیال راحت به کارم می‌رسم و هیچ موقعیت مهمی رو از دست نمی‌دم.',
      author: 'علی کریمی',
      role: 'معامله‌گر ارز دیجیتال',
      avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return testimonials;
};
