function ProfileImage({ image, handle }) {
  return <img src={image} className='profile' alt={`${handle}`}></img>;
}

export default ProfileImage;
