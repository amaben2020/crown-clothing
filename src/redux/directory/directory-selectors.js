import { createSelector } from "reselect";

const directory = (state) => state.directory;

export const directorySelector = createSelector(
	[directory],
	(directory) => directory.sections
);
