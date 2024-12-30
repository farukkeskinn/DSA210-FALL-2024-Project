"use client";

import Image from "next/image";

export default function Calories() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Calories Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Daily Calories with Rolling Average */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Daily Calories with Rolling Average
          </h2>
          <Image
            src="/images/daily-total-calories-burned-with-90-day-rolling-avarage-and-monthly-avarages.png"
            alt="Daily calories burned with rolling average"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This chart showcases daily caloric expenditure with a 90-day rolling
            average to smooth out fluctuations and identify long-term trends.
            Monthly averages are also plotted to emphasize seasonal variations
            in caloric burn patterns. Higher caloric expenditures are observed
            during active seasons, correlating with increased step counts or
            outdoor activities.
          </p>
        </div>

        {/* Weekly Average Calories */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Weekly Average Calories
          </h2>
          <Image
            src="/images/weekly-avarage-calories-burned.png"
            alt="Weekly average calories burned"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This chart represents weekly averages of total calories burned. It
            smooths out daily fluctuations, providing a clear picture of general
            energy expenditure. The observed peaks may align with periods of
            increased physical activity, while the valleys likely reflect
            sedentary or recovery weeks.
          </p>
        </div>

        {/* Calories by Season */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Calories by Season</h2>
          <Image
            src="/images/avarage-calories-burned-by-season.png"
            alt="Average calories burned by season"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            Seasonal patterns in caloric expenditure are evident in this chart.
            Higher averages in spring and summer reflect increased outdoor
            activities and a more active lifestyle. Conversely, lower averages
            during winter suggest reduced physical activity, potentially
            influenced by colder weather and holiday-related habits. These
            findings highlight the impact of external factors on energy
            expenditure.
          </p>
        </div>

        {/* Calories by Weekday */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Calories by Weekday</h2>
          <Image
            src="/images/avarage-calories-burned-by-weekday.png"
            alt="Average calories burned by weekday"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The analysis of average calories burned by weekdays reveals higher
            activity levels during weekdays compared to weekends. Fridays and
            Thursdays show slightly elevated averages, likely due to a mix of
            work and social activities. Sundays consistently show the lowest
            average calories burned, aligning with lower activity levels often
            observed on rest days.
          </p>
        </div>
      </div>

      {/* Additional Insights Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Additional Insights</h2>
        <p className="text-gray-600">
          The caloric expenditure analysis provides the following key takeaways:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
          <li>
            Active calories exhibit the most variability, directly linked to
            physical activity levels such as walking or exercise routines.
          </li>
          <li>
            Basal calories remain relatively stable over time, reflecting the
            energy required for basic bodily functions, and are strongly
            correlated with body mass.
          </li>
          <li>
            Seasonal and weekday patterns provide actionable insights for
            optimizing caloric balance, such as adjusting dietary intake or
            exercise routines during periods of lower activity.
          </li>
        </ul>
        <p className="mt-4 text-gray-600">
          These insights offer a comprehensive view of energy expenditure
          dynamics, serving as a valuable guide for fitness and nutrition
          planning.
        </p>
      </div>
    </div>
  );
}
