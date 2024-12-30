"use client";

import Image from "next/image";

export default function BodyMass() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Body Mass Analysis</h1>
      <p className="text-lg text-gray-600">
        This page explores body mass trends, distributions, seasonal variations,
        and the rate of change over time. The analysis provides insights into
        how body mass fluctuates and correlates with other health metrics such
        as activity and caloric expenditure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Body Mass Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Body Mass Trend</h2>
          <Image
            src="/images/body-mass-trend-over-time.png"
            alt="Body mass trend over time"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The body mass trend chart visualizes changes in body mass over time.
            A gradual decline in body mass is observed in the later months of
            the data, potentially influenced by increased activity or dietary
            adjustments. Seasonal fluctuations are evident, indicating external
            factors such as weather or lifestyle changes impacting body mass.
          </p>
        </div>

        {/* Body Mass Distribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Body Mass Distribution</h2>
          <Image
            src="/images/distribution-of-body-mass.png"
            alt="Distribution of body mass"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The distribution of body mass highlights the frequency of various
            body mass values over the analyzed period. The histogram reveals a
            higher concentration around the 80-85 kg range, indicating a stable
            body mass for most of the recorded time. However, deviations in
            lower or higher ranges point to temporary changes influenced by
            external factors.
          </p>
        </div>

        {/* Seasonal Body Mass */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Seasonal Body Mass</h2>
          <Image
            src="/images/avarage-body-mass-season.png"
            alt="Average body mass by season"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            Seasonal analysis indicates average body mass fluctuations across
            different times of the year. For instance, the data shows slightly
            higher body mass averages during winter months compared to summer,
            likely due to reduced activity levels and dietary habits. These
            patterns align with seasonal lifestyle changes and may provide
            insights for future adjustments.
          </p>
        </div>

        {/* Rate of Change in Body Mass */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Rate of Change</h2>
          <Image
            src="/images/rate-of-change-in-body-mass-over-time.png"
            alt="Rate of change in body mass over time"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <p className="text-gray-600 mt-4">
            The rate of change chart depicts the day-to-day or week-to-week
            changes in body mass. Significant increases or decreases correspond
            to lifestyle shifts or dietary adjustments. Positive rates indicate
            weight gain periods, while negative rates show weight loss. This
            visualization aids in understanding the temporal nature of body mass
            fluctuations.
          </p>
        </div>
      </div>

      {/* Summary and Observations */}
      <div className="bg-white p-6 rounded-lg shadow mt-8">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="text-gray-600">
          <p>
            The analysis of body mass data highlights important trends and
            patterns:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              A stable body mass was observed around the 80-85 kg range, with
              deviations tied to lifestyle or seasonal factors.
            </li>
            <li>
              Seasonal trends suggest a higher average body mass during winter,
              potentially due to decreased activity and increased caloric
              intake.
            </li>
            <li>
              The rate of change in body mass provides actionable insights into
              periods of significant fluctuation, helping to pinpoint the impact
              of lifestyle changes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
