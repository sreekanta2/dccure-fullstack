import ProfileSettingsPageView from "./page-view";

interface ProfileSettingsPageProps {
  params: {
    lang: any;
  };
}
const ProfileSettingsPage = async ({
  params: { lang },
}: ProfileSettingsPageProps) => {
  // const trans = await getDictionary(lang);
  const trans = {
    "basic-details": "Basic Details",
    experience: "Experience",
    education: "Education",
    awards: "Awards",
    insurances: "Insurances",
    clinics: "Clinics",
    "business-hours": "Business Hours",
  };

  return <ProfileSettingsPageView trans={trans} />;
};

export default ProfileSettingsPage;
