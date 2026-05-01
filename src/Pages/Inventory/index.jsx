import { Typography, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space direction="vertical" size={20}>
      <Typography.Title level={4}>Inventory</Typography.Title>

      <Table
        loading={loading}
        columns={[
          { title: "Title", dataIndex: "title" },
          { title: "Price($)", dataIndex: "price" },
          { title: "Rating", dataIndex: "rating" },
          { title: "Stock", dataIndex: "stock" },
          { title: "Brand", dataIndex: "brand" },
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => <img src={link} width={50} />,
          },
          { title: "Category", dataIndex: "category" },
        ]}
        dataSource={dataSource}
        rowKey="id"
      />
    </Space>
  );
}

export default Inventory;
