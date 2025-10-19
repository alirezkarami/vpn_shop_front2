import React from 'react';
import Card from './ui/Card';
import type { Feature } from '../types';

const ZapIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
    </svg>
);

const GlobeAltIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 0 12 13.5c-2.998 0-5.74-1.1-7.843-2.918" />
    </svg>
);


const featuresData: Feature[] = [
  {
    icon: ZapIcon,
    title: 'سرعت فوق‌العاده',
    description: 'شبکه بهینه‌سازی شده ما تجربه‌ای روان و بدون بافر برای استریم، بازی و وبگردی را تضمین می‌کند.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'امنیت پولادین',
    description: 'با رمزنگاری درجه نظامی، داده‌های شما از دید دیگران محافظت شده و فعالیت آنلاین شما خصوصی باقی می‌ماند.'
  },
  {
    icon: GlobeAltIcon,
    title: 'شبکه سرور جهانی',
    description: 'به سرورهایی در ده‌ها کشور متصل شوید تا محدودیت‌های جغرافیایی را دور بزنید و به محتوای سراسر جهان دسترسی پیدا کنید.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">هر آنچه برای اینترنت بهتر نیاز دارید</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-loose">ویژگی‌هایی را کشف کنید که V2Fly را به بهترین انتخاب برای آزادی آنلاین تبدیل می‌کند.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center h-full">
                <feature.icon className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400 leading-loose">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;