interface dropDownList {
  option1: string;
  option2: string;
  option3: string;
}

export interface CustomDropDownProps {
  heading: string;
  options: dropDownList;
}

export const ShowDropDownProps = {
  heading: 'Show',
  options: {
    option1: '10',
    option2: '20',
    option3: '30',
  },
};

// Define a union type for sortFilter
export type SortFilter = 'Default' | 'Increasing' | 'Decreasing';

export interface FliterProps {
  onSortChange: (newSort: 'Default' | 'Increasing' | 'Decreasing') => void;
}

export const SortDropDownProps: CustomDropDownProps = {
  heading: 'Sort',
  options: {
    option1: 'Default',
    option2: 'Increasing',
    option3: 'Decreasing',
  },
};
