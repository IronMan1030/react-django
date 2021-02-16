import React, { useState, useCallback, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Scrollbars } from "react-custom-scrollbars";

import DrawerContext from "../../context/DrawerContext";
import ProductContext from "../../context/ProductContext";
import Uploader from "../../components/Uploader/Uploader";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import Input from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";

import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

import { Form, DrawerTitleWrapper, DrawerTitle, FieldDetails, ButtonGroup } from "../DrawerItems/DrawerItems.style";
import Switch from "react-switch";

import VariantForm from "./VariantForm";
import OptionsForm from "./OptionsForm";
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

let arrayContextOptions = [];
const AddProduct = (props) => {
  const dispatch = DrawerContext.useDrawerDispatch();
  const dispatch1 = ProductContext.useProductDispatch();
  const closeDrawer = useCallback(() => {
    dispatch({ type: "CLOSE_DRAWER" });
    dispatch1({ type: "CLOSE_PRODUCT" });
    arrayContextOptions = [];
  }, [dispatch, dispatch1]);

  const { register, handleSubmit, setValue } = useForm();
  const [type, setType] = useState([]);
  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState("");
  const [variants, setVariants] = useState([]);
  const [variantOptions, setVariantOptions] = useState([]);
  const [checked, setChecked] = useState(false);

  const tagValues = ProductContext.useProductState("optionTags");
  const optionType = ProductContext.useProductState("optionType");
  useEffect(() => {
    const theItem = arrayContextOptions.find(({ type, tags }) => type === optionType);
    if (theItem)
      arrayContextOptions = arrayContextOptions.map((item) => {
        if (item.type === optionType) {
          return { type: optionType, tags: tagValues };
        }
        return item;
      });
    else {
      if (optionType || tagValues) {
        arrayContextOptions = [...arrayContextOptions, { type: optionType, tags: tagValues }];
      }
    }

    tagValues && addVariant();
    register({ name: "type" });
    register({ name: "categories" });
    register({ name: "description" });
  }, [register, tagValues, optionType]);

  const handleUploader = (files) => {
    // setValue("image", files[0].path);
  };

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
    let removedVariants = variants.filter((variant, index) => index !== variantId);
    setVariants(removedVariants);
  };

  const addVariant = () => {
    let newOptions = [];
    let tempOptions = [];
    arrayContextOptions.map((option) => {
      tempOptions = [];
      option.tags.map((tag) => {
        tempOptions.push([{ type: option.type[0].value, tag: tag }]);
      });
      newOptions = [...newOptions, tempOptions];
    });

    // newOptions = [[[{ tag: "M" }, { type: "size" }]], [[{ tag: "L" }, { type: "size" }]]];
    // console.log(allPossibleOptions(newOptions));
    setVariants(allPossibleOptions(newOptions));
  };

  const allPossibleOptions = (items, isCombination = false) => {
    // finding all possible combinations of the last 2 items
    // remove those 2, add these combinations
    // isCombination shows if the last element is itself part of the combination series
    if (items.length == 1) {
      return items[0];
    } else if (items.length == 2) {
      var combinations = [];
      for (var i = 0; i < items[1].length; i++) {
        for (var j = 0; j < items[0].length; j++) {
          if (isCombination) {
            // clone array to not modify original array
            var combination = items[1][i].slice();
            combination.push(items[0][j]);
          } else {
            var combination = [items[1][i], items[0][j]];
          }
          combinations.push(combination);
        }
      }
      return combinations;
    } else if (items.length > 2) {
      var last2 = items.slice(-2);
      var butLast2 = items.slice(0, items.length - 2);
      last2 = allPossibleOptions(last2, isCombination);
      butLast2.push(last2);
      var combinations = butLast2;
      return allPossibleOptions(combinations, (isCombination = true));
    }
  };

  const handleVariantChange = (checked) => {
    if (checked) {
      setVariantOptions([variantOptions.length + 1]);
    } else {
      setVariantOptions([]);
      setVariants([]);
      arrayContextOptions = [];
    }
    setChecked(checked);
  };

  const getMaxIndex = (arr) => {
    let getArrayMax = null;
    if (arr.length) {
      getArrayMax = Math.max.apply(null, arr);
    } else {
      getArrayMax = 0;
    }
    return getArrayMax;
  };

  const handleClickAddOption = () => {
    let optionIndex = getMaxIndex(variantOptions) + 1;
    setVariantOptions([...variantOptions, optionIndex]);
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

  const onOptionRemove = (i) => {
    let optionIndexArray = variantOptions.filter((option) => option !== i);
    console.log(optionIndexArray);
    setVariantOptions(optionIndexArray);
  };

  // console.log(variants);
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
              <FieldDetails>Upload your Product image here</FieldDetails>
            </div>
            <div className="col-lg-10">
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: "100%",
                      height: "auto",
                      padding: "30px",
                      borderRadius: "3px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  },
                }}
              >
                <Uploader onChange={handleUploader} />
              </DrawerBox>
            </div>
          </div>
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
                  <Textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    overrides={{
                      Input: {
                        style: ({ $theme }) => ({
                          height: "150px",
                        }),
                      },
                    }}
                  />
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
                <div className="default-pricing">
                  <div className="row mb-3">
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>Price</FormLabel>
                        <Input type="number" inputRef={register({ required: true })} name="defaultPrice" />
                      </FormFields>
                    </div>
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>Unit</FormLabel>
                        <Input type="text" inputRef={register} name="unit" />
                      </FormFields>
                    </div>
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>Compare Price</FormLabel>
                        <Input type="number" inputRef={register({ required: true })} name="defaultComparePrice" />
                      </FormFields>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>SKU(Stock Keeping Unit)</FormLabel>
                        <Input type="text" inputRef={register} name="defaultSKU" />
                      </FormFields>
                    </div>
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>Barcode (ISBN, UPC, GTIN, etc.)</FormLabel>
                        <Input type="text" inputRef={register} name="defaultBarcode" />
                      </FormFields>
                    </div>
                    <div className="col-lg-4">
                      <FormFields>
                        <FormLabel>Quantity</FormLabel>
                        <Input type="number" inputRef={register({ required: true })} name="defaultQuantity" />
                      </FormFields>
                    </div>
                  </div>
                </div>

                <FormFields>
                  <FormLabel>Variant</FormLabel>
                  <div className="d-flex align-items-center">
                    <span style={{ color: "#161f6a" }}>
                      This product has multiple options, like different sizes or colors
                    </span>
                    <Switch
                      onChange={handleVariantChange}
                      checked={checked}
                      onColor="#37ffc6"
                      onHandleColor="#00c58d"
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={20}
                      width={48}
                      className="react-switch"
                      id="material-switch"
                    />
                  </div>
                </FormFields>

                {variantOptions.map((option, index) => {
                  return (
                    <OptionsForm key={option} index={index + 1} optionId={option} onOptionRemove={onOptionRemove} />
                  );
                })}

                {variantOptions.length > 0 && variantOptions.length < 3 ? (
                  <FormFields>
                    <Button
                      onClick={handleClickAddOption}
                      type="button"
                      overrides={{
                        BaseButton: {
                          style: ({ $theme }) => ({
                            width: "23%",
                            borderTopLeftRadius: "3px",
                            borderTopRightRadius: "3px",
                            borderBottomRightRadius: "3px",
                            borderBottomLeftRadius: "3px",
                          }),
                        },
                      }}
                    >
                      Add another option
                    </Button>
                  </FormFields>
                ) : (
                  <FormFields></FormFields>
                )}
                {variants.map((variant, index) => (
                  <VariantForm
                    key={index}
                    variantIndex={index}
                    useRegister={register}
                    useSetValue={setValue}
                    handleVariantRemove={handleVariantRemove}
                    contextVariant={variant}
                  />
                ))}
              </DrawerBox>
            </div>
          </div>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            type="button"
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
