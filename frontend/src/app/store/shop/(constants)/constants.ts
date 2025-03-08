interface dropDownList {
  option1: string;
  option2: string;
  option3: string;
}

export interface CustomDropDownProps {
  heading: string;
  options: dropDownList;
}

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
