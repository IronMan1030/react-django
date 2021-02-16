import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { styled } from "baseui";
import { UploadIcon } from "../../assets/icons/UploadIcon";

const Text = styled("span", ({ $theme }) => ({
  ...$theme.typography.font14,
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textDark,
  marginTop: "15px",
  textAlign: "center",
}));

const TextHighlighted = styled("span", ({ $theme }) => ({
  color: $theme.colors.primary,
  fontWeight: "bold",
}));

const Container = styled("div", ({ props }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: "#E6E6E6",
  borderStyle: "dashed",
  backgroundColor: "#ffffff",
  color: "#bdbdbd",
  outline: "none",
  transition: "border 0.24s ease-in-out",
  cursor: "pointer",
}));

const ThumbsContainer = styled("aside", () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "16px",
}));

const Thumb = styled("div", ({ $theme }) => ({
  ...$theme.borders.borderEA,
  display: "inline-flex",
  borderRadius: "2px",
  marginBottom: "8px",
  marginRight: "8px",
  width: "100px",
  height: "100px",
  padding: "4px",
  boxSizing: "border-box",
  // ":hover": {
  //   background: "#000",
  //   zIndex: 999,
  // },
}));

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const hoverDiv = {
  position: "absolute",
  zIndex: 11,
  inset: "0px",
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  opacity: 1,
  background: "linear-gradient(rgba(33, 43, 54, 0.55), rgba(255, 255, 255, 0))",
  borderRadius: "5px",
  cursor: "pointer",
  left: "61px",
  top: "176px",
};
function Uploader({ onChange, imageURL }) {
  // const [files, setFiles] = useState(imageURL ? [{ name: "demo", preview: imageURL }] : []);
  const [files, setFiles] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: useCallback(
      (acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        onChange(acceptedFiles);
      },
      [onChange]
    ),
  });

  const thumbs = mediaFiles.map((file, index) => {
    return (
      <Thumb key={index}>
        {/* <div style={hoverDiv}></div> */}
        <div style={thumbInner}>
          <img src={file} style={img} />
        </div>
      </Thumb>
    );
  });

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  useEffect(() => {
    let medias = [];
    if (files.length) {
      files.map((file) => {
        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(file);
        fileReaderInstance.onload = () => {
          let base64data = fileReaderInstance.result;
          medias.push(base64data);
          setMediaFiles([...mediaFiles, ...medias]);
        };
      });
    }
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container uploader">
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadIcon />
        <Text>
          <TextHighlighted>Drag/Upload</TextHighlighted> your image here.
        </Text>
      </Container>
      {thumbs && <ThumbsContainer>{thumbs}</ThumbsContainer>}
      {/* {thumbSingle && <ThumbsContainer>{thumbSingle}</ThumbsContainer>} */}
    </section>
  );
}

export default Uploader;
