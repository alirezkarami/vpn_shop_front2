import React from 'react';
import Logo from './ui/Logo';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a href={href} aria-label={ariaLabel} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
    {children}
  </a>
);

const FooterLink: React.FC<{href: string; children: React.ReactNode}> = ({href, children}) => (
    <li><a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">{children}</a></li>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          <div className="lg:col-span-4">
            <Logo className="h-12 w-auto text-cyan-400 mb-4" />
            <p className="text-slate-400 max-w-xs">دسترسی امن، سریع و بدون محدودیت به اینترنت جهانی.</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-slate-200 mb-4 text-lg">محصول</h3>
                <ul className="space-y-3">
                  <FooterLink href="#features">ویژگی‌ها</FooterLink>
                  <FooterLink href="#pricing">قیمت‌ها</FooterLink>
                  <FooterLink href="#">دانلود</FooterLink>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-200 mb-4 text-lg">شرکت</h3>
                <ul className="space-y-3">
                  <FooterLink href="#">درباره ما</FooterLink>
                  <FooterLink href="#">وبلاگ</FooterLink>
                  <FooterLink href="#">فرصت‌های شغلی</FooterLink>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-200 mb-4 text-lg">پشتیبانی</h3>
                <ul className="space-y-3">
                  <FooterLink href="#">مرکز راهنمایی</FooterLink>
                  <FooterLink href="#">تماس با ما</FooterLink>
                  <FooterLink href="#">وضعیت سرویس</FooterLink>
                </ul>
              </div>
          </div>
        </div>

        {/* Social Icons and final text */}
        <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 space-x-reverse">
                <SocialIcon href="#" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Github">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.285 2.866 7.91 6.736 9.294.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </SocialIcon>
            </div>
            <p className="text-sm text-slate-500 mt-8 sm:mt-0">© {new Date().getFullYear()} V2Fly Inc. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
