"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Flame,
  Scale,
  TrendingUp,
  BarChart2,
  Calendar,
  Clock,
  LineChart,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Health Data Analysis Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An in-depth analysis of personal health metrics collected through
            Apple Watch and iPhone Health App, exploring patterns in daily
            activity, caloric expenditure, and body mass changes over time.
          </p>
        </div>

        {/* Key Analysis Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Key Analysis Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Activity,
                color: "blue",
                title: "Step Count Analysis",
                content:
                  "Comprehensive analysis of daily step patterns, including trends, distributions, and seasonal variations.",
                link: "/step-count",
              },
              {
                icon: Flame,
                color: "purple",
                title: "Calories Analysis",
                content:
                  "Detailed breakdown of caloric expenditure patterns, including active and basal metabolic rates.",
                link: "/calories",
              },
              {
                icon: Scale,
                color: "green",
                title: "Body Mass Analysis",
                content:
                  "Tracking body mass changes over time with seasonal trends and distribution analysis.",
                link: "/body-mass",
              },
              {
                icon: BarChart2,
                color: "orange",
                title: "Correlation Studies",
                content:
                  "Statistical analysis of relationships between different health metrics with detailed insights.",
                link: "/correlation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-${item.color}-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                onClick={() => (window.location.href = item.link)}
              >
                <div className={`text-${item.color}-600 mb-4`}>
                  <item.icon size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 text-${item.color}-700`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Featured Insights
          </h2>
          <div className="text-gray-600 text-lg mb-8">
            <p>
              This project involved the analysis of personal health data
              collected from Apple Health (via Apple Watch and iPhone). The
              primary goal was to identify trends, patterns, and relationships
              between activity levels, caloric expenditure, and body mass over
              time. Using Python and visualization tools like Matplotlib and
              Seaborn, data was preprocessed, cleaned, and analyzed to extract
              meaningful insights.
            </p>
            <p className="mt-4">
              The analyses were categorized into the following areas:
            </p>
            <ol className="list-decimal list-inside mt-2">
              <li>Activity Patterns (Step Count Analysis)</li>
              <li>Caloric Trends (Calories Analysis)</li>
              <li>Mass Fluctuations (Body Mass Analysis)</li>
              <li>Correlation Studies (Relationships between variables)</li>
            </ol>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Activity Patterns",
                color: "blue",
                icon: Calendar,
                description:
                  "This analysis explored daily and weekly step count trends. Key insights included the seasonal variations in activity and the distribution of activity levels. Notably, Fridays had the highest average step counts.",
                image: "/images/daily-step-count-over-time.png",
              },
              {
                title: "Caloric Trends",
                color: "purple",
                icon: LineChart,
                description:
                  "An in-depth look at caloric expenditure revealed patterns in active and basal calories. Using rolling averages and monthly trends, significant variations across seasons were observed, with basal calories showing a strong positive correlation with body mass.",
                image:
                  "/images/daily-total-calories-burned-with-90-day-rolling-avarage-and-monthly-avarages.png",
              },
              {
                title: "Mass Fluctuations",
                color: "green",
                icon: TrendingUp,
                description:
                  "Weekly and seasonal trends in body mass were examined. Results showed a decrease in body mass in specific periods and provided evidence of the impact of activity and caloric changes on mass fluctuations.",
                image: "/images/body-mass-trend-over-time.png",
              },
              {
                title: "Correlation Studies",
                color: "orange",
                icon: Clock,
                description:
                  "A statistical exploration of the relationships between health metrics, including a correlation heatmap and scatterplots. Strong correlations between basal calories and body mass were identified, as well as weaker relationships for step count and active calories.",
                image: "/images/correlation-heatmap-of-health-metrics.png",
              },
            ].map((chart, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div
                  className={`bg-${chart.color}-100 py-4 px-6 flex items-center`}
                >
                  <chart.icon
                    className={`h-6 w-6 mr-2 text-${chart.color}-600`}
                  />
                  <h3
                    className={`text-xl font-semibold text-${chart.color}-700`}
                  >
                    {chart.title}
                  </h3>
                </div>
                <div className="p-6 bg-gray-50">
                  <Image
                    src={chart.image}
                    alt={chart.description}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-gray-500 text-center mt-4">
                    {chart.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <p className="text-xl text-gray-700">
            Navigate through different sections to explore detailed analyses of
            each health metric. Each page offers interactive visualizations and
            comprehensive insights into specific aspects of the health data
            journey.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
