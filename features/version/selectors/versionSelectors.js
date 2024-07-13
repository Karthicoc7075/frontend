export const getAllVersionSelector = (state) => state.version.versions;
export const getVersionSelector = (state) => state.version.version;
export const loadingSelector = (state) => state.version.loading;
export const updateLoadingSelector = (state) => state.version.updateLoading;
export const deleteLoadingSelector = (state) => state.version.deleteLoading;