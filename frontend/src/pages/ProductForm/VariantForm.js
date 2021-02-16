import React, { useState, useRef, useEffect } from "react";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import Input from "../../components/Input/Input";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

import { FileLibraryListItem, ReactMediaLibrary, FileMeta } from "react-media-library-daniel-daleva";

function VariantForm({ variantIndex, useRegister, useSetValue, handleVariantRemove, contextVariant }) {
  const setValue = useSetValue;
  const register = useRegister;
  const uploadImage = useRef();
  const [previewImage, setPreviewImage] = useState();

  const [display, setDisplay] = useState(false);
  const [fileLibraryList, setFileLibraryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    register({ name: `image${variantIndex}` });
    setFileLibraryList([
      {
        _id: 1,
        thumbnailUrl:
          "https://media-exp1.licdn.com/dms/image/sync/C4D18AQE2jWv7y_cZVA/companyUpdate-article-image-shrink_627_1200/0/1611222205245?e=1614816000&v=beta&t=FurfMOvjwvuzsMJop9caguRshtD1jo9zCRogIIp59ZY",
      },
      {
        _id: 2,
        thumbnailUrl:
          "https://media-exp1.licdn.com/dms/image/sync/C4D18AQE2jWv7y_cZVA/companyUpdate-article-image-shrink_627_1200/0/1611222205245?e=1614816000&v=beta&t=FurfMOvjwvuzsMJop9caguRshtD1jo9zCRogIIp59ZY",
      },
      {
        _id: 3,
        thumbnailUrl:
          "https://media-exp1.licdn.com/dms/image/sync/C4D18AQE2jWv7y_cZVA/companyUpdate-article-image-shrink_627_1200/0/1611222205245?e=1614816000&v=beta&t=FurfMOvjwvuzsMJop9caguRshtD1jo9zCRogIIp59ZY",
      },
      {
        _id: 4,
        thumbnailUrl:
          "https://media-exp1.licdn.com/dms/image/sync/C4D18AQE2jWv7y_cZVA/companyUpdate-article-image-shrink_627_1200/0/1611222205245?e=1614816000&v=beta&t=FurfMOvjwvuzsMJop9caguRshtD1jo9zCRogIIp59ZY",
      },
    ]);
    setIsLoading(false);
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

  async function uploadCallback(fileBase64, fileMeta) {
    // const result = await fileUpload(fileBase64, fileMeta);
    // if (result.success) {
    //     const newFileList = await getNewFileList();
    //     setFileLibraryList(newFileList);
    //     return true;
    // } else {
    //     return false;
    // }
  }

  function selectCallback(item) {
    // Hide modal
    setDisplay(false);
    console.log(item);
    // clientSelectCallback(item);
  }

  async function deleteCallback(item) {
    // const result = await fileDelete(item);
    // if (result.success) {
    //     // Deleted file
    //     // TODO Reacquire file list from database
    //     const newFileList = await getNewFileList();
    //     setFileLibraryList(newFileList);
    // }
  }
  return (
    <>
      <div className="variant-section">
        <div className="row">
          <div className="col-lg-3">
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
              {/* <div className="select-variant-image" onClick={handleClickImage}> */}
              <div className="select-variant-image" onClick={() => setDisplay(true)}>
                {previewImage ? <img src={previewImage} alt="upload image" /> : <p>Select the variant image</p>}
              </div>
              {/* <input
                type="file"
                // name={variantIndex.inputFileName}
                onChange={handleUploader}
                style={{ display: "none" }}
                ref={uploadImage}
              /> */}
            </DrawerBox>
          </div>

          {contextVariant.map((v, index) => {
            return (
              <div className="col-lg-3" key={index}>
                <FormFields>
                  <FormLabel>{v.length ? v[0].type.toUpperCase() : v.type.toUpperCase()}</FormLabel>
                  <Input
                    type="text"
                    inputRef={register({ required: true })}
                    name={v.length ? v[0].type : v.tag + variantIndex}
                    value={v.length ? v[0].tag : v.tag || ""}
                  />
                </FormFields>
              </div>
            );
          })}

          {/* <div className="col-lg-4">
            <FormFields>
              <FormLabel>Size</FormLabel>
              <Input type="text" inputRef={register({ required: true })} name={`size${variantIndex}`} />
            </FormFields>
          </div> */}
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
      <ReactMediaLibrary
        isLoading={isLoading}
        show={display}
        onHide={() => setDisplay(false)}
        fileUploadCallback={uploadCallback}
        fileLibraryList={fileLibraryList}
        fileSelectCallback={selectCallback}
        fileDeleteCallback={deleteCallback}
      />
    </>
  );
}

export default VariantForm;
