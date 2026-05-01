import { Badge, Image, Space, Typography } from "antd";
import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();

  return (
    <div className="AppHeader">
      <Image width={40} src="/Images/Header-1.png" preview={false} />
      <Typography.Title level={3} style={{ margin: 0 }}>
        Dashboard
      </Typography.Title>
      <Space size="large">
        <Badge count={10} dot>
          <MailOutlined
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={() => navigate("/orders")}
          />
        </Badge>
        <Badge count={20}>
          <BellOutlined
            style={{ fontSize: 24, cursor: "pointer" }}
            onClick={() => navigate("/customers")}
          />
        </Badge>
      </Space>
    </div>
  );
}

export default AppHeader;
