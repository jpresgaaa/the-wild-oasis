import styled from "styled-components";
import type { SelectProps } from "../types/types";
import type { StyledSelectprops } from "../types/styledComponentTypes";

const StyledSelect = styled.select<StyledSelectprops>`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${({ $type }) =>
      $type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, type, onChange }: SelectProps) {
  return (
    <StyledSelect
      value={value}
      $type={type}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
