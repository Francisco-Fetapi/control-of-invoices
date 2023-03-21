import { LoadingOverlay, DEFAULT_THEME } from "@mantine/core";

interface ContainerLoadingOverlayProps extends React.PropsWithChildren {
  isLoading: boolean;
}

export default function ContainerLoadingOverlay({
  children,
  isLoading,
}: ContainerLoadingOverlayProps) {
  return (
    <div style={{ zIndex: 1, position: "relative", padding: "20px" }}>
      <LoadingOverlay
        visible={isLoading}
        overlayBlur={2}
        loader={customLoader}
      />
      {children}
    </div>
  );
}

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.blue[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);
