import React, { useCallback } from "react";
import { styled } from "baseui";
import Drawer from "../../components/Drawer/Drawer";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import DrawerContext from "../../context/DrawerContext";

/** Drawer Components */
import CategoryForm from "../CategoryForm/CategoryForm";
import Sidebar from "../Layout/Sidebar/Sidebar";
import ProductForm from "../ProductForm/ProductForm";
import MailForm from "../MailForm/MailForm";

/** Components Name Constants */
const DRAWER_COMPONENTS = {
  PRODUCT_FORM: ProductForm,
  CATEGORY_FORM: CategoryForm,
  MAIL_FORM: MailForm,
  SIDEBAR: Sidebar,
};

const CloseButton = styled("button", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  color: $theme.colors.textNormal,
  lineHeight: 1.2,
  outline: "0",
  border: "none",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "10px",
  left: "-30px",
  right: "auto",
  cursor: "pointer",
  backgroundColor: "#ffffff",
  width: "20px",
  height: "20px",
  borderRadius: "50%",

  "@media only screen and (max-width: 767px)": {
    left: "auto",
    right: "30px",
    top: "29px",
  },
}));

export default function DrawerItems() {
  const isOpen = DrawerContext.useDrawerState("isOpen");
  const drawerComponent = DrawerContext.useDrawerState("drawerComponent");
  const data = null;
  const dispatch = DrawerContext.useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [dispatch]);

  if (!drawerComponent) {
    return null;
  }
  const SpecificContent = DRAWER_COMPONENTS[drawerComponent];

  return (
    <Drawer
      isOpen={isOpen}
      onClose={closeDrawer}
      overrides={{
        Root: {
          style: {
            zIndex: 2,
          },
        },
        DrawerBody: {
          style: {
            marginTop: "80px",
            marginLeft: "60px",
            marginRight: "60px",
            marginBottom: "30px",
            "@media only screen and (max-width: 767px)": {
              marginTop: "80px",
              marginLeft: "30px",
              marginRight: "30px",
              marginBottom: "30px",
            },
          },
        },
        DrawerContainer: {
          style: {
            width: "70vw",
            backgroundColor: "#f7f7f7",
            "@media only screen and (max-width: 767px)": {
              width: "100%",
            },
          },
        },
        Close: {
          component: () => (
            <CloseButton onClick={closeDrawer}>
              <CloseIcon width="6px" height="6px" />
            </CloseButton>
          ),
        },
      }}
    >
      <SpecificContent data={data} />
    </Drawer>
  );
}
