import React, { useState, useRef, useEffect } from "react";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import Input from "../../components/Input/Input";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

function VariantForm({ variantIndex, useRegister, useSetValue, handleVariantRemove }) {
  const setValue = useSetValue;
  const register = useRegister;
  const uploadImage = useRef();
  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    register({ name: `image${variantIndex}` });
  }, [register]);

  const handleUploader = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setValue(`image${variantIndex}`, e.target.files[0].name);
  };

  const handleClickImage = (e) => {
    uploadImage.current.click();
  };

  const handleClickRemove = (i) => {
    handleVariantRemove(i);
  };
  return (
    <>
      <div className="variant-section">
        <div className="row">
          <div className="col-lg-4">
            <DrawerBox
              overrides={{
                Block: {
                  style: {
                    width: "100%",
                    height: "auto",
                    borderRadius: "3px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                },
              }}
            >
              <div className="select-variant-image" onClick={handleClickImage}>
                {previewImage ? <img src={previewImage} alt="upload image" /> : <p>Select the variant image</p>}
              </div>
              <input
                type="file"
                // name={variantIndex.inputFileName}
                onChange={handleUploader}
                style={{ display: "none" }}
                ref={uploadImage}
              />
            </DrawerBox>
          </div>
          <div className="col-lg-4">
            <FormFields>
              <FormLabel>Color</FormLabel>
              <Input type="text" inputRef={register({ required: true })} name={`color${variantIndex}`} />
            </FormFields>
          </div>
          <div className="col-lg-4">
            <FormFields>
              <FormLabel>Size</FormLabel>
              <Input type="text" inputRef={register({ required: true })} name={`size${variantIndex}`} />
            </FormFields>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3">
            <FormFields>
              <FormLabel>Price</FormLabel>
              <Input type="number" inputRef={register({ required: true })} name={`price${variantIndex}`} />
            </FormFields>
          </div>
          <div className="col-lg-3">
            <FormFields>
              <FormLabel>Compare at price</FormLabel>
              <Input type="number" inputRef={register} name={`compareAtPrice${variantIndex}`} />
            </FormFields>
          </div>
          <div className="col-lg-3">
            <FormFields>
              <FormLabel>Product Quantity</FormLabel>
              <Input type="number" inputRef={register({ required: true })} name={`quantity${variantIndex}`} />
            </FormFields>
          </div>
          <div className="col-lg-3 align-self-end">
            <button type="button" className="btn btn-remove" onClick={() => handleClickRemove(variantIndex)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VariantForm;
