export default function parseCSV(text) {
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",");
  
    return lines.slice(1).map(line => {
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = values[i]?.replace(/(^"|"$)/g, ""); 
      });
      return obj;
    });
  }