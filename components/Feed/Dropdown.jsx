import Dropdown from "react-bootstrap/Dropdown";

function BasicExample() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="!bg-methinks-darkgray !rounded-full !py-2 !px-4 !flex !justify-center !items-center !border-none">
          Sort
        </Dropdown.Toggle>
        <Dropdown.Menu className="!bg-methinks-darkgray ">
          <Dropdown.Item className="!text-methinks-white" href="#">
            Latest
          </Dropdown.Item>
          <Dropdown.Item className="!text-methinks-white" href="#">
            Highest Rated
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BasicExample;
