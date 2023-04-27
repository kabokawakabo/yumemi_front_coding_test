import React from "react";

type Props = {
  children?: React.ReactNode;
};
type State = {
  hasError: boolean;
  message?: string;
};

/// 参考: https://ja.legacy.reactjs.org/docs/error-boundaries.html
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      message:
        (error as Error)?.message ?? "[エラー] リロードをお試しください。",
    };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <span style={{ color: "red" }}>{this.state.message}</span>;
    }

    return this.props.children;
  }
}
