import React, { useCallback, useState } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/CheckBox/CheckBox";
import { Plus } from "../../assets/icons/Plus";
// import * as icons from "../../assets/icons/category-icons";
import "./Category.css";
import DrawerContext from "../../context/DrawerContext";

const categorySelectOptions = [
  { value: "grocery", label: "Grocery" },
  { value: "women-cloths", label: "Women Cloth" },
  { value: "bags", label: "Bags" },
  { value: "makeup", label: "Makeup" },
];

// let categoryData = [{ id: 1, name: "grocery" }];
export default function Category() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [checkedId, setCheckedId] = useState([]);
  const [checked, setChecked] = useState(false);

  const dispatch = DrawerContext.useDrawerDispatch();
  const openDrawer = useCallback(() => dispatch({ type: "OPEN_DRAWER", drawerComponent: "CATEGORY_FORM" }), [dispatch]);

  const handleSearch = (event) => {
    const value = event.currentTarget.value;
    setSearch(value);
  };
  const handleCategory = ({ value }) => {
    setCategory(value);
  };

  const onAllCheck = (event) => {
    if (event.target.checked) {
      // const idx = data && data.categories.map((current) => current.id);
      // setCheckedId(idx);
    } else {
      setCheckedId([]);      
    }
    setChecked(event.target.checked);
  };

  // const handleCheckbox = (event) => {
  //   const { name } = event.currentTarget;
  //   if (!checkedId.includes(name)) {
  //     setCheckedId((prevState) => [...prevState, name]);
  //   } else {
  //     setCheckedId((prevState) => prevState.filter((id) => id !== name));
  //   }
  // };
  // const Icon = ({ name }) => {
  //   const TagName = icons[name];
  //   return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
  // };

  // const handleAddCategory = () => {
  //   console.log("aaa");
  // };
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="dashboard-content-header"
            style={{
              marginBottom: 30,
              boxShadow: "0 0 5px rgba(0, 0 ,0, 0.05)",
            }}
          >
            <div className="col-md-2">
              <h3 className="heading-title">Category</h3>
            </div>

            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 col-lg-3">
                  <Select
                    options={categorySelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Category Type"
                    value={category}
                    searchable={false}
                    onChange={handleCategory}
                  />
                </div>

                <div className="col-md-5 col-lg-6">
                  <Input value={search} placeholder="Ex: Search By Name" onChange={handleSearch} clearable />
                </div>

                <div className="col-md-4 col-lg-3">
                  <Button
                    onClick={openDrawer}
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
                  >
                    Add Category
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ boxShadow: "0 0 5px rgba(0, 0 , 0, 0.05)" }}>
            <div className="table-wrapper">
              <div className="styled-table">
                <div className="styled-head-cell" style={{ paddingBottom: "2px", width: "70px" }}>
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
                </div>
                <div className="styled-head-cell">Id</div>
                <div className="styled-head-cell">Name</div>
                <div className="styled-head-cell">Slug</div>
                <div className="styled-head-cell">Type</div>

                {/* {data ? (
                  data.categories.length ? (
                    data.categories
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
                          <StyledCell>{row[3]}</StyledCell>
                          <StyledCell>{row[4]}</StyledCell>
                          <StyledCell>{row[5]}</StyledCell>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
