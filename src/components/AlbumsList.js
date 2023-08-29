import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import { Button } from './Button';
import { Skeleton } from './Skeleton';
import { AlbumsListItem } from './AlbumsListItem';

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  const [addAlbum, result] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user)
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => <AlbumsListItem key={album.id} album={album} />)
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleAddAlbum}>
          + Add Albums
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
};

export { AlbumsList };
