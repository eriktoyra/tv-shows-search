import React from 'react';
import { Link } from 'react-router-dom';
import { FeedbackMessage, Main } from '../Common';

interface IErrorProps {
  logError?: boolean;
}

interface IErrorState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  static defaultProps = {
    log: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidCatch(error: Error | null, errorInfo: object) {
    const { logError } = this.props;

    if (logError) {
      // Possible to log the error to Sentry.io or similiar service here, but I leave that out
      // for the assignment because of time limits.
    }
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Main>
          <FeedbackMessage>
            Oh no! The application encountered an error. You may <Link to="/">start over and try again</Link>.
          </FeedbackMessage>
        </Main>
      );
    }

    return children;
  }
}
