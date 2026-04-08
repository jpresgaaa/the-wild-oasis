export interface RowProps {
  $type?: "horizontal" | "vertical"; // Specific values
}

export interface ButtonProps {
  $variation?: "primary" | "secondary" | "danger";
  $sizes?: "small" | "medium" | "large";
}
