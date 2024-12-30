"use client";

import Image from "next/image";

export default function Correlation() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Correlation and Conclusion</h1>

      {/* Correlation Charts */}
      <div className="space-y-8 mb-8">
        {/* Body Mass vs Daily Steps */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Body Mass vs Daily Steps
          </h2>
          <Image
            src="/images/body-mass-vs-daily-steps.png"
            alt="Body mass vs daily steps correlation"
            width={800}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            This scatterplot illustrates the relationship between body mass and
            daily steps. A weak negative correlation (r ≈ -0.20) suggests that
            higher daily steps might contribute to minor reductions in body
            mass, but the effect is not strongly pronounced. This result aligns
            with the expectation that while physical activity contributes to
            weight loss, other factors like diet and metabolism also play a
            significant role.
          </p>
        </div>

        {/* Body Mass vs Calories */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Body Mass vs Calories Burned
          </h2>
          <Image
            src="/images/body-mass-vs-three-types-of-calories.png"
            alt="Body mass vs three types of calories"
            width={800}
            height={500}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The chart compares body mass with three types of caloric data:
            basal, active, and total calories burned. A strong positive
            correlation (r ≈ 0.77) with basal calories reflects the expected
            relationship between higher body mass and basal metabolic rate.
            However, weak correlations with active calories (r ≈ -0.08) indicate
            minimal influence from activity levels alone, underscoring the need
            for a combination of factors like consistent activity and dietary
            control for significant body mass changes.
          </p>
        </div>
      </div>

      {/* Correlation Heatmap */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Correlation Heatmap</h2>
        <Image
          src="/images/correlation-heatmap-of-health-metrics.png"
          alt="Correlation heatmap of health metrics"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <div className="text-gray-600 mt-4">
          <p>The heatmap summarizes correlations between all health metrics:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Total Steps:</strong> Strong positive correlation with
              active calories burned (r ≈ 0.90) highlights the impact of
              activity on energy expenditure.
            </li>
            <li>
              <strong>Body Mass:</strong> Moderate positive correlation with
              basal calories (r ≈ 0.77), reflecting metabolic energy
              requirements tied to weight.
            </li>
            <li>
              <strong>Active Calories:</strong> Weak correlations with body mass
              indicate that activity alone has limited direct impact on weight
              changes.
            </li>
          </ul>
        </div>
      </div>

      {/* Extended Conclusion Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            The analysis of the collected health metrics provides valuable
            insights into the interplay between physical activity, caloric
            expenditure, and body mass. These findings highlight the dynamic
            nature of human health and the multifaceted relationships between
            different variables.
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              A strong positive correlation exists between daily steps and
              active calories burned, confirming that increased physical
              activity significantly boosts energy expenditure.
            </li>
            <li>
              Body mass is positively correlated with basal calories burned,
              reinforcing the idea that resting metabolic rate increases with
              weight, as larger bodies require more energy for maintenance.
            </li>
            <li>
              Seasonal trends influence activity levels and body mass. Higher
              physical activity in warmer months correlates with reduced body
              mass, while sedentary behaviors during colder months contribute to
              weight gain.
            </li>
            <li>
              The weak correlation between active calories and body mass
              suggests that weight management requires more than physical
              activity alone. Dietary adjustments and consistent habits are
              equally, if not more, crucial.
            </li>
          </ul>

          <p className="mt-4">
            These insights emphasize the need for a holistic approach to health
            and fitness. By understanding the relationships between these
            variables, individuals can develop tailored strategies to achieve
            their goals. For instance, leveraging periods of high activity to
            maximize weight loss, monitoring caloric intake during sedentary
            periods, and prioritizing consistency over intensity can lead to
            sustainable results.
          </p>

          <p className="mt-4">
            Furthermore, the data highlights the importance of personalized
            plans. The variability in correlations underscores that health is
            not one-size-fits-all. A detailed understanding of one’s own data
            allows for adjustments based on unique lifestyle patterns and
            preferences, paving the way for meaningful and long-lasting
            improvements in well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
