import React, {useState} from "react";
import { Anchor, Box, Button, Chart, CheckBox, Calendar, FormField, DropButton, Grommet, Stack, grommet, Heading, Image, Meter, Menu, RangeInput, RangeSelector, RadioButton, Text, TextArea, WorldMap, Keyboard, defaultProps } from "grommet";
import {Notification} from 'grommet-icons';
import { render } from "react-dom";


const App = ({...props}) => {
  const [places, setPlaces] = useState();
  const [range, setRange] = useState([12, 16]);
  // const onChange = (values: Number[]) => {
  //   setRange(values);
  // };
  console.log(defaultProps);

  const onSelectPlace = (place: number[]) => {
    setPlaces([{ color: 'accent-1', location: place }]);
    console.log(place)
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    alert('clicked!');
  }

  const btnTapped = () => {
    console.log(props.theme.global.colors.white)

    console.log('tapped')
  }

  return (
    <Grommet theme={grommet} full>
      <Keyboard>
        <Box pad="medium" gap="large">
        {/* <Box border={[{color: "red", side: "top"}, {color: "blue", side: "bottom"}]}
        height="small"
        width="small"
        /> */}
        <Box align="center">

        <Stack anchor="top-right">
  <Notification size="large" />
  <Box
    background="brand"
    pad={{ horizontal: 'xsmall' }}
    round
  >
    <Text>8</Text>
  </Box>
</Stack>
        </Box>
        <CheckBox />
    <TextArea placeholder="type here" />
        <RangeInput value={10} />
        <RadioButton name="Option" />
        <Heading>Heyyy</Heading>
        <FormField label="Default border" htmlFor="check-box">
          <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
            <CheckBox
              id="check-box"
              label="CheckBox"
            />
          </Box>
        </FormField>
          <Box width="medium">
            <Image opacity="strong" src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/23/97/6b/shutterstock-412354084.jpg" alt="tropical" fit="cover"/>
          </Box>
          <Box flex justify="center" align="center">
            <Heading>Anchor</Heading>
            <Anchor href="#" onClick={handleClick}>Click Me</Anchor>
          </Box>
          
          <Box align="center">
            <Heading>Button</Heading>
            <Button label="Default" onClick={btnTapped} />
          </Box>
          <Box align="center">
            <Heading>Chart</Heading>
            <Chart type="area" values={[[10, 20], [20, 30], [30, 15]]} onClick={handleClick} color={{
              color: '#bbb',
              opacity: false
            }}
            />
          </Box>
          <Box align="center">
          <Heading>Meter</Heading>
          <Meter
            values={[{
              value: 60,
              label: 'sixty',
              onClick: handleClick
            }]}
            aria-label="meter"
            background={{
              color: "#BBB",
              opacity: false
            }}
          />
          </Box>
          <Box align="center">
            <Heading>World Map</Heading>
            <WorldMap
              color="neutral-1"
              continents={[
                {
                  name: 'Africa',
                  color: 'light-5',
                  onClick: () => {},
                },
              ]}
              places={[
                {
                  name: 'Sydney',
                  location: [-33.8830555556, 151.216666667],
                  color: 'accent-2',
                  onClick: (name) => {alert(name)},
                },
              ]}
              />
          </Box>

          <WorldMap onSelectPlace={onSelectPlace} places={places} />
          <Stack>
          <Box
            direction="row"
            justify="between"
          >
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(value => (
              <Box
                key={value}
                width="xxsmall"
                height="xxsmall"
                align="center"
                pad="small"
                border={false}
              >
                <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction="horizontal"
            min={10}
            max={20}
            size="full"
            values={range}
            // onChange={onChange}
          />
        </Stack>
        </Box>
      </Keyboard>
    </Grommet>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);