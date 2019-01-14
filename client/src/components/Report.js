import React from "react";

export default function Report({ report }) {
  return (
    <div style={{ width: 800 }}>
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Chromosome</th>
            <th scope="col">Variants</th>
          </tr>
        </thead>
        <tbody>
          {report.map(row => (
            <tr key={row.chromosome}>
              <td>{row.chromosome}</td>
              <td>{row.variants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
