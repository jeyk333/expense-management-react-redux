export const Styles = (theme) => ({
  container: {
    width: "80%",
    margin: "40px auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  title: {
    marginLeft: 20,
  },
  detailFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
});
