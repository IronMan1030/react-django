import React, { useCallback, useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/CheckBox/CheckBox";
import { CustomerIcon } from "../../assets/icons/CustomerIcon";
import { CouponIcon } from "../../assets/icons/CouponIcon";
import { TrashIcon } from "../../assets/icons/Trash";
import { ArrowNext } from "../../assets/icons/ArrowNext";
import { ArrowPrev } from "../../assets/icons/ArrowPrev";
import { Plus } from "../../assets/icons/Plus";
import DrawerContext from "../../context/DrawerContext";
import "./Messages.css";

function Messages() {
  const [search, setSearch] = useState("");
  const dispatch = DrawerContext.useDrawerDispatch();
  const openDrawer = useCallback(() => dispatch({ type: "OPEN_DRAWER", drawerComponent: "MAIL_FORM" }), [dispatch]);
  const [isActive, setIsActive] = useState(1);
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);
  const [paginationCount, setPaginationCount] = useState();
  const [msgCon, setMsgCon] = useState([]);

  const resInboxMsgCon = [
    {
      id: 1,
      sender: "Mike",
      senderEmail: "test1@test1.com",
      senderCon: "send test",
      receiverEmail: "testReceiver@test.com",
      date: "2021/1/9",
    },
  ];
  const resSentMsgCon = [
    {
      id: 1,
      sender: "Jane",
      senderEmail: "test2@test.com",
      senderCon: "send test2",
      receiverEmail: "testReceiver2@test.com",
      date: "2021/1/8",
    },
  ];

  const handleSearch = (event) => {
    const value = event.currentTarget.value;
    setSearch(value);
  };

  const onAllCheck = (event) => {
    if (event.target.checked) {
      const idx = msgCon && msgCon.map((current) => current.id);
      setCheckedId(idx);
    } else {
      setCheckedId([]);
    }
    setChecked(event.target.checked);
  };
  const handleCheckbox = (event) => {
    const { name } = event.currentTarget;
    if (!checkedId.includes(parseInt(name))) {
      setCheckedId((prevState) => [...prevState, parseInt(name)]);
    } else {
      setCheckedId((prevState) => prevState.filter((id) => id !== parseInt(name)));
    }
  };

  useEffect(() => {
    setMsgCon(resInboxMsgCon);
  }, []);

  const handleLeftTabClick = (index) => {
    if (index === 1) {
      setIsActive(1);
      setMsgCon(resInboxMsgCon);
    } else {
      setIsActive(2);
      setMsgCon(resSentMsgCon);
    }
  };
  return (
    <div className="msg-section">
      <div className="row">
        <div className="col-lg-3">
          <div className="msg-card">
            <div className="msg-card-body">
              <div className="email-list">
                <Button
                  startEnhancer={() => <Plus />}
                  overrides={{
                    BaseButton: {
                      style: () => ({
                        width: "100%",
                        borderTopLeftRadius: "3px",
                        borderTopRightRadius: "3px",
                        borderBottomLeftRadius: "3px",
                        borderBottomRightRadius: "3px",
                      }),
                    },
                  }}
                  onClick={openDrawer}
                >
                  New Message
                </Button>

                <div className="email-btn-section">
                  <li className={`inbox ${isActive === 1 && "active"}`} onClick={() => handleLeftTabClick(1)}>
                    <span>
                      <CustomerIcon />
                    </span>
                    <div className="inbox-body">
                      <p>Inbox</p>
                      <p>4</p>
                    </div>
                  </li>
                  <li className={`inbox ${isActive === 2 && "active"}`} onClick={() => handleLeftTabClick(2)}>
                    <span>
                      <CouponIcon />
                    </span>
                    <p>Sent Mail</p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div
            className="dashboard-content-header"
            style={{
              marginBottom: 30,
              boxShadow: "0 0 5px rgba(0, 0 ,0, 0.05)",
            }}
          >
            <div className="col-md-2">
              <div className="d-flex">
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
                <div className="h-icon">
                  <span>
                    <TrashIcon />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-10">
              <div className="row">
                <div className="col-md-5 col-lg-6">
                  <Input value={search} placeholder="Ex: Search" onChange={handleSearch} clearable />
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="h-cell">
                    <p>1 - 50 of 505</p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="d-flex h-cell">
                    <div className="h-icon">
                      <span>
                        <ArrowPrev />
                      </span>
                    </div>
                    <div className="h-icon ml-2">
                      <span>
                        <ArrowNext />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* message body */}
          <div className="table-wrapper">
            {msgCon.map((value, index) => {
              return (
                <div className="styled-table-row" key={index}>
                  <div className="styled-cell" style={{ paddingBottom: "2px", width: "70px" }}>
                    <Checkbox
                      type="checkbox"
                      name={value.id}
                      checked={checkedId.includes(value.id)}
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
                  </div>
                  <div className="styled-cell" style={{ width: "380px" }}>
                    {value.sender}
                  </div>
                  <div className="styled-cell">{value.senderCon}...</div>
                  <div className="styled-cell" style={{ width: "200px" }}>
                    {value.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
