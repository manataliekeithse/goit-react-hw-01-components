export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
