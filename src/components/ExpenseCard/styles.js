export const Styles = () => ({
  card: {
    margin: 20,
    padding: 20,
    position: "relative",
  },
  detail: {
    fontSize: 12,
    "& span": {
      fontSize: 20,
      paddingLeft: 5,
      textTransform: "capitalize",
    },
  },
  icons: {
    position: "absolute",
    right: "10px",
    top: "10px",
    "& svg": {
      cursor: "pointer",
      marginLeft: 5,
    },
  },
});
