import React, { useState } from "react";
import { Layout } from "antd";

import "../../../Css/Sidebar.scss";

import { Link, Outlet, useNavigate } from "react-router-dom";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Sidebar from "./Sidebar";
import Setting from "../../Admin/Setting/Setting";

const { Content } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(true);

  const handleChange = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const UserName = localStorage.getItem("name");
  console.log("UserName", UserName);
  const [logout, setLogout] = React.useState(false);

  return (
    <div>
      <div onChange={handleChange}>
        <div className="dashboards__headerNavs">
          <div className="dashboards__headerNavs--container">
            <div>
              <span
                className="navMenu p-2"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </span>
            
            </div>
           
            <div>
              <Setting />
            </div>
          </div>
        </div>
      </div>{" "}
      <Sidebar collapsed={collapsed} />
      <div
        className={collapsed === true ? "main-content open" : "main-content"}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
