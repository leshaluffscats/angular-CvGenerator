import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ICvsInitialState, cvsAdapter } from './cvs.reducer';

const { selectAll } = cvsAdapter.getSelectors();

export const selectCvsState = (state: AppState) => state.cvs;

export const selectAllCvs = createSelector(
  selectCvsState,
  (state: ICvsInitialState) => selectAll(state),
);

export const getSelectedCv = createSelector(
  selectCvsState,
  (state: ICvsInitialState) => state.selectedCv,
);

export const selectNewCvs = createSelector(
  selectCvsState,
  (state: ICvsInitialState) => selectAll(state).filter(cv => cv.isNew === true),
);

export const selectEditedCvs = createSelector(
  selectCvsState,
  (state: ICvsInitialState) =>
    selectAll(state).filter(cv => cv.isEdited === true),
);

export const selectLoadingState = createSelector(
  selectCvsState,
  (state: ICvsInitialState) => state.isLoading,
);
