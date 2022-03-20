import { FC } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
  casesData: Covid.Rank[];
  setTooltip: (prev: string) => void;
};

const MapChart: FC<Props> = ({ casesData, setTooltip }) => {
  const handleColor = (cases: number): string => {
    const { length } = cases.toString();
    let a = 0;

    if (length >= 5) a = 1;
    else if (length === 4) a = 0.8;
    else if (length === 3) a = 0.7;
    else if (length === 2) a = 0.5;
    else if (length === 1) a = 0.3;
    else a = 0.2;

    return `rgba(233, 132, 17, ${a})`;
  };

  return (
    <ComposableMap
      data-tip=""
      projectionConfig={{
        rotate: [-15, 0, 0],
        scale: 147,
      }}
    >
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const findCountryCases = casesData.find(
              (row) => row.location === geo.properties.NAME,
            );
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  findCountryCases
                    ? handleColor(findCountryCases.cases)
                    : '#f5f4f6'
                }
                stroke="#EAEAEC"
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setTooltip(
                    `${NAME} - ${
                      findCountryCases ? findCountryCases.cases : 0
                    }`,
                  );
                }}
                onMouseLeave={() => {
                  setTooltip('');
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
