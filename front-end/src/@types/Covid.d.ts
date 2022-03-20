declare namespace Covid {
  type Data = {
    location: string;
    date: date;
    variant: string;
    num_sequences: number;
    perc_sequences: number;
    num_sequences_total: number;
  };

  type DataReduce = {
    country: string;
    cases: number;
    casesByPeriod: {
      date: string;
      casesConfirmed: number;
      casesAnalyzed: number;
    }[];
  };

  type Rank = {
    cases: string;
    location: string;
  };
}
