import api from '../api';

export default class CovidApi {
  getRangeDate = async (): Promise<string[]> => {
    try {
      const { data } = await api.get('/infos');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getRankCases = async (count: number): Promise<Covid.Rank[]> => {
    try {
      const { data } = await api.get(`/rank/${count}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  getCasesVariantsByRangeDate = async (
    startDate: string,
    endDate: string,
  ): Promise<Covid.Data> => {
    try {
      const { data } = await api.get(`/rangeDate/${startDate}/${endDate}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}
