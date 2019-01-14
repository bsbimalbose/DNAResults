const express = require("express");
const cors = require("cors");
const { fetchReportArray, formatReportData } = require("./utils");
const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get("/api/getResult", async (req, res) => {
  //fetching data from filename
  const reportArray = await fetchReportArray("8193.23andme.6530");
  const report = formatReportData(reportArray);
  res.json(report);
});

const port = 5000;
app.listen(port, () => console.log(`server started on ${port}`));
