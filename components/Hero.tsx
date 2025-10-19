import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-8 leading-tight md:leading-snug max-w-4xl">
          آزاد و امن پرواز کنید
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-slate-400 mb-14 leading-loose">
          سرعت بی‌نظیر، امنیت پولادین و دسترسی بدون محدودیت به اینترنت جهانی را با مدرن‌ترین تکنولوژی تجربه کنید. آزادی دیجیتال شما از اینجا شروع می‌شود.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button variant="primary" size="lg">۱۴ روز تست رایگان</Button>
          <Button variant="ghost" size="lg">بیشتر بدانید</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;