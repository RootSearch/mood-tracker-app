import {atom} from 'jotai';

export const authTokenAtom = atom<string | null>(null);

// export const writeOnlyAtom = atom(null, (_get, set, update) => {
//   set(authTokenAtom, update ? String(update) : null);
// });
