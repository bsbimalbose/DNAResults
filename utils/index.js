const util = require("util");
const fs = require("fs");
const path = require("path");

const readReport = async reportName => {
  const readFile = util.promisify(fs.readFile);
  const filePath = path.join(__dirname, "../", reportName);
  const fileContent = await readFile(filePath, "utf-8");
  return fileContent;
};

const fetchReportArray = async reportName => {
  const reportString = await readReport(reportName);
  if (reportString) return reportString.split(/\r?\n/);
  else return null;
};

const getReportMap = reportArray => {
  const map = reportArray.reduce((reportMap, line) => {
    if (!line.startsWith("#")) {
      const geneticVariationInfo = line.split(/\s{1,}/);
      const chromosome = geneticVariationInfo[1];
      if (reportMap[chromosome]) {
        reportMap[chromosome]++;
      } else {
        if (chromosome) reportMap[chromosome] = 1;
      }
    }
    return reportMap;
  }, {});
  return map;
};

const reportMapToObjectArray = map => {
  const array = [];
  Object.keys(map).forEach(function(key) {
    array.push({
      chromosome: key,
      variants: map[key]
    });
  });
  return array;
};

const formatReportData = reportArray => {
  const map = getReportMap(reportArray);
  const report = reportMapToObjectArray(map);
  return report;
};

module.exports = { fetchReportArray, formatReportData };
