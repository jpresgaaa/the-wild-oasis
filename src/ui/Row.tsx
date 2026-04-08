import styled, { css } from "styled-components";
import { type RowProps } from "../types/styledComponentTypes";

const Row = styled.div<RowProps>`
  display: flex;
  ${({ $type = "vertical" }) =>
    $type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${({ $type = "vertical" }) =>
    $type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
