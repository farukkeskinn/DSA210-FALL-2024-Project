"use client";

import Image from "next/image";

export default function StepCount() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Step Count Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Daily Step Count Over Time */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Daily Step Count Over Time
          </h2>
          <Image
            src="/images/daily-step-count-over-time.png"
            alt="Daily step count over time"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This chart provides a detailed view of daily step counts across the
            recorded timeframe. The peaks and troughs in the data highlight the
            variability in daily activity levels, which may be influenced by
            factors such as workdays, weekends, weather, or personal habits.
            Consistently active days suggest a maintained level of physical
            activity, whereas sharp drops may indicate specific rest periods or
            less active days.
          </p>
        </div>

        {/* Monthly Average Step Count */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Average Step Count
          </h2>
          <Image
            src="/images/monthly-avarage-step-count.png"
            alt="Monthly average step count"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The monthly average step count analysis demonstrates clear seasonal
            trends. Activity levels typically rise during spring and summer
            months, likely due to favorable weather conditions encouraging
            outdoor activity. Conversely, winter months show reduced activity
            levels, reflecting the impact of colder weather and possibly holiday
            periods. This insight highlights the importance of understanding
            external factors when interpreting step data.
          </p>
        </div>

        {/* Steps by Day of the Week */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Steps by Day of the Week
          </h2>
          <Image
            src="/images/avarage-steps-by-day-of-the-week.png"
            alt="Average steps by day of the week"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This analysis identifies patterns in activity levels across the days
            of the week. Fridays and Thursdays emerge as the most active days,
            potentially linked to increased social or work-related activities.
            Sundays exhibit the lowest activity levels, suggesting a preference
            for rest or sedentary activities on this day. Such insights can
            guide planning for personal fitness routines or identifying days for
            increased activity focus.
          </p>
        </div>

        {/* Activity Level Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Activity Level Distribution
          </h2>
          <Image
            src="/images/distribution-of-daily-activity-levels.png"
            alt="Distribution of daily activity levels"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This chart categorizes daily activities into four distinct levels:
            sedentary, lightly active, moderately active, and very active. The
            majority of days fall into the lightly and moderately active
            categories, reflecting a consistent baseline of activity. However,
            fewer days are categorized as very active, highlighting
            opportunities for increased physical engagement. Sedentary days,
            while expected, can be targeted for improvement with deliberate
            activity planning.
          </p>
        </div>
      </div>

      {/* Additional Insights Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Additional Insights</h2>
        <p className="text-gray-600">
          Beyond the primary metrics, the step count analysis highlights:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
          <li>
            The highest recorded activity day occurred on{" "}
            <strong>April 22, 2022</strong>, with a remarkable{" "}
            <strong>48,972 steps</strong>, categorized as "Very Active."
          </li>
          <li>
            The lowest recorded activity day was{" "}
            <strong>February 24, 2022</strong>, with only{" "}
            <strong>146 steps</strong>, falling under the "Sedentary" category.
          </li>
          <li>
            Consistent weekday patterns reveal the influence of daily routines
            on activity levels, with weekends generally reflecting reduced
            movement.
          </li>
        </ul>
        <p className="mt-4 text-gray-600">
          These insights provide a nuanced understanding of personal activity
          patterns and can inform strategies for maintaining or improving
          physical fitness.
        </p>
      </div>
    </div>
  );
}
