import User from './User';

interface UsersProps {
  users: {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
  }[];
}

const Users = ({ users }: UsersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;