import { Typography, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => {
        const products = res.carts.flatMap((cart) => cart.products);
        setDataSource(products);
        setLoading(false);
      });
  }, []);
  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Orders</Typography.Title>

      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },

          { title: "Quantity", dataIndex: "quantity" },
          {
            title: "Total",
            render: (item) => <span>${item.price * item.quantity}</span>,
          },
        ]}
        dataSource={dataSource}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </Space>
  );
}

export default Orders;
