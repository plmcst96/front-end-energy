import React from "react";
import { Badge } from "react-bootstrap";

const InvoiceListItem = ({ invoice }) => {
  return (
    <tr>
      <td>{invoice.date}</td>
      <td>${invoice.amount.toFixed(2)}</td>
      <td>{invoice.number}</td>
      <td>
        <Badge variant={getBadgeVariant(invoice.invoiceState)}>
          {invoice.invoiceState}
        </Badge>
      </td>
    </tr>
  );
};

const getBadgeVariant = (state) => {
  switch (state) {
    case "PAID":
      return "success";
    case "PENDING":
      return "warning";
    case "CANCELLED":
      return "danger";
    default:
      return "secondary";
  }
};

export default InvoiceListItem;
