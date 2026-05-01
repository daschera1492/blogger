import './globals.css'

export const metadata = {
  title: 'خبرگزاری تکنولوژی نوین',
  description: 'آخرین اخبار دنیای برنامه‌نویسی و هوش مصنوعی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">TechNews</h1>
            <nav>
              <ul className="flex gap-6 text-gray-600 font-medium">
                <li>صفحه اصلی</li>
                <li>اخبار</li>
                <li>آموزش</li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t mt-12 py-8 text-center text-gray-500">
          <p>© ۲۰۲۶ تمامی حقوق برای وبلاگ تست محفوظ است.</p>
        </footer>
      </body>
    </html>
  )
}
