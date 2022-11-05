export default function getProfilePicture(data) {
  data.map(async (profileInfo) => {
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
  });
}
