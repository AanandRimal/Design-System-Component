import { Space } from "antd";
import  Banner  from "../components/banner/Banner";
import  Button  from "../components/button/Button";
import { LeftIcon } from "../components/icons/LeftIcon";

const bannerTypes = ["destructive", "success", "primary", "warning", "info"] as  const;

export default function BannerGrid() {
    return (
      <div className="space-y-16">

        <div>
          <h2 className="text-lg font-semibold mb-6">With Title + Description</h2>
          <div className="space-y-4">
            {bannerTypes.map((type) => (
              <div key={`${type}-title-desc`}>
                <Banner
                  className="text-base-regular"
                  Customtype={type}
                  message="This is Title"
                  description="This is a Description Text"
                  action={
                    <Space>
                      <Button Customtype="secondary">Button Label</Button>
                    </Space>
                  }
                  closable
                  showIcon
                  icon={<LeftIcon />}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-6">With Description Only</h2>
          <div className="space-y-4">
            {bannerTypes.map((type) => (
              <div key={`${type}-desc-only`}>
                <Banner
                  className="text-base-regular"
                  Customtype={type}
                  description="This is a Description Text"
                  action={
                    <Space>
                      <Button Customtype="secondary">Button Label</Button>
                    </Space>
                  }
                  closable
                  showIcon
                  icon={<LeftIcon />}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }