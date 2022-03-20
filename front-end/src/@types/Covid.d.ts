declare namespace Covid {
  type Cases = {
    cases: number;
    casesSequences: number;
  };

  type Rank = {
    cases: number;
    location: string;
    casesSequences: number;
  };

  type Variant = {
    cases: number;
    variant: string;
  };

  type Data = {
    casesByCountry: Rank[];
    casesByVariant: Variant[];
    allCases: Cases;
  };
}
