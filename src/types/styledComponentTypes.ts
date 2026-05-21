export interface RowProps {
  $type?: "horizontal" | "vertical"; // Specific values
}

export interface ButtonProps {
  $variation?: "primary" | "secondary" | "danger";
  $sizes?: "small" | "medium" | "large";
}

export interface StyleFormProps {
  $type?: "modal" | "vertical" | "regular"; // Specific values
}

export interface CommonRowProps {
  $columns: "1fr";
}

export interface StyledListProps {
  $position: { x: number; y: number };
}
export interface FilterButtonProps {
  $active?: boolean;
}
export interface StyledSelectprops {
  $type?: "white" | "grey";
}
export interface TagProps {
  $type?: any;
}

export interface PaginationButtonProps {
  active?: boolean;
}
