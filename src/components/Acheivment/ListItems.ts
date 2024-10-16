
type ListItem = {
  id: number;
  count: number;
  suffix: string;
  description: string;
  ref: ((node?: Element | null) => void) | null; 
};

export const listItems: ListItem[] = [
  {
    id: 1,
    count: 90,
    suffix: "+",
    description: "Students",
    ref: null,
  },
  {
    id: 2,
    count: 50,
    suffix: "+",
    description: "Successful Projects",
    ref: null,
  },
  {
    id: 3,
    count: 30,
    suffix: "+",
    description: "Team Members",
    ref: null,
  },
];