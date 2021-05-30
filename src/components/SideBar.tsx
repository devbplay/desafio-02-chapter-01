import React from 'react'
import { Button } from './Button'

import { GenreProps } from '../@types/AppTypes'

interface Props {
  genres: Array<GenreProps>;
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar(props: Props) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}