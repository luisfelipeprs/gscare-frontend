export interface Financial {
  type: string;
  status: string;
  document: string;
  emission: string;
  deadline: string;
  favoredPayer: {
    name: string;
    imgProfile?: string;
  };
  charge: string;
  value: string;
  //options: string;
}