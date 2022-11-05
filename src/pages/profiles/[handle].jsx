/* pages/profile/[handle].js */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client, getPublications, getProfile } from "../api/api";
import Image from "next/image";
import PublicationCard from "../../components/PublicationCard";
import CustomImage from "../../components/CustomImage";

export default function Profile() {
  /* create initial state to hold user profile and array of publications */
  const [profile, setProfile] = useState();
  const [publications, setPublications] = useState([]);
  /* using the router we can get the lens handle from the route param */
  const router = useRouter();
  const { handle } = router.query;

  useEffect(() => {
    if (handle) {
      fetchProfile();
    }
  }, [handle]);

  async function fetchProfile() {
    try {
      /* fetch the user profile using their handle */
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle },
      });
      const profileData = { ...returnedProfile.data.profile };
      /* format their picture if it is not in the right format */
      const picture = profileData.picture;
      if (picture && picture.original && picture.original.url) {
        if (picture.original.url.startsWith("ipfs://")) {
          let result = picture.original.url.substring(
            7,
            picture.original.url.length
          );
          profileData.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
        } else {
          profileData.avatarUrl = profileData.picture.original.url;
        }
      }
      setProfile(profileData);
      /* fetch the user's publications from the Lens API and set them in the state */
      const pubs = await client.query({
        query: getPublications,
        variables: {
          id: profileData.id,
          limit: 50,
        },
      });
      setPublications(pubs.data.publications.items);
    } catch (err) {
      console.log("error fetching profile...", err);
    }
  }
  console.log(profile);

  if (!profile) return null;

  return (
    <div className="min-h-screen min-w-screen py-20 bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col justify-center items-center">
        <Image
          width={256}
          height={170}
          alt={handle}
          src={profile.avatarUrl}
          className="rounded-full"
        />
        <p className="text-4xl mt-8 mb-8">{profile.handle}</p>
        <p className="text-center text-xl font-bold mt-2 mb-2 w-1/2">
          {profile.bio}
        </p>
        <div className="mx-auto max-w-3xl rounded-xl border-[1px] border-gray-500 mt-10">
          {publications.map((pub) => (
            <PublicationCard
              key={pub.id}
              content={pub.metadata.content}
              authorImage={profile.picture?.original}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
