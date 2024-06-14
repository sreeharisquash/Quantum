import React, { useState } from "react";
import styles from "./ProfileTab.module.css";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { profileTabDropdown, profileTabInputs } from "@/utils/mockData";
import CommonButton from "../commonButton/CommonButton";

const ProfileTab: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});

  const handleChange = (event: SelectChangeEvent<string>, label: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [label]: event.target.value as string,
    }));
  };

  const buttons = [
    { id: 1, label: "Upload new photo", bgClr: "#F6BE0F", fontCLR: "black" },
    { id: 2, label: "Reset", bgClr: "#E10000", fontCLR: "white" },
  ];

  const secondBTNs = [
    {
      id: 1,
      label: "Save Changes",
      bgClr: "#37AD24",
      fontCLR: "white",
      borderClr: "transparent",
      border: 0,
    },
    {
      id: 2,
      label: "Reset",
      bgClr: "white",
      fontCLR: "#E10000",
      borderClr: "#E10000",
      border: 1,
    },
  ];

  interface ProfileTabInputDetail {
    id: number;
    label: string;
    type?: string; // Add the type property here
  }

  interface ProfileTabDropdownDetail {
    id: number;
    label: string;
    options: { [key: string]: string | undefined };
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h3>Profile Details</h3>
        <div className="py-8 flex gap-8" style={{ alignItems: "center" }}>
          <img src="/svg/profileIMG.svg" alt="Profile" />
          <div className="w-[50%]">
            <div className="flex align-middle gap-5">
              {buttons.map((item) => (
                <button
                  key={item.id}
                  className={styles.buttons}
                  style={{ backgroundColor: item.bgClr, color: item.fontCLR }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="text-subTXTColor">
              Allowed JPG, GIF or PNG. Max size of 8 MB.
            </p>
          </div>
        </div>
        <div className={`${styles.textinput_container} mt-10`}>
          {profileTabInputs.map((item: ProfileTabInputDetail) => (
            <TextField
              id="outlined-basic"
              label={item.label}
              variant="outlined"
              key={item.id}
              className={styles.textInput}
              type={item.type ? item.type : "text"}
              InputLabelProps={{
                className: styles.inputLabel,
                classes: { focused: styles.inputLabelFocused },
              }}
              InputProps={{
                classes: {
                  root: styles.inputFieldRoot,
                  notchedOutline: styles.inputFieldNotchedOutline,
                },
              }}
            />
          ))}
        </div>
        <div className={`${styles.textinput_container} mt-4`}>
          {profileTabDropdown.map((item: ProfileTabDropdownDetail) => (
            <FormControl
              key={item.id}
              variant="outlined"
              className={styles.textInput}
              fullWidth
              style={{ marginBottom: "16px" }}
            >
              <InputLabel
                id={`${item.label}-select-label`}
                className={styles.inputLabel}
                classes={{ focused: styles.inputLabelFocused }}
              >
                {item.label}
              </InputLabel>
              <Select
                labelId={`${item.label}-select-label`}
                id={`${item.label}-select`}
                value={selectedValues[item.label] || ""}
                label={item.label}
                onChange={(event) => handleChange(event, item.label)}
                classes={{ select: styles.selectedText }}
              >
                {Object.entries(item.options)
                  .filter(([key, value]) => value !== undefined)
                  .map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          ))}
        </div>
        <div className="flex gap-5 mt-5">
          {secondBTNs.map((item) => (
            <button
              key={item.id}
              className={styles.buttons}
              style={{
                backgroundColor: item.bgClr,
                color: item.fontCLR,
                borderWidth: item.border,
                borderColor: item.borderClr,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.mainContainer}>
        <h3>Delete Account</h3>
        <div className={styles.deleteContainer}>
          <h6 className="text-activeTabFontColor">
            Are you sure you want to delete your account?
          </h6>
          <p className="text-activeTabFontColor mt-3">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
        <div className={styles.checkBox}>
          <Checkbox />
          <p>I confirm my account deactivation</p>
        </div>

        <div className="w-[20%]">
          <CommonButton
            label="Delete Account"
            bgClr="#E10000"
            fontCLR="white"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
