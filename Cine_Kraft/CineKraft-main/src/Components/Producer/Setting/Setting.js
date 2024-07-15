import { MdOutlineSettings } from "react-icons/md";
import { Dropdown, Space } from "antd";
const items = [
//   {
//     label: <a href="">Theme</a>,
//     key: "0",
//   },
  {
    label: <a href="/AdminLogin">Logout</a>,
    key: "1",
  },
];
const Setting = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a href="/" onClick={(e) => e.preventDefault()} alt="">
      <Space>
        <MdOutlineSettings className="navMenus" />
      </Space>
    </a>
  </Dropdown>
);
export default Setting;
