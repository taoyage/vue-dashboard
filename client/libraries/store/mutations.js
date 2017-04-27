'use strict';

import { storage } from '../config/index';

/**
 * 切换侧边栏展开收起
 * @param  {Object} state Vuex
 */
export const TOGGLE_SIDEBAR_COLLAPSE = state => {
    state.sidebar.collapse = !state.sidebar.collapse;
    storage.set('sidebar_collapse', state.sidebar.collapse);
};
