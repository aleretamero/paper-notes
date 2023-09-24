import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useNoteContext } from '../hooks/useNoteContext';
import { ReturnBodyNoteDto } from '../services/api/Notes/dtos/ReturnBodyNoteDto';
import { htmlInnerText } from '../helpers/regex/htmlInnerText';
import { htmlFirstTag } from '../helpers/regex/htmlFistTag';

export const SideBarSearch = () => {
  const { searchNotes, getNotes, searchBodyNotes } = useNoteContext();
  const [bodyNotes, setBodyNotes] = useState<ReturnBodyNoteDto[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const query = ev.target.value;
    setSearch(query);

    if (query.trim().length > 0) searchNotes(query);
    else if (query.length === 0) getNotes();
  };

  const getBodyNotes = useCallback(async () => {
    const data = (await searchBodyNotes())
      ?.map((data) => ({ ...data, body: data.body.toLowerCase() }))
      ?.sort((a, b) => {
        if (a.body > b.body) return 1;
        if (a.body < b.body) return -1;
        return 0;
      });

    if (!data) return;

    setBodyNotes(data);
  }, [searchBodyNotes]);

  useEffect(() => {
    getBodyNotes();
  }, [getBodyNotes]);

  return (
    <>
      <input
        type="search"
        list="notes"
        placeholder="Pesquise suas notas..."
        value={search}
        onChange={handleSearch}
        className="
          p-3 outline-none border-2 border-black
          font-['Roboto Flex'] font-bold text-base
          bg-zinc-300 dark:bg-zinc-100

        "
      />
      <datalist id="notes">
        {bodyNotes.map((bodyNote) => (
          <option
            key={`body-${bodyNote._id}`}
            value={bodyNote.body
              .match(htmlFirstTag)?.[0]
              .replace(htmlInnerText, '')}
          >
            {bodyNote.body.replace(htmlInnerText, ' ')}
          </option>
        ))}
      </datalist>
    </>
  );
};
112916;
