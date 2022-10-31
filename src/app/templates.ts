export interface Governor {
    governorName: string;
    governorParty: string;
    governorState: string;

  }

export interface State {
  name: string;
  capital: string;
  representatives: string[];
}

export interface PresidentData {
  party: string;
  startOfTerm: number;
  endOfTerm: number;
}