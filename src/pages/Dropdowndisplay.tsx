import Dropdown from "../components/drop-down/Dropdown"; // adjust path as needed
import Button from "../components/button/Button";
import {LeftIcon }from "../components/icons/LeftIcon"; // adjust the import path to match your project
const items = [
  {
    key: '1',
    label: 'Option 1',
  },
  {
    key: '2',
    label: 'Option 2',
  },
  {
    key: '3',
    label: 'Option 3',
  },
];
const itemsWithIcon = [
  {
    key: '1',
    label: 'Option 1',
    icon:<LeftIcon/>
  },
  {
    key: '2',
    label: 'Option 2',
    icon:<LeftIcon/>
  },
  {
    key: '3',
    label: 'Option 3',
    icon:<LeftIcon/>
  },
];


const ExampleComponent = () => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
      
      >
        <Button Customtype="secondary">Open Dropdown</Button>
      </Dropdown>

      <Dropdown
        menu={{ items:itemsWithIcon }}
        placement="bottomLeft"
        open
      >
        <Button Customtype="secondary" icon={<LeftIcon />} > Open Dropdown with icon </Button>
      </Dropdown>

    </div>
  );
};

export default ExampleComponent;
