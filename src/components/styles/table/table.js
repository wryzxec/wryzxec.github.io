import React from 'react';
import './table.css';

// Sample data for the table
const data = [
  { Epochs: 20, Mini_Batch_Size: 128, Neurons: '200/100/25/10', Learning_Rate: 0.5, Momentum: 'True', Accuracty: 98.42 },
  { Epochs: 20, Mini_Batch_Size: 128, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'True', Accuracty: 98.14 },
  { Epochs: 20, Mini_Batch_Size: 128, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'False', Accuracty: 97.51},
  { Epochs: 20, Mini_Batch_Size: 60000, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'True', Accuracty: 84.13},
  { Epochs: 20, Mini_Batch_Size: 60000, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'False', Accuracty: 65.16},
];

// Table component
const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Epochs</th>
            <th>Mini-Batch Size</th>
            <th>Neurons (Layer 1/Layer 2/.../Layer n)</th>
            <th>Learning Rate</th>
            <th>Momentum Applied</th>
            <th> Accuracy (%) </th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.Epochs}</td>
              <td>{item.Mini_Batch_Size}</td>
              <td>{item.Neurons}</td>
              <td>{item.Learning_Rate}</td>
              <td>{item.Momentum}</td>
              <td>{item.Accuracty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;