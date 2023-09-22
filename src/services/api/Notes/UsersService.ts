import { Api } from '../Api';
import { ReturnBodyNoteDto } from './dtos/ReturnBodyNoteDto';

import { ReturnNoteDto } from './dtos/ReturnNoteDto';
import { UpdateNoteDto } from './dtos/UpdateNoteDto';
import { bodyNotesSchema } from './schemas/bodyNotesSchema';
import { noteEntitySchema } from './schemas/noteEntitySchema';
import { notesEntitySchema } from './schemas/notesEntitySchema';

export class NoteService {
  private static readonly api = Api;

  static readonly create = async (): Promise<ReturnNoteDto> => {
    const { data } = await this.api.post('/notes/', {
      title: 'Uma nova nota',
      body: '',
    });

    return noteEntitySchema.parse(data);
  };

  static readonly index = async (): Promise<ReturnNoteDto[]> => {
    const { data } = await this.api.get('/notes/');

    return notesEntitySchema.parse(data);
  };

  static readonly show = async (id: string): Promise<ReturnNoteDto> => {
    const { data } = await this.api.get(`/notes/${id}`);

    return noteEntitySchema.parse(data);
  };

  static readonly update = async (
    id: string,
    body: UpdateNoteDto
  ): Promise<ReturnNoteDto> => {
    const { data } = await this.api.patch(`/notes/${id}`, body);

    return noteEntitySchema.parse(data);
  };

  static readonly delete = async (id: string): Promise<void> => {
    await this.api.delete(`/notes/${id}`);
  };

  static readonly search = async (query: string): Promise<ReturnNoteDto[]> => {
    const { data } = await this.api.get(`/notes/search?query=${query}`);

    return notesEntitySchema.parse(data);
  };

  static readonly searchBodies = async (): Promise<ReturnBodyNoteDto[]> => {
    const { data } = await this.api.get('/notes/searchBodies/');

    return bodyNotesSchema.parse(data);
  };
}
