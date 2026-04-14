export interface RowProps {
  $type?: "horizontal" | "vertical"; // Specific values
}

export interface ButtonProps {
  $variation?: "primary" | "secondary" | "danger";
  $sizes?: "small" | "medium" | "large";
}

export interface StyleFormProps {
  $type?: "modal" | "vertical"; // Specific values
}
