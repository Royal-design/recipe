const ErrorFallback = ({ error }: any) => {
  return (
    <div className="error">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
