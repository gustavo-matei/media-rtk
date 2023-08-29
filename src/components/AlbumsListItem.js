import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';
import { PhotosList } from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header = (
    <>
      <Button className="mr-2" loading={result.isLoading} onClick={handleRemoveAlbum}>
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel >
  )
};

export { AlbumsListItem };
