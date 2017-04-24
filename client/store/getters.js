'use strict';

/**
 * 获取头部导航栏
 * @param  {Object} state Vuex状态对象
 * @return {Object}       头部导航
 */
export const header = state => state.header;

/**
 * 获取侧边导航栏
 * @param  {Object} state Vuex状态对象
 * @return {Object}       侧边栏
 */
export const sidebar = state => state.sidebar;

