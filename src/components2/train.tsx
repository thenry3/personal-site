import React from "react";
import Plx from "react-plx";
import styled from "styled-components";

import { WiTrain } from "react-icons/wi";

const TheTrain = styled(WiTrain)`
  width: 50px;
  height: 50px;
  color: var(--green);
`;

const Track = styled("div")`
  display: flex;
  margin-top: -10px;
`;

export default function Train() {
  const numTracks = 5;
  const Animation = [
    {
      start: "self",
      startOffset: "10vh",
      duration: "70vh",
      properties: [
        {
          startValue: 0,
          endValue: window.innerWidth > 650 ? 85 : 100,
          property: "translateX",
          unit: "%",
        },
      ],
    },
  ];

  const TrackAnimations = [];
  for (let i = 0; i < numTracks; i++) {
    TrackAnimations.push([
      {
        // start: i * 100 - 30,
        start: "self",
        startOffset: (i * (60 / numTracks)).toString() + "vh",
        duration: (70 / numTracks).toString() + "vh",
        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity",
          },
          {
            startValue: 50,
            endValue: 0,
            property: "translateY",
            units: "px",
          },
        ],
      },
    ]);
  }

  return (
    <>
      <div style={{ width: "80%" }}>
        <Plx
          parallaxData={Animation}
          style={{ width: "85%", height: "fit-content" }}
        >
          <TheTrain />
        </Plx>
        <Track>
          {TrackAnimations.map((track, i) =>
            i > 0 ? (
              <Plx
                parallaxData={track}
                style={{
                  width:
                    (
                      (window.innerWidth > 650 ? 85 : 100) / numTracks
                    ).toString() + "%",
                  height: "3px",
                  opacity: i > 0 ? "0" : "1",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgb(90, 90, 90)",
                  }}
                ></div>
              </Plx>
            ) : (
              <div
                style={{
                  width:
                    (
                      (window.innerWidth > 650 ? 85 : 100) / numTracks
                    ).toString() + "%",
                  height: "3px",
                  opacity: i > 0 ? "0" : "1",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgb(90, 90, 90)",
                  }}
                ></div>
              </div>
            )
          )}
        </Track>
      </div>
    </>
  );
}
