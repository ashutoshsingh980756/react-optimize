export const Spinner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ddd",
    borderTop: "4px solid #1976d2",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};