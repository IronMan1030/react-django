import React, { useState } from "react";
import { styled, withStyle, createThemedUseStyletron } from "baseui";
import dayjs from "dayjs";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/CheckBox/CheckBox";

import { TableWrapper, StyledTable, StyledHeadCell, StyledCell } from "./Orders.style";

const themedUseStyletron = createThemedUseStyletron();

const Status = styled("div", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  color: $theme.colors.textDark,
  display: "flex",
  alignItems: "center",
  lineHeight: "1",
  textTransform: "capitalize",

  ":before": {
    content: '""',
    width: "10px",
    height: "10px",
    display: "inline-block",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    backgroundColor: $theme.borders.borderE6,
    marginRight: "10px",
  },
}));

const statusSelectOptions = [
  { value: "delivered", label: "Delivered" },
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "failed", label: "Failed" },
];
const limitSelectOptions = [
  { value: 7, label: "Last 7 orders" },
  { value: 15, label: "Last 15 orders" },
  { value: 30, label: "Last 30 orders" },
];

export default function Orders() {
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);

  const [useCss, theme] = themedUseStyletron();
  const sent = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.primary,
    },
  });
  const failed = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.red400,
    },
  });
  const processing = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.textNormal,
    },
  });
  const paid = useCss({
    ":before": {
      content: '""',
      backgroundColor: theme.colors.blue400,
    },
  });

  const [status, setStatus] = useState([]);
  const [limit, setLimit] = useState([]);
  const [search, setSearch] = useState([]);

  // const { data, error, refetch } = useQuery(GET_ORDERS);
  // if (error) {
  //   return <div>Error! {error.message}</div>;
  // }

  function handleStatus({ value }) {
    setStatus(value);
    // if (value.length) {
    //   refetch({
    //     status: value[0].value,
    //     limit: limit.length ? limit[0].value : null,
    //   });
    // } else {
    //   refetch({ status: null });
    // }
  }

  function handleLimit({ value }) {
    setLimit(value);
    // if (value.length) {
    //   refetch({
    //     status: status.length ? status[0].value : null,
    //     limit: value[0].value,
    //   });
    // } else {
    //   refetch({
    //     limit: null,
    //   });
    // }
  }
  function handleSearch(event) {
    const { value } = event.currentTarget;
    setSearch(value);
    // refetch({ searchText: value });
  }
  function onAllCheck(event) {
    // if (event.target.checked) {
    //   const idx = data && data.orders.map((order) => order.id);
    //   setCheckedId(idx);
    // } else {
    //   setCheckedId([]);
    // }
    setChecked(event.target.checked);
  }

  function handleCheckbox(event) {
    const { name } = event.currentTarget;
    if (!checkedId.includes(name)) {
      setCheckedId((prevState) => [...prevState, name]);
    } else {
      setCheckedId((prevState) => prevState.filter((id) => id !== name));
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="dashboard-content-header"
            style={{
              marginBottom: 30,
              boxShadow: "0 0 8px rgba(0, 0 ,0, 0.1)",
            }}
          >
            <div className="col-md-3">
              <h3 className="heading-title">Orders</h3>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <Select
                    options={statusSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Status"
                    value={status}
                    searchable={false}
                    onChange={handleStatus}
                  />
                </div>

                <div className="col-md-3">
                  <Select
                    options={limitSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    value={limit}
                    placeholder="Order Limits"
                    searchable={false}
                    onChange={handleLimit}
                  />
                </div>

                <div className="col-md-6">
                  <Input value={search} placeholder="Ex: Search By Address" onChange={handleSearch} clearable />
                </div>
              </div>
            </div>
          </div>

          <div style={{ boxShadow: "0 0 5px rgba(0, 0 , 0, 0.05)" }}>
            <TableWrapper>
              <StyledTable $gridTemplateColumns="minmax(70px, 70px) minmax(70px, 70px) minmax(150px, auto) minmax(150px, auto) minmax(200px, max-content) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto) minmax(150px, auto)">
                <StyledHeadCell style={{ paddingBottom: "4px" }}>
                  <Checkbox
                    type="checkbox"
                    value="checkAll"
                    checked={checked}
                    onChange={onAllCheck}
                    overrides={{
                      Checkmark: {
                        style: {
                          borderTopWidth: "2px",
                          borderRightWidth: "2px",
                          borderBottomWidth: "2px",
                          borderLeftWidth: "2px",
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                          borderBottomRightRadius: "4px",
                          borderBottomLeftRadius: "4px",
                        },
                      },
                    }}
                  />
                </StyledHeadCell>
                <StyledHeadCell>ID</StyledHeadCell>
                <StyledHeadCell>Customer ID</StyledHeadCell>
                <StyledHeadCell>Time</StyledHeadCell>
                <StyledHeadCell>Delivery Address</StyledHeadCell>
                <StyledHeadCell>Amount</StyledHeadCell>
                <StyledHeadCell>Payment Method</StyledHeadCell>
                <StyledHeadCell>Contact</StyledHeadCell>
                <StyledHeadCell>Status</StyledHeadCell>

                {/* {data ? (
                  data.orders.length ? (
                    data.orders
                      .map((item) => Object.values(item))
                      .map((row, index) => (
                        <React.Fragment key={index}>
                          <StyledCell>
                            <Checkbox
                              name={row[1]}
                              checked={checkedId.includes(row[1])}
                              onChange={handleCheckbox}
                              overrides={{
                                Checkmark: {
                                  style: {
                                    borderTopWidth: "2px",
                                    borderRightWidth: "2px",
                                    borderBottomWidth: "2px",
                                    borderLeftWidth: "2px",
                                    borderTopLeftRadius: "4px",
                                    borderTopRightRadius: "4px",
                                    borderBottomRightRadius: "4px",
                                    borderBottomLeftRadius: "4px",
                                  },
                                },
                              }}
                            />
                          </StyledCell>
                          <StyledCell>{row[1]}</StyledCell>
                          <StyledCell>{row[2]}</StyledCell>
                          <StyledCell>{dayjs(row[3]).format("DD MMM YYYY")}</StyledCell>
                          <StyledCell>{row[4]}</StyledCell>
                          <StyledCell>${row[5]}</StyledCell>
                          <StyledCell>{row[6]}</StyledCell>
                          <StyledCell>{row[7]}</StyledCell>
                          <StyledCell style={{ justifyContent: "center" }}>
                            <Status
                              className={
                                row[8].toLowerCase() === "delivered"
                                  ? sent
                                  : row[8].toLowerCase() === "pending"
                                  ? paid
                                  : row[8].toLowerCase() === "processing"
                                  ? processing
                                  : row[8].toLowerCase() === "failed"
                                  ? failed
                                  : ""
                              }
                            >
                              {row[8]}
                            </Status>
                          </StyledCell>
                        </React.Fragment>
                      ))
                  ) : (
                    <NoResult
                      hideButton={false}
                      style={{
                        gridColumnStart: "1",
                        gridColumnEnd: "one",
                      }}
                    />
                  )
                ) : null} */}
              </StyledTable>
            </TableWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
