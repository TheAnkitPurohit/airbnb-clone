import React from 'react';
import Image from 'next/image';
import { User2 } from 'lucide-react';
import { fetchProfileImage } from '@/utils/actions';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        width={24}
        height={24}
        className="rounded-full object-cover"
        alt="User profile"
      />
    );
  }

  return <User2 className="w-6 h-6 p-1 bg-primary rounded-full text-white" />;
};

export default UserIcon;
