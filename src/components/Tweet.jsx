import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className='tweet'>
      <ProfileImage image={user?.image} handle={user?.handle} />
      <div className='body'>
        <div className='top'>
          <User name={user.name} handle={user.handle} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />
      </div>
      <Actions />
    </div>
  );
}

export default Tweet;
