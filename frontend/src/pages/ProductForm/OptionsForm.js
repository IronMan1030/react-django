import React, { useState, useEffect } from "react";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";
import CreateTags from "../../components/Tags/CreateTags";
import Select from "../../components/Select/Select";

const variantOptionsType = [
  { name: "Size", value: "size", id: "1" },
  { name: "Color", value: "color", id: "2" },
  { name: "Style", value: "style", id: "3" },
  { name: "Title", value: "title", id: "4" },
];
function OptionsForm({ index, optionId, onOptionRemove }) {
  const [type, setType] = useState([variantOptionsType[0]]);

  useEffect(() => {
    if (index > 1) {
    } else {
    }
  }, []);

  const handleOptionChange = ({ value }) => {
    // setValue("type", value);
    setType(value);
  };
  return (
    <>
      <div className="row mt-3">
        <div className="col-lg-4">
          <FormFields>
            <FormLabel>{`Option${index}`}</FormLabel>
            <Select
              options={variantOptionsType}
              labelKey="name"
              valueKey="value"
              placeholder="Variant Type"
              value={type}
              searchable={false}
              onChange={handleOptionChange}
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
        </div>
        <div className="col-lg-8">
          <FormFields>
            {index > 1 ? (
              <div className="d-flex justify-content-end mb-n1">
                <button type="button" className="btn-remove" onClick={() => onOptionRemove(optionId)}>
                  Remove
                </button>
              </div>
            ) : (
              <FormLabel>&nbsp;</FormLabel>
            )}

            <CreateTags selectedType={type} />
          </FormFields>
        </div>
      </div>
    </>
  );
}

export default OptionsForm;
