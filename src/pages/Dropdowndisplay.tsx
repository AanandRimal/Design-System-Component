import Dropdown from "../components/drop-down/Dropdown"; // adjust path as needed
import Button from "../components/button/Button";
import {LeftIcon }from "../components/icons/LeftIcon"; // adjust the import path to match your project
import type { MenuProps } from 'antd';


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

const multipleSectionChildren: MenuProps['items']  = [
  {
    type: 'group',
    label: 'Dropdown Heading',
    key: 'group-1',
    children: [
      {
        key: '1-1',
        label: 'Option A',
        icon:<LeftIcon/>
      },
      {
        key: '1-2',
        label: 'Option B',
        icon:<LeftIcon/>
      },
    ],
  },
  {
    type: 'group',
    label: 'Dropdown Heading',
    key: 'group-2',
    children: [
      {
        key: '2-1',
        label: 'Option A',
        icon:<LeftIcon/>
      },
      {
        key: '2-2',
        label: 'Option B',
        icon:<LeftIcon/>
      },
    ],
  },
  {
    key: '2',
    label: 'Sub menu',
    children: [
      {
        key: '2-1',
        label: 'Option C',
      },
      {
        key: '2-2',
        label: 'Option D',
      },
    ],
  },
  {
    key: '3',
    label: 'Option 3',
    icon: <LeftIcon />,
  },
  {
    key: '4',
    label: 'Option 4',
  },
  {
    key: '5',
    label: 'Disabled sub menu',
    disabled: true,
    children: [
      {
        key: '5-1',
        label: 'Option E',
      },
      {
        key: '5-2',
        label: 'Option F',
      },
    ],
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
        
      >
        <Button Customtype="secondary" icon={<LeftIcon />} > Open Dropdown with icon </Button>
      </Dropdown>
      <Dropdown
        menu={{ items:multipleSectionChildren }}
        placement="bottomLeft"
        open
      >
        <Button Customtype="secondary" icon={<LeftIcon />} > Open Dropdown with multiple section </Button>
      </Dropdown>
    </div>
  );
};

export default ExampleComponent;
