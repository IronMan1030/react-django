import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";
import DrawerContext from "../../context/DrawerContext";
// import { Scrollbars } from "react-custom-scrollbars";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import { Form, DrawerTitleWrapper, DrawerTitle, FieldDetails, ButtonGroup } from "../DrawerItems/DrawerItems.style";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

const options = [
  { value: "grocery", name: "Grocery", id: "1" },
  { value: "women-cloths", name: "Women Cloths", id: "2" },
  { value: "bags", name: "Bags", id: "3" },
  { value: "makeup", name: "Makeup", id: "4" },
];

const AddCategory = (props) => {
  const dispatch = DrawerContext.useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [dispatch]);

  const { register, handleSubmit, setValue } = useForm();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    register({ name: "parent" });
  }, [register]);

  const onSubmit = ({ name, slug, parent }) => {
    // const newCategory = {
    //   id: uuidv4(),
    //   name: name,
    //   type: parent[0].value,
    //   slug: slug,
    //   icon: image,
    //   creation_date: new Date(),
    // };
    // createCategory({
    //   variables: { category: newCategory },
    // });
    // closeDrawer();
    // console.log(newCategory, "newCategory");
  };
  const handleChange = ({ value }) => {
    setValue("parent", value);
    setCategory(value);
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Category</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        {/* <Scrollbars
          autoHide
          renderView={(props) => <div {...props} style={{ ...props.style, overflowX: "hidden" }} />}
          renderTrackHorizontal={(props) => <div {...props} style={{ display: "none" }} className="track-horizontal" />}
        > */}

        <div className="row">
          <div className="col-lg-4">
            <FieldDetails>Add your category description and necessary information from here</FieldDetails>
          </div>

          <div className="col-lg-8">
            <DrawerBox>
              <FormFields>
                <FormLabel>Category Name</FormLabel>
                <Input inputRef={register({ required: true, maxLength: 20 })} name="name" />
              </FormFields>

              <FormFields>
                <FormLabel>Slug</FormLabel>
                <Input inputRef={register({ pattern: /^[A-Za-z]+$/i })} name="slug" />
              </FormFields>

              <FormFields>
                <FormLabel>Parent</FormLabel>
                <Select
                  options={options}
                  labelKey="name"
                  valueKey="value"
                  placeholder="Ex: Choose parent category"
                  value={category}
                  searchable={false}
                  onChange={handleChange}
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
            </DrawerBox>
          </div>
        </div>
        {/* </Scrollbars> */}

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
            Create Category
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddCategory;
