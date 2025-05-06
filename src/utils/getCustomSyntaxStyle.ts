export const getCustomSyntaxStyle = (mode: "light" | "dark") => ({
  hljs: {
    background: "none",
    color: mode === "dark" ? "#D1D5DB" : "#1F2937", 
    fontSize: "14px",
    lineHeight: "1.5",
  },
  keyword: { color: mode === "dark" ? "#C792EA" : "#D73A49" },
  string: { color: mode === "dark" ? "#ECC48D" : "#032F62" },
  function: { color: mode === "dark" ? "#82AAFF" : "#6F42C1" },
  comment: {
    color: mode === "dark" ? "#637777" : "#6A737D",
    fontStyle: "italic",
  },
  number: { color: mode === "dark" ? "#F78C6C" : "#005CC5" },
  literal: { color: mode === "dark" ? "#FF5370" : "#D73A49" },
  built_in: { color: mode === "dark" ? "#FFCB6B" : "#6F42C1" },
  attr: { color: mode === "dark" ? "#C3E88D" : "#22863A" },
});
