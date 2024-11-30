# DSA210-FALL-2024-Project

## Apple Health Data Analysis Dashboard

## Project Motivation
Understanding personal health trends is essential for maintaining a healthy lifestyle. This project obtained data from the Apple Health app to analyze and visualize health and activity metrics. The goal is to create an interactive dashboard that provides actionable insights into personal health trends and behaviors.

---

## Data Source
This project uses health data exported from the Apple Health app. The data includes:
- **Body Mass:** Recorded in kilograms over time.
- **Heart Rate:** Measured in beats per minute (bpm), along with contextual metadata (e.g., motion context).

---

## Tools and Techniques
### For Data Conversion and Processing
- **Python Libraries:**
  - `Pandas` for handling tabular data.
  - `Matplotlib` and `Seaborn` for visualization.
  - `xml.etree.ElementTree` for parsing XML data.

### Data Cleaning and Visualization
- **Body Mass Analysis:**
  - Line plot to show trends in body weight over time.
  - Identify patterns or significant changes.

- **Heart Rate Analysis:**
  - Distribution of heart rate values using histograms.
  - Compare resting and active heart rates based on metadata.

- **Correlation Analysis:**
  - Analyze correlations between body mass and heart rate metrics.

---

## Features
- **Health Metric Analysis:**
  - Visualize weight changes over time.
  - Examine heart rate distributions and variations.
  - Contextualize data using motion and activity metadata.

- **Interactive Dashboard:**
  - Built using Dash or Streamlit for dynamic exploration of metrics.

---
