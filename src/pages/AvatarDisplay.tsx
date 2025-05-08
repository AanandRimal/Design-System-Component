// components/AvatarShowcase.tsx

import React from "react";
import Table from "../components/table/Table";
import Avatar from "../components/avatars/Avatar";
import { Icon } from "@iconify/react";

const avatarSizesList = [14, 20, 24, 32, 36, 40, 48, 64, 80, 120];

const avatarColumns = [
  { title: "Size", dataIndex: "size", key: "size", width: 100 },
  { title: "Image", dataIndex: "image", key: "image" },
  { title: "Initials", dataIndex: "initials", key: "initials" },
  { title: "Avatar", dataIndex: "avatar", key: "avatar" },
];

const avatarData = avatarSizesList.map((size) => ({
  key: `avatar-${size}`,
  size,
  image: (
    <Avatar customSize={size} src={<img src="./Female 2.png" alt="avatar" />} dot />
  ),
  initials: <Avatar customSize={size} dot>Kdssdcsdcsdds</Avatar>,
  avatar: (
    <Avatar
      customSize={size}
      icon={<Icon icon="mage:user-fill" />}
      dot
    />
  ),
}));

const AvatarDisplay: React.FC = () => {
  return (
    <div style={{ padding: "16px" }}>
      <Table
        columns={avatarColumns}
        dataSource={avatarData}
        pagination={false}
        bordered
      />
      {/* Avatar Groups */}
      <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h1 className="text-h4-semibold font-semibold" >Avatar Group</h1>
      {[1, 2, 3].map((count) => (
  <Avatar.Group key={count} max={{ count }}>
    {Array.from({ length: count }).map((_, index) => (
      <Avatar
        key={index}
        customSize={32}
        src={<img src="./Female 2.png" alt="avatar" />}
      />
    ))}
  </Avatar.Group>
))}

{/* Last group with max=4 but showing 5 avatars */}
<Avatar.Group
  key="last"
  max={{ count: 4,}}
>
  {Array.from({ length: 5 }).map((_, index) => (
    <Avatar
      key={index}
      customSize={32}
      src={<img src="./Female 2.png" alt="avatar" />}
    />
  ))}
</Avatar.Group>

      </div>
    </div>
  );
};

export default AvatarDisplay;
