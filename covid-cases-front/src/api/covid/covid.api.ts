import api from '../api';

export default class CovidApi {
  getBlockData = async (
    offSet: number,
    limit: number,
  ): Promise<Covid.Data[]> => {
    try {
      const { data } = await api.get('/covidCases?select=*', {
        headers: {
          Range: `${offSet}-${limit}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getCasesForDate = async (
    offSet: number,
    limit: number,
  ): Promise<Covid.Data[]> => {
    try {
      const { data } = await api.get(
        '/covidCases?select=*&order=date&date=eq.2020-05-11',
        {
          headers: {
            Range: `${offSet}-${limit}`,
          },
        },
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}
