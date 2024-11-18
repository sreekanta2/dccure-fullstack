"use client";

import { themes } from "@/config/thems";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UserProgressChart = ({ height = 250 }) => {
  const createdAt = "2024-11-11T00:00:00Z";
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);

  // Set the progress percentage (e.g., 75%)
  const series = [75];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["last visit"],
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radialBar: {
        startAngle: 0, // Full circle
        endAngle: 360,
        track: {
          background: "#6B7280", // Gray-500 for full circle track
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "16px",
            fontWeight: 600,
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontWeight: 600,
            color: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel
            })`,
            // Format createdAt date for display
            formatter: function () {
              return new Date(createdAt).toLocaleDateString("en", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            },
          },
        },
      },
    },
    colors: [
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].primary})`, // Fill color for progress
    ],
    fill: {
      type: "solid",
    },
    stroke: {
      lineCap: "round", // Rounded ends for the progress
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="radialBar"
      height={height}
      width={"100%"}
    />
  );
};

export default UserProgressChart;
