import React, { useState, useCallback } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CURRENCY } from "../../settings/constants";
import { Plus } from "../../assets/icons/Plus";
import DrawerContext from "../../context/DrawerContext";

function Products() {
  const typeSelectOptions = [
    { value: "grocery", label: "Grocery" },
    { value: "women-cloths", label: "Women Cloths" },
    { value: "bags", label: "Bags" },
    { value: "makeup", label: "Makeup" },
  ];
  const priceSelectOptions = [
    { value: "highestToLowest", label: "Highest To Lowest" },
    { value: "lowestToHighest", label: "Lowest To Highest" },
  ];

  const [type, setType] = useState([]);
  const [priceOrder, setPriceOrder] = useState([]);
  const [search, setSearch] = useState([]);

  const dispatch = DrawerContext.useDrawerDispatch();
  const openDrawer = useCallback(() => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }), [dispatch]);

  function handlePriceSort({ value }) {
    setPriceOrder(value);
    if (value.length) {
      // refetch({
      //   sortByPrice: value[0].value,
      // });
    } else {
      // refetch({
      //   sortByPrice: null,
      // });
    }
  }
  function handleCategoryType({ value }) {
    setType(value);
    if (value.length) {
      // refetch({
      //   type: value[0].value,
      // });
    } else {
      // refetch({
      //   type: null,
      // });
    }
  }
  function handleSearch(event) {
    const value = event.currentTarget.value;
    setSearch(value);
    // refetch({ searchText: value });
  }
  const items = [
    {
      name: "test1",
      unit: "2lb",
      image: "https://www.sandlundhossain.com/wp-content/uploads/2019/08/IMG_2367-300x300.jpg",
      price: "134",
      salePrice: "443",
      discountInPercent: "33",
    },
    {
      name: "test2",
      unit: "3pc(s)",
      image: "https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_strawberry.jpg",
      price: "123",
      salePrice: "777",
      discountInPercent: "",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="dashboard-content-header mb-3">
            <div className="col-md-2">
              <h3 className="heading-title">Product</h3>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <Select
                    options={typeSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    placeholder="Category Type"
                    value={type}
                    searchable={false}
                    onChange={handleCategoryType}
                  />
                </div>
                <div className="col-md-3">
                  <Select
                    options={priceSelectOptions}
                    labelKey="label"
                    valueKey="value"
                    value={priceOrder}
                    placeholder="Price"
                    searchable={false}
                    onChange={handlePriceSort}
                  />
                </div>
                <div className="col-md-3">
                  <Input value={search} placeholder="Ex: Search By Name" onChange={handleSearch} clearable />
                </div>
                <div className="col-md-3">
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
                    Add Product
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {items.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-4" key={index}>
                  <ProductCard
                    title={item.name}
                    weight={item.unit}
                    image={item.image}
                    currency={CURRENCY}
                    price={item.price}
                    salePrice={item.salePrice}
                    discountInPercent={item.discountInPercent}
                    data={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
