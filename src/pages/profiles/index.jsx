import { useEffect, useState } from "react";
import { client, exploreProfiles } from "../api/api";
import ProfileCard from "../../components/ProfileCard";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      /* fetch profiles from Lens API */
      let response = await client.query({ query: exploreProfiles });
      /* loop over profiles, create properly formatted ipfs image links */
      let profileData = await Promise.all(
        response.data.exploreProfiles.items.map(async (profileInfo) => {
          let profile = { ...profileInfo };
          let picture = profile.picture;
          if (picture && picture.original && picture.original.url) {
            if (picture.original.url.startsWith("ipfs://")) {
              let result = picture.original.url.substring(
                7,
                picture.original.url.length
              );
              profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
            } else {
              profile.avatarUrl = picture.original.url;
            }
          }
          return profile;
        })
      );

      /* update the local state with the profiles array */
      setProfiles(profileData);
    } catch (err) {
      console.log({ err });
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-6 font-bold">Explore Profiles</h1>
        <div className="md:grid flex flex-col md:grid-cols-3 gap-3 md:gap-4">
          {profiles.map((profile) => (
            <ProfileCard
              id={profile.id}
              key={profile.id}
              name={profile.name}
              bio={profile.bio}
              handle={profile.handle}
              profileImage={profile.avatarUrl}
              followers={profile.stats.totalFollowers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
