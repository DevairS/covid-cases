import { FC } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
  casesData: Covid.DataReduce[];
  setTooltip: (prev: string) => void;
};

const MapChart: FC<Props> = ({ casesData, setTooltip }) => {
  return (
    <ComposableMap
      data-tip=""
      width={1000}
      height={500}
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      <ZoomableGroup zoom={1}>
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const findCountryCases = casesData.find(
                (row) => row.country === geo.properties.NAME,
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={findCountryCases ? '#e98411' : '#f5f4f6'}
                  stroke="#EAEAEC"
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltip(NAME);
                  }}
                  onMouseLeave={() => {
                    setTooltip('');
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
