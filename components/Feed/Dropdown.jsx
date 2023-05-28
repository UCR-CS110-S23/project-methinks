import Dropdown from "react-bootstrap/Dropdown";
import { FaCircle } from "react-icons/fa";
import { TbSortDescending } from "react-icons/tb";
import { useState } from "react";
import React from "react";

function BasicExample() {
  const [sortFilter, setSortFilter] = useState(false);
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="!bg-methinks-darkgray !rounded-full after:!hidden !flex !justify-center !items-center !border-none !normal-case !animate-none">
          <TbSortDescending className="text-lg mr-2" />
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu className="!bg-methinks-darkgray ">
          <Dropdown.Item
            className="!text-methinks-white hover:!bg-methinks-darkgray !flex !justify-between !items-center"
            onClick={() => {
              setSortFilter(false);
            }}
          >
            Latest {!sortFilter && <FaCircle className="text-xs" />}
          </Dropdown.Item>
          <Dropdown.Item
            className="!text-methinks-white hover:!bg-methinks-darkgray !flex !justify-between !items-center"
            onClick={() => {
              setSortFilter(true);
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
