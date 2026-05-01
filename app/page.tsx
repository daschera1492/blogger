import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "آینده هوش مصنوعی در سال ۲۰۲۶: فراتر از تصور",
    excerpt: "در حالی که مدل‌های زبانی بزرگ به بلوغ رسیده‌اند، شاهد ادغام عمیق هوش مصنوعی با رباتیک سخت‌افزاری هستیم...",
    date: "۱۲ اردیبهشت ۱۴۰۵",
    category: "هوش مصنوعی"
  },
  {
    id: 2,
    title: "چرا فریم‌ورک Next.js همچنان پادشاه دنیای وب است؟",
    excerpt: "بررسی قابلیت‌های جدید نسخه ۱۵ و نحوه مدیریت کش در پروژه‌های بزرگ مقیاس دولوپرها را شگفت‌زده کرده است.",
    date: "۱۰ اردیبهشت ۱۴۰۵",
    category: "برنامه‌نویسی"
  },
  {
    id: 3,
    title: "امنیت شبکه در عصر اینترنت ماهواره‌ای",
    excerpt: "با گسترش دسترسی به اینترنت پرسرعت در سراسر جهان، چالش‌های جدیدی برای پروتکل‌های امنیتی به وجود آمده است.",
    date: "۸ اردیبهشت ۱۴۰۵",
    category: "شبکه"
  }
];

export default function Home() {
  return (
    <div>
      <section className="mb-12 bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-extrabold mb-4 text-blue-900">خبر ویژه: تحول در زیرساخت‌های ابری</h2>
        <p className="text-lg text-blue-800 leading-relaxed">
          امروز کنفرانس جهانی توسعه‌دهندگان اعلام کرد که نسل جدید سرورهای Edge با تاخیر نزدیک به صفر معرفی شده‌اند. 
          این تکنولوژی می‌تواند تجربه کاربری در اپلیکیشن‌های Real-time را به طور کلی دگرگون کند.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
            <span className="text-xs font-bold text-blue-500 uppercase">{post.category}</span>
            <h3 className="text-xl font-bold mt-2 mb-3 leading-tight">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex justify-between items-center text-gray-400 text-xs">
              <span>{post.date}</span>
              <button className="text-blue-600 font-semibold">ادامه مطلب ←</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
