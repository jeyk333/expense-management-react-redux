export const Styles = () => ({
  card: {
    margin: 20,
    padding: 20,
    position: "relative",
    "&:hover": {
      boxShadow:
        "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
    },
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
