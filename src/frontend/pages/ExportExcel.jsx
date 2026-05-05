// utils/exportExcel.js

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportToExcel(data, fileName = "data.xlsx") {
  if (!data || data.length === 0) {
    alert("No data to export");
    return;
  }

  // 🔹 Clean data format
  const formattedData = data.map((item) => ({
    Amount: item.amount,
    Type: item.type,
    Category: item.category || "-",
    Source: item.source || "-",
    Date: item.created_at
      ? new Date(item.created_at).toLocaleDateString("en-IN")
      : "-"
  }));

  // 🔹 Sheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // 🔹 Workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // 🔹 Buffer
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array"
  });

  // 🔹 Download
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  saveAs(blob, fileName);
}
