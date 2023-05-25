import Dropdown from "react-bootstrap/Dropdown";
import { FaArrowDown, FaCircle } from "react-icons/fa";
import { useState } from "react";
import React from "react";

function BasicExample() {
  let [sortFilter, setSortFilter] = useState(false);
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="!bg-methinks-darkgray !rounded-full  !flex !justify-center !items-center !border-none !normal-case !animate-none">
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu className="!bg-methinks-darkgray ">
          <Dropdown.Item
            className="!text-methinks-white hover:!bg-methinks-darkgray !flex !justify-between !items-center"
            onClick={() => {
              setSortFilter((sortFilter = false));
            }}
          >
            Latest {!sortFilter && <FaCircle className="text-xs" />}
          </Dropdown.Item>
          <Dropdown.Item
            className="!text-methinks-white hover:!bg-methinks-darkgray !flex !justify-between !items-center"
            onClick={() => {
              setSortFilter((sortFilter = true));
            }}
          >
            Highest Rating {sortFilter && <FaCircle className="text-xs" />}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BasicExample;
