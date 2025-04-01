import Image from 'next/image';
import styles from './User.module.css';
import Card from './Card';

interface UserProps {
  user: {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
  };
}

export default function User({ user }: UserProps) {
  return (
    <Card>
      <div className={styles.userItem}>
        <Image
          src={user.imageUrl}
          alt={user.name}
          width={100}
          height={100}
          className={styles.userImg}
          priority
        />
        <div className={styles.userInfo}>
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
          <p>{user.email}</p>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
      </div>
    </Card>
  );
}