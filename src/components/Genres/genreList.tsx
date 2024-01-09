import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/actions.ts';
import {Genres} from '../../const.ts';

function GenreList() {
  const films = useAppSelector((state)=> state.films);
  const genres: Genres[] = [Genres.All, ...new Set(films.map((x) => x.genre))];
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <button
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(genre));
            }}
            style={{background: 'transparent', border: 'none'}}
          >
            {genre}
          </button>
        </li>))}
    </ul>

  );
}

export default GenreList;
