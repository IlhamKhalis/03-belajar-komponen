import Image from 'next/image';
import { getImageUrlV2, Person } from '@/utils/utils';

interface MyAvatarProps {
  person: Person;
  size: number;
}

const MyAvatar: React.FC<MyAvatarProps> = ({ person, size }) => {
  const imageSize = size < 90 ? 's' : 'b';
  return (
    <Image
      className="avatar"
      src={getImageUrlV2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
