// components/docs/PaginationDoc.tsx
import React from "react";
import Pagination from "../components/pagination/Pagination";
import ComponentDocLayout from "./ComponentDocLayout";
import Badge from "../components/badge/Badge";

const description = (
  <p className="text-base leading-relaxed">
    The <Badge type="filled" status="primary">Pagination</Badge> component extends Ant Design’s base pagination to provide
    enhanced flexibility for real-world use cases. It introduces support for displaying a custom total count section and a
    fully controlled <Badge type="stroke" status="info" dot>rows-per-page</Badge> dropdown.
  </p>
);

const customProps = (
  <ul className="list-disc list-inside text-base space-y-2">
    <li>
      <strong><Badge type="filled" status="neutral" dot>showTotalItems</Badge></strong> – Boolean. If <code>true</code>, displays a custom total item label (e.g. "Total 300 items") on the left of the pagination bar.
      <br />
      <span className="text-sm text-gray-500">We added this because Ant Design’s default <code>showTotal</code> didn’t offer customizable positioning or format in our layout.</span>
    </li>
    <li>
      <strong><Badge type="filled" status="neutral" dot>showRowsPerPage</Badge></strong> – Boolean. Enables a custom-styled select input for controlling how many rows to display per page.
      <br />
      <span className="text-sm text-gray-500">This was necessary because the default Ant Design pagination lacked consistent dropdown styling and integration with our design system.</span>
    </li>
    <li>
      <strong><Badge type="stroke" status="info">All native props supported</Badge></strong> – Native Ant Design props like <code>total</code>, <code>current</code>, <code>onChange</code>, and <code>pageSize</code> remain fully usable.
    </li>
  </ul>
);

const nativeProps = (
  <p className="text-base leading-relaxed">
    This component is a wrapper around Ant Design’s <code>Pagination</code>, and supports all its native props as-is,
    while also adding layout and behavior improvements through <Badge type="stroke" status="success" dot>showTotalItems</Badge> and
    <Badge type="stroke" status="success" dot>showRowsPerPage</Badge>.
  </p>
);

const examples = [
  {
    label: "Pagination with total items and rows-per-page selector",
    code: `<Pagination 
  defaultCurrent={5}
  total={300}
  showTotalItems
  showRowsPerPage
/>`,
    element: (
      <Pagination
        defaultCurrent={5}
        total={300}
        showTotalItems
        showRowsPerPage
      />
    ),
  },
];

const PaginationDoc: React.FC = () => {
  return (
    <ComponentDocLayout
      title="Pagination Documentation"
      description={description}
      customProps={customProps}
      nativeProps={nativeProps}
      examples={examples}
    />
  );
};

export default PaginationDoc;
