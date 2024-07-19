import React from 'react';
import './table.css';

// Sample data for the table
const data = [
  { id: 1, Epochs: 20, Mini_Batch_Size: 128, Neurons: '200/100/25/10', Learning_Rate: 0.5, Momentum: 'True', Accuracy: 98.42 },
  { id: 2, Epochs: 20, Mini_Batch_Size: 128, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'True', Accuracy: 98.14 },
  { id: 3, Epochs: 20, Mini_Batch_Size: 128, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'False', Accuracy: 97.51},
  { id: 4, Epochs: 20, Mini_Batch_Size: 60000, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'True', Accuracy: 84.13},
  { id: 5, Epochs: 20, Mini_Batch_Size: 60000, Neurons: '100/50/10', Learning_Rate: 0.5, Momentum: 'False', Accuracy: 65.16},
];

// Table component
const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Epochs</th>
            <th>Mini-Batch Size</th>
            <th>Neurons (Layer 1/Layer 2/.../Layer n)</th>
            <th>Learning Rate</th>
            <th>Momentum Applied</th>
            <th>Accuracy (%)</th>
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
              <td>{item.Accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
