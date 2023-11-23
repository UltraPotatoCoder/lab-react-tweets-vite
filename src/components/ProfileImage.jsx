function ProfileImage({ imageUrl, handle }) {
  return <img src={imageUrl} className='profile' alt={`${handle}`}></img>;
}

export default ProfileImage;
