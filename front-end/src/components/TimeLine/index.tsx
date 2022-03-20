import { FC, useCallback, useEffect, useState } from 'react';
import { Container, Slider, InputDate, ContainerInput, Text } from './styles';

type Props = {
  rangeDate: string[];
  handleChangeDate(startDate: string, endDate: string): void;
};

const TimeLine: FC<Props> = ({ rangeDate, handleChangeDate }) => {
  const length = rangeDate.length - 1;
  const [value, setValue] = useState([]);
  const [valueInputStart, setValueInputStart] = useState('');
  const [valueInputEnd, setValueInputEnd] = useState('');

  const changeDate = useCallback(
    (index: number): string => {
      return rangeDate[index];
    },
    [rangeDate],
  );

  const handleChange = async (
    event: Event,
    newValue: number | number[],
  ): Promise<void> => {
    if (
      Array.isArray(newValue) &&
      value[0] === newValue[0] &&
      value[1] === newValue[1]
    ) {
      return;
    }
    setValue(newValue as number[]);

    if (Array.isArray(newValue)) {
      const startDate = changeDate(newValue[0]);
      const endDate = changeDate(newValue[1]);
      setValueInputStart(startDate);
      setValueInputEnd(endDate);
      await handleChangeDate(startDate, endDate);
    }
  };

  useEffect(() => {
    setValue([length - 1, length]);
    setValueInputStart(() => changeDate(length - 1));
    setValueInputEnd(() => changeDate(length));
  }, [changeDate, length]);

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
