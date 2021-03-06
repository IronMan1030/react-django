import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { SidebarWrapper, NavLink, MenuWrapper, Svg, LogoutBtn } from "./Sidebar.style";
import { DASHBOARD, PRODUCTS, CATEGORY, ORDERS, SETTINGS, MESSAGES } from "../../../settings/constants";

import { DashboardIcon } from "../../../assets/icons/DashboardIcon";
import { ProductIcon } from "../../../assets/icons/ProductIcon";
import { SidebarCategoryIcon } from "../../../assets/icons/SidebarCategoryIcon";
import { OrderIcon } from "../../../assets/icons/OrderIcon";
import { LogoutIcon } from "../../../assets/icons/LogoutIcon";
import { SettingIcon } from "../../../assets/icons/SettingIcon";
import { MessageIcon } from "../../../assets/icons/MessageIcon";

const sidebarMenus = [
  {
    name: "Dashboard",
    path: DASHBOARD,
    exact: true,
    icon: <DashboardIcon />,
  },
  {
    name: "Products",
    path: PRODUCTS,
    exact: false,
    icon: <ProductIcon />,
  },
  // {
  //   name: "Category",
  //   path: CATEGORY,
  //   exact: false,
  //   icon: <SidebarCategoryIcon />,
  // },
  {
    name: "Orders",
    path: ORDERS,
    exact: false,
    icon: <OrderIcon />,
  },
  {
    name: "Messages",
    path: MESSAGES,
    exact: false,
    icon: <MessageIcon />,
  },
  {
    name: "Settings",
    path: SETTINGS,
    exact: false,
    icon: <SettingIcon />,
  },
];

export default withRouter(function Sidebar({ refs, style, onMenuItemClick }) {
  //   const { signout } = useContext(AuthContext);
  return (
    <SidebarWrapper ref={refs} style={style}>
      <MenuWrapper>
        {sidebarMenus.map((menu, index) => (
          <NavLink
            to={menu.path}
            key={index}
            exact={menu.exact}
            activeStyle={{
              color: "#00C58D",
              backgroundColor: "#f7f7f7",
              borderRadius: "50px 0 0 50px",
            }}
            onClick={onMenuItemClick}
          >
            {menu.icon ? <Svg>{menu.icon}</Svg> : ""}
            {menu.name}
          </NavLink>
        ))}
      </MenuWrapper>

      <LogoutBtn
        onClick={() => {
          //   signout();
        }}
      >
        <Svg>
          <LogoutIcon />
        </Svg>
        Logout
      </LogoutBtn>
    </SidebarWrapper>
  );
});
