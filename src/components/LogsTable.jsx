import React from 'react';

const LogsTable = ({ logs }) => {
  return (
    <div className="card">
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Log String</th>
            <th>Timestamp</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.level}</td>
              <td>{log.log_string}</td>
              <td>{log.timestamp}</td>
              <td>{log.metadata.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;