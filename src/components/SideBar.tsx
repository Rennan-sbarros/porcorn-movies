import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Button } from '../components/Button';
import '../styles/global.scss';
import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
      Popcorn<p>movies</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}