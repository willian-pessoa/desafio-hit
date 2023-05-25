import React, { useMemo, useState } from "react";
import { Box, useMediaQuery, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

import Header from "components/Header/Header";
import CenterBox from "components/CustomBoxs/CenterBox";

import { dataToPieChart } from "utils/helpers";

const CustomLayerComponent = (myProps) => (layerProps) => {
  const { centerX, centerY } = layerProps;

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "1rem",
      }}
    >
      {myProps}
    </text>
  );
};

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width: 750px)");
  const [total, setTotal] = useState(0);
  const pie = useMemo(() => {
    let tempPie = dataToPieChart();
    let totalTickets = tempPie.reduce((acc, item) => acc + item.value, 0);
    setTotal(totalTickets);
    return tempPie;
  }, []);

  return (
    <Box m={`1.5rem ${isNonMobile ? "2.5rem" : "0.5rem"}`}>
      <Header title="DASHBOARD" subtitle="Visão Geral" />
      <CenterBox width="100%">
        <Box
          mt="40px"
          width="90%"
          maxWidth="600px"
          height="60vh"
          position="relative"
        >
          <Typography align="center">Tickets</Typography>
          <ResponsivePie
            data={pie}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            colors={{ datum: "data.color" }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="black"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            layers={[
              "arcLinkLabels",
              "arcs",
              "arcLabels",
              "legends",
              CustomLayerComponent(`Total: ${total}`),
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "black",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 20,
                symbolShape: "circle",
              },
            ]}
          />
        </Box>
      </CenterBox>
    </Box>
  );
};

export default Dashboard;
