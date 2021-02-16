import * as React from "react";
import { useCallback } from "react";
import { useStyletron } from "baseui";
import { Input, StyledInput } from "baseui/input";
import { Tag, VARIANT as TAG_VARIANT } from "baseui/tag";

import ProductContext from "../../context/ProductContext";

const InputReplacement = React.forwardRef(({ tags, removeTag, ...restProps }, ref) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        flex: "1 1 0%",
        flexWrap: "wrap",
        display: "flex",
        alignItems: "center",
      })}
    >
      {tags &&
        tags.map((tag, index) => (
          <Tag variant={TAG_VARIANT.solid} onActionClick={() => removeTag(tag)} key={index}>
            {tag}
          </Tag>
        ))}
      <StyledInput ref={ref} {...restProps} />
    </div>
  );
});
export const getContainerFontStyle = ({ $theme }) => {
  return $theme.typography.fontBold14;
};

export default function CreateTags(props) {
  const [value, setValue] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const addTag = (tag) => {
    setTags([...tags, tag]);
    optionData([...tags, tag]);
  };
  const removeTag = (tag) => {
    const removeTags = tags.filter((t) => t !== tag);
    setTags(removeTags);
    optionData(removeTags);
  };

  const dispatch = ProductContext.useProductDispatch();
  const optionData = (arr) => {
    // let newArray = {};
    // newArray[props.selectedType[0].value] = arr;
    // console.log(newArray);
    dispatch({
      type: "VARIANT_OPTION",
      optionTags: [...arr],
      optionType: props.selectedType,
    });
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      // Enter
      case 13: {
        if (!value) return;
        addTag(value);
        setValue("");
        return;
      }
      // Backspace
      case 8: {
        if (value || !tags.length) return;
        removeTag(tags[tags.length - 1]);
        return;
      }
    }
  };
  return (
    <Input
      placeholder={tags && tags.length ? "" : "Separate options with a comma"}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      overrides={{
        Input: {
          style: ({ $theme }) => ({
            width: "auto",
            flexGrow: 1,
            color: $theme.colors.textDark,
            ...getContainerFontStyle({ $theme }),
          }),
          component: InputReplacement,
          props: {
            tags: tags,
            removeTag: removeTag,
            onKeyDown: handleKeyDown,
          },
        },
      }}
    />
  );
}
