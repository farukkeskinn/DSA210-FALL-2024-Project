import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BarChart3, Footprints, Flame, Scale, TrendingUp } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health Data Analysis",
  description: "Personal health data analysis project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {[
                      { href: "/", icon: BarChart3, text: "Dashboard" },
                      {
                        href: "/step-count",
                        icon: Footprints,
                        text: "Step Count",
                      },
                      { href: "/calories", icon: Flame, text: "Calories" },
                      { href: "/body-mass", icon: Scale, text: "Body Mass" },
                      {
                        href: "/correlation",
                        icon: TrendingUp,
                        text: "Correlation",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                      >
                        <item.icon className="h-5 w-5 mr-2" />
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
