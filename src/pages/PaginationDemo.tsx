import React, { useState } from "react";
import Pagination from "../components/pagination/Pagination"; // Adjust this path if needed
import Table from "../components/table/Table";

// Dummy data generator
const generateData = (total: number) =>
  Array.from({ length: total }, (_, i) => ({
    key: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 2 === 0 ? "Admin" : "User",
    status: i % 3 === 0 ? "Active" : "Inactive",
    registeredDate: `2024-0${(i % 9) + 1}-0${(i % 28) + 1}`,
    location: `City ${((i % 10) + 1)}`,
  }));

const totalItems = 100;
const allData = generateData(totalItems);

const PaginatedDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedData = allData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Registered Date",
      dataIndex: "registeredDate",
      key: "registeredDate",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];

  const handlePaginationChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize && pageSize !== rowsPerPage) {
      setRowsPerPage(pageSize);
      setCurrentPage(1); // Reset to first page when pageSize changes
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
      <div style={{ marginTop: 24 }}>
        <Pagination
          total={totalItems}
          current={currentPage}
          pageSize={rowsPerPage}
          showTotalItems
          showRowsPerPage
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default PaginatedDemo;
