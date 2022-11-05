import { useState, useEffect } from "react";
import { client, explorePublications, exploreProfiles } from "../api/api";
import PublicationCard from "../../components/PublicationCard";

const Explore = () => {
  const [publications, setPublications] = useState();

  useEffect(() => {
    fetchPublication();
  }, []);

  console.log(publications);
  async function fetchPublication() {
    try {
      let response = await client.query({ query: explorePublications });
      let publicationData = await Promise.all(
        response.data.explorePublications.items
      );
      setPublications(publicationData);
    } catch (err) {
      console.log({ err });
    }
  }

  //  async function fetchPublication() {
  //    try {
  //      let response = await client.query({ query: explorePublications });
  //      let publicationData = await Promise.all(
  //      response.data.explorePublications.items.map(async (publicationInfo) => {
  //      let publication = { ...publicationInfo };
  //    let picture = publication.profile.picture;
  //  if (picture && picture.original && picture.original.url) {
  //  if (picture.original.url.startsWith("ipfs://")) {
  //  let result = picture.original.url.substring(
  //  7,
  //                picture.original.url.length
  //           );
  //         publication.profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
  //     } else {
  //     publication.profile.avatarUrl = picture.original.url;
  // }
  // }
  // return publication;
  // })
  // );
  // setPublications(publicationData);
  // } catch (err) {
  // console.log({ err });
  //}
  //}
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl mb-6 font-bold">Latest Content</h1>
      <ul className="max-w-4xl mx-auto flex flex-col border border-gray-500 rounded gap-2 md:gap-4">
        {publications?.map((publication) => (
          <PublicationCard
            key={publication.id}
            content={publication.metadata.content}
            authorImage={publication.profile.picture?.original}
          />
        ))}
      </ul>

      {!publications && <div>Loading</div>}
    </div>
  );
};

export default Explore;
