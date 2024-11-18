import BasicDetails from "./components/basic-details";

interface ProfileSettingPageViewProps {
  trans: {
    [key: string]: string;
  };
}

const ProfileSettingsPageView = ({ trans }: ProfileSettingPageViewProps) => {
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <h1 className="text-xl">Profile settings</h1>
      <hr className="my-4 " />
      <div className=" w-full">
        <BasicDetails />
      </div>
    </div>
  );
};

export default ProfileSettingsPageView;
