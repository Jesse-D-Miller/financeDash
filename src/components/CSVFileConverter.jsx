import React, { useState } from "react";

const CSVFileConverter = () => {
  const [jsonData, setJsonData] = useState(null);

  //function that converts CSV data to JSON data
  const convertCSVToJson = (csvData) => {
    const lines = csvData.split("\n");

    //extract column headers from first line of CSV
    const headers = lines[0].split(",");
    const result = [];

    //loop through each line of the CSV data (not header line though)
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");

      //loop through each column and map it to its header
      for (let j = 0; j < headers.length; j++) {
        const key = headers[j]?.trim();
        const value = currentLine[j]?.trim() ?? "";
        obj[key] = value;
      }

      result.push(obj);
    }
    return result;
  };

  // funtion to handle file input event
  const handleCSVinputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;

      //call the function to convert your file
      console.log("Raw CSV data:", csvData); // 👈 Check this
      const jsonData = convertCSVToJson(csvData);
      console.log("Converted JSON:", jsonData); // 👈 And this
      setJsonData(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <div className="card-CSV-converter">
      <input type="file" accept=".csv" onChange={handleCSVinputChange} />

      {/* conditional rendering based on whether json data is available */}
      {jsonData ? (
        <div className="json-container">
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      ) : (
        // display message when no file is selected
        <p>Please select a CSV file.</p>
      )}
    </div>
  );
};

export default CSVFileConverter;
