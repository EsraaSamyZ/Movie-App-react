import { CircularProgress, Alert, AlertTitle } from '@mui/material';

const Loading = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress color="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
