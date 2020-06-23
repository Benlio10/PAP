import React from "react";
import { Table, TableBody, TableRow, TableCell, Box } from "@material-ui/core";

const CustomTable = ({
  xValue,
  yValue,
  items,
  children,
  onClick,
  onFalseClick,
  falseComponent /*: FalseComponent*/
}) => {
  const indexX = Array(xValue).fill("");
  const indexY = Array(yValue).fill("");

  const handleClick = (x, y) => {
    switch (onClick.type) {
      case "navigate":
        onClick.handle(checkItems(x, y)[1]);
        break;

      case "noclick":
        break;

      case "toggle":
        onClick.handle({ x, y });
        break;
    }
  };

  const handleFalseClick = (x, y) => {
    switch (onFalseClick.type) {
      case "navigate":
        onFalseClick.handle(checkItems(x, y)[1]);
        break;

      case "noclick":
        break;

      case "toggle":
        onFalseClick.handle({ x, y });
        break;
    }
  };

  const checkItems = (x, y) => {
    for (let item of items) {
      if (item.x === x && item.y === y) {
        return [true, item];
      }
    }
    return [false];
  };

  return (
    <Table>
      <TableBody>
        {indexY.map((_row, y) => (
          <TableRow key={y} hover>
            {indexX.map((_col, x) => (
              <TableCell
                key={x}
                align="center"
                style={{ border: "1px solid black" }}
              >
                <Box>
                  {checkItems(x, y)[0]
                    ? children({
                        onClick: () => handleClick(x, y),
                        x,
                        y
                      })
                    : falseComponent({
                        onClick: () => handleFalseClick(x, y),
                        x,
                        y
                      })}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
