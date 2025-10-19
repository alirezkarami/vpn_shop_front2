import React, { useState, useEffect } from 'react';
import Card from './ui/Card';
import type { Testimonial } from '../types';
import { fetchTestimonials } from '../services/api';

const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.031 6.031c-2.25 0-4.313 1.031-5.625 2.531-1.313 1.5-2.063 3.469-2.063 5.531 0 1.563 0.5 3.031 1.469 4.313 0.938 1.281 2.313 2.25 3.844 2.813-0.688 0.5-1.531 0.938-2.5 1.344-0.969 0.406-2.031 0.781-3.156 1.094-1.281 0.156-2.531-0.188-3.563-1.031-1.031-0.844-1.5-2.031-1.313-3.344 0.438-2.5 1.563-5.188 3.344-8.031 1.781-2.844 4-5.156 6.625-6.906 1.188-0.781 2.563-1.188 4.094-1.219h0.219zM26.031 6.031c-2.25 0-4.313 1.031-5.625 2.531-1.313 1.5-2.063 3.469-2.063 5.531 0 1.563 0.5 3.031 1.469 4.313 0.938 1.281 2.313 2.25 3.844 2.813-0.688 0.5-1.531 0.938-2.5 1.344-0.969 0.406-2.031 0.781-3.156 1.094-1.281 0.156-2.531-0.188-3.563-1.031-1.031-0.844-1.5-2.031-1.313-3.344 0.438-2.5 1.563-5.188 3.344-8.031 1.781-2.844 4-5.156 6.625-6.906 1.188-0.781 2.563-1.188 4.094-1.219h0.219z"/>
    </svg>
)

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    getTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">محبوب کاربران در سراسر جهان</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-loose">فقط به حرف ما اکتفا نکنید. ببینید کاربران ما چه می‌گویند.</p>
        </div>
        
        {loading ? (
            <div className="text-center text-slate-400">در حال بارگذاری نظرات...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <QuoteIcon className="absolute top-6 right-6 w-16 h-16 text-slate-700/50 opacity-50"/>
                  <div className="relative z-10">
                      <p className="text-slate-300 mb-6 leading-loose text-lg">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-auto relative z-10">
                      <img className="w-12 h-12 rounded-full me-4 border-2 border-slate-600" src={testimonial.avatarUrl} alt={testimonial.author} />
                      <div>
                      <p className="font-bold text-slate-100">{testimonial.author}</p>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                  </div>
                </Card>
            ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;