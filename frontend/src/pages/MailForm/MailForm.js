import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import DrawerContext from "../../context/DrawerContext";
import Input from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import { Form, DrawerTitleWrapper, DrawerTitle, FieldDetails, ButtonGroup } from "../DrawerItems/DrawerItems.style";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

const MailForm = (props) => {
  const dispatch = DrawerContext.useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [dispatch]);
  const { register, handleSubmit, setValue } = useForm();
  const [message, setMessage] = useState("");

  useEffect(() => {
    register({ name: "message" });
  }, [register]);

  const onSubmit = (data) => {
    console.log(data);
    closeDrawer();
  };
  const handleMessageChange = (e) => {
    const value = e.target.value;
    setValue("message", value);
    setMessage(value);
  };
  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Compose Message</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <div className="row">
          <div className="col-lg-12">
            <DrawerBox>
              <FormFields>
                <FormLabel>To:</FormLabel>
                <Input type="email" inputRef={register({ required: true, maxLength: 20 })} name="to" />
              </FormFields>

              <FormFields>
                <FormLabel>Subject:</FormLabel>
                <Input inputRef={register({ required: true, maxLength: 50 })} name="subject" />
              </FormFields>
              <FormFields>
                <FormLabel>Your Message:</FormLabel>
                <Textarea value={message} onChange={handleMessageChange} />
              </FormFields>
            </DrawerBox>
          </div>
        </div>
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
            Send
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default MailForm;
