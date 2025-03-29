import { Delete, Edit, Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { t } from "i18next";
import { TableActions } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const resolver = yupResolver;

const validator = yup;

const translate = t;

const createTableActions = ({ onDelete, onEdit, onShow }: TableActions) => {
  const arr = [
    ...(onShow ? [{ name: "show", fn: onShow, Icon: Visibility }] : []),
    ...(onEdit ? [{ name: "edit", fn: onEdit, Icon: Edit }] : []),
    ...(onDelete ? [{ name: "delete", fn: onDelete, Icon: Delete }] : []),
  ];

  return arr.map((item) => (
    <GridActionsCellItem
      key={item.name}
      icon={<item.Icon />}
      label={t(`tableActions.${item.name}`)}
      onClick={() => item.fn()}
    />
  ));
};

export { resolver, validator, translate, createTableActions };
