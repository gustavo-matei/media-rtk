import { GoTrash } from 'react-icons/go';
import { useThunk } from '../hooks/useThunk';
import { removeUser } from '../store';
import { AlbumsList } from './AlbumsList';
import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export { UsersListItem };
