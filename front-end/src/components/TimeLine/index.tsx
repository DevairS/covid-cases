import { FC, useCallback, useEffect, useState } from 'react';
import { Container, Slider, InputDate, ContainerInput, Text } from './styles';

type Props = {
  rangeDate: string[];
};

const TimeLine: FC<Props> = ({ rangeDate }) => {
  const length = rangeDate.length - 1;
  const [value, setValue] = useState([]);
  const [valueInputStart, setValueInputStart] = useState('');
  const [valueInputEnd, setValueInputEnd] = useState('');

  const handleChangeDate = useCallback(
    (index: number): string => {
      return rangeDate[index];
    },
    [rangeDate],
  );

  const handleChange = (event: Event, newValue: number | number[]): void => {
    if (
      Array.isArray(newValue) &&
      value[0] === newValue[0] &&
      value[1] === newValue[1]
    ) {
      return;
    }
    setValue(newValue as number[]);

    if (Array.isArray(newValue)) {
      setValueInputStart(() => handleChangeDate(newValue[0]));
      setValueInputEnd(() => handleChangeDate(newValue[1]));
    }
  };

  useEffect(() => {
    setValue([length - 1, length]);
    setValueInputStart(() => handleChangeDate(length - 1));
    setValueInputEnd(() => handleChangeDate(length));
  }, [handleChangeDate, length]);

  return (
    <Container>
      <Text>Selecione um periodo de data que deseja consultar os dados</Text>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        max={length}
      />
      <ContainerInput>
        <InputDate type="date" disabled value={valueInputStart} />
        <Text>até</Text>
        <InputDate type="date" disabled value={valueInputEnd} />
      </ContainerInput>
    </Container>
  );
};

export default TimeLine;
