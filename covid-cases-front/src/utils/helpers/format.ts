export const reduceDataCases = (data: Covid.Data[]): Covid.DataReduce[] => {
  const uniquesCountry = Array.from(new Set(data.map((c) => c.location)));
  return [...uniquesCountry].map((country) => {
    const filterByCountry = data.filter((row) => row.location === country);
    const cases = filterByCountry
      .map((row) => row.num_sequences)
      .reduce((sum, current) => sum + current);

    const dateSet = Array.from(new Set(filterByCountry.map((row) => row.date)));

    const casesByPeriod = [...dateSet].map((row) => {
      const casesPeriod = filterByCountry.filter(
        (_country) => _country.date === row,
      );

      const casesConfirmed = casesPeriod
        .map((_row) => _row.num_sequences)
        .reduce((sum, current) => sum + current);
      const casesAnalyzed = casesPeriod
        .map((_row) => _row.num_sequences_total)
        .reduce((sum, current) => sum + current);

      return {
        date: row,
        casesConfirmed,
        casesAnalyzed,
      };
    });

    return {
      country,
      cases,
      casesByPeriod,
    };
  });
};

export const groupDataCases = (
  block: Covid.DataReduce[],
  currentData: Covid.DataReduce[],
): Covid.DataReduce[] => {
  const cloneCurrentData = currentData;
  block.forEach((row) => {
    const index = cloneCurrentData.findIndex(
      (elem) => elem.country === row.country,
    );
    if (index === -1) {
      cloneCurrentData.push(row);
    }
  });
  return cloneCurrentData;
};
