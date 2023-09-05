const TabContent = ({ active, children }) => {
    const classes = `Innertab-content ${active ? "active" : ""}`;
    return <pre className={classes} style={{ whiteSpace: "pre-wrap", overflowX: "auto" }} >{children}</pre>;
  };
  

export default TabContent;