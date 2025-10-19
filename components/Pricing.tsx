import React, { useState, useEffect } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import type { PricingPlan } from '../types';
import { fetchPricingPlans } from '../services/api';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlans = async () => {
      try {
        setLoading(true);
        const fetchedPlans = await fetchPricingPlans();
        setPlans(fetchedPlans);
      } catch (error) {
        console.error("Failed to fetch pricing plans:", error);
      } finally {
        setLoading(false);
      }
    };
    getPlans();
  }, []);

  if (loading) {
    return (
      <section id="pricing" className="py-20 md:py-28">
        <div className="text-center text-slate-400">در حال بارگذاری قیمت‌ها...</div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">پلن‌های منعطف برای همه</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-loose">پلنی را انتخاب کنید که برای شما مناسب است. بدون هزینه‌های پنهان، هر زمان خواستید لغو کنید.</p>
        </div>

        <div className="flex justify-center items-center gap-2 rounded-full bg-slate-800 p-1 mb-16">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${billingCycle === 'monthly' ? 'bg-cyan-400 text-slate-900' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              ماهانه
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${billingCycle === 'yearly' ? 'bg-cyan-400 text-slate-900' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              سالانه (۲۰٪ تخفیف)
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col" isPopular={plan.isPopular}>
              {plan.isPopular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">محبوب‌ترین</div>}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-100 text-center mb-2">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-extrabold text-white">{plan.price[billingCycle]}</span>
                  <span className="text-slate-400 text-lg mx-1">هزار تومان</span>
                  <span className="text-slate-400">/{billingCycle === 'monthly' ? 'ماه' : 'سال'}</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-cyan-400 me-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant={plan.isPopular ? 'primary' : 'secondary'} size="md" className="w-full mt-8">
                انتخاب پلن
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;