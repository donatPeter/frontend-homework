import styled from "styled-components";

const StyledIcon = styled.i<{ $size: string }>`
  font-size: ${({ $size }) => $size};
`;

type IconVariant = "outlined" | "filled";

interface Props {
  icon: string;
  size: string;
  variant?: IconVariant;
}

export const Icon = ({ icon, size, variant = "outlined" }: Props) => (
  <StyledIcon
    className={
      variant === "outlined" ? "material-icons-outlined" : "material-icons"
    }
    $size={size}
  >
    {icon}
  </StyledIcon>
);
