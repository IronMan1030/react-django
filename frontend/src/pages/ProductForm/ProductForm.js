import React, { useState, useCallback, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Scrollbars } from "react-custom-scrollbars";
import DrawerContext from "../../context/DrawerContext";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import Input from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

import { Form, DrawerTitleWrapper, DrawerTitle, FieldDetails, ButtonGroup } from "../DrawerItems/DrawerItems.style";

import VariantForm from "./VariantForm";
import "./ProductForm.css";
const options = [
  { value: "Fruits & Vegetables", name: "Fruits & Vegetables", id: "1" },
  { value: "Meat & Fish", name: "Meat & Fish", id: "2" },
  { value: "Purse", name: "Purse", id: "3" },
  { value: "Hand bags", name: "Hand bags", id: "4" },
  { value: "Shoulder bags", name: "Shoulder bags", id: "5" },
  { value: "Wallet", name: "Wallet", id: "6" },
  { value: "Laptop bags", name: "Laptop bags", id: "7" },
  { value: "Women Dress", name: "Women Dress", id: "8" },
  { value: "Outer Wear", name: "Outer Wear", id: "9" },
  { value: "Pants", name: "Pants", id: "10" },
];

const typeOptions = [
  { value: "grocery", name: "Grocery", id: "1" },
  { value: "women-cloths", name: "Women Cloths", id: "2" },
  { value: "bags", name: "Bags", id: "3" },
  { value: "makeup", name: "Makeup", id: "4" },
];

const AddProduct = (props) => {
  const dispatch = DrawerContext.useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [dispatch]);
  const { register, handleSubmit, setValue } = useForm();
  const [type, setType] = useState([]);
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState("");
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    register({ name: "type" });
    register({ name: "categories" });
    register({ name: "description" });
  }, [register]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setValue("description", value);
    setDescription(value);
  };

  const handleMultiChange = ({ value }) => {
    setValue("categories", value);
    setTag(value);
  };

  const handleTypeChange = ({ value }) => {
    setValue("type", value);
    setType(value);
  };

  const handleVariantRemove = (variantId) => {
    let variantIndexArray = variants.filter((variant) => variant !== variantId);
    console.log(variantIndexArray);
    setVariants(variantIndexArray);
  };

  const handleAddVariant = () => {
    let getArrayMax = null;
    if (variants.length) {
      getArrayMax = Math.max.apply(null, variants);
    } else {
      getArrayMax = 0;
    }
    let variantIndex = getArrayMax + 1;
    setVariants([...variants, variantIndex]);
  };

  const onSubmit = (data) => {
    console.log(data);
    // const newProduct = {
    //   id: uuidv4(),
    //   name: data.name,
    //   type: data.type[0].value,
    //   description: data.description,
    //   image: data.image && data.image.length !== 0 ? data.image : "",
    //   price: Number(data.price),
    //   unit: data.unit,
    //   salePrice: Number(data.salePrice),
    //   discountInPercent: Number(data.discountInPercent),
    //   quantity: Number(data.quantity),
    //   slug: data.name,
    //   creation_date: new Date(),
    // };
    // console.log(newProduct, "newProduct data");
    // createProduct({
    //   variables: { product: newProduct },
    // });
    // closeDrawer();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Product</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Scrollbars
          autoHide
          renderView={(props) => <div {...props} style={{ ...props.style, overflowX: "hidden" }} />}
          renderTrackHorizontal={(props) => <div {...props} style={{ display: "none" }} className="track-horizontal" />}
        >
          <div className="row">
            <div className="col-lg-2">
              <FieldDetails>Add your Product description and necessary information from here</FieldDetails>
            </div>

            <div className="col-lg-10">
              <DrawerBox>
                <FormFields>
                  <FormLabel>Title</FormLabel>
                  <Input inputRef={register({ required: true, maxLength: 20 })} name="name" />
                </FormFields>

                <FormFields>
                  <FormLabel>Description</FormLabel>
                  <Textarea value={description} onChange={handleDescriptionChange} />
                </FormFields>

                <FormFields>
                  <FormLabel>Type</FormLabel>
                  <Select
                    options={typeOptions}
                    labelKey="name"
                    valueKey="value"
                    placeholder="Product Type"
                    value={type}
                    searchable={false}
                    onChange={handleTypeChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected ? $theme.colors.textDark : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Categories</FormLabel>
                  <Select
                    options={options}
                    labelKey="name"
                    valueKey="value"
                    placeholder="Product Tag"
                    value={tag}
                    onChange={handleMultiChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                    multi
                  />
                </FormFields>

                {variants.map((variant) => (
                  <VariantForm
                    key={variant}
                    variantIndex={variant}
                    useRegister={register}
                    useSetValue={setValue}
                    handleVariantRemove={handleVariantRemove}
                  />
                ))}
                <div className="d-flex justify-content-end mt-3">
                  <Button
                    type="button"
                    onClick={handleAddVariant}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          width: "20%",
                          borderTopLeftRadius: "3px",
                          borderTopRightRadius: "3px",
                          borderBottomRightRadius: "3px",
                          borderBottomLeftRadius: "3px",
                        }),
                      },
                    }}
                  >
                    Add Variant
                  </Button>
                </div>
              </DrawerBox>
            </div>
          </div>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                  marginRight: "15px",
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                }),
              },
            }}
          >
            Create Product
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddProduct;
