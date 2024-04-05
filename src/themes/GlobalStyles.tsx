import { createGlobalStyle } from 'styled-components';

import {
  APP_HEADER_HEIGHT,
  APP_MOBILE_HEADER_HEIGHT,
  BREAK_POINT
} from '@config';
import { APP_COLORS } from './color';

export const GlobalStyles = createGlobalStyle`
   .click-able {
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }

  .app-drawer-container {
    --transition-speed: 0.3s;
  }

  .app-drawer {
    width: fit-content;
    min-width: 10px;
    height: fit-content;
    overflow: auto;
    position: fixed;
    transition: transform var(--transition-speed) ease;
    z-index: 99;
  }

  .app-drawer.left {
    top: 0;
    left: 0;
    transform: translateX(-105%);
  }

  .app-drawer.right {
    top: 0;
    right: 0;
    transform: translateX(100%);
  }

  .app-drawer.top {
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: translateY(-100%);
    //height: 40%;
  }

  .app-drawer.bottom {
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: translateY(100%);
    //height: 40%;
  }

  .app-drawer-container.in.open .left,
  .app-drawer-container.in.open .right {
    transform: translateX(0);
  }

  .app-drawer-container.in.open .top,
  .app-drawer-container.in.open .bottom {
    transform: translateY(0);
  }

  .app-drawer-backdrop {
    background: rgba(0, 0, 0, 0.5);
    transition: opacity var(--transition-speed) ease,
      visibility var(--transition-speed) ease;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 98;
  }

  .app-drawer-container.in.open .backdrop {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    z-index: 999;
  }
  .app-container {
    width: 100%;
  }
  .capitalize-ft {
    &::first-letter  {
      text-transform: uppercase;
    }
  }
  .app-scrollbar {
    /* scrollbar-gutter: stable; */
    &::-webkit-scrollbar {
      width: 5px;
      background: ${APP_COLORS.creamLight};
    }
    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
      border-radius: 3px;
    }
  }
  .app-scrollbar-no-bg {
    /* scrollbar-gutter: stable; */
    &::-webkit-scrollbar {
      width: 6px;
      background: ${APP_COLORS.transparent};
    }
    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
      border-radius: 3px;
    }
  }
  .app-mini-scrollbar {
    /* scrollbar-gutter: stable; */
    &::-webkit-scrollbar {
      cursor: pointer;
      width: 3px;
      background: ${APP_COLORS.creamLight};
    }
    &::-webkit-scrollbar-thumb {
      background: #bdbdbd;
      border-radius: 3px;
    }
  }
  .app-hover-scroll {
    &:hover {
      overflow: overlay;
    }
    overflow: hidden;
    /* scrollbar-gutter: stable; */
  }
  .app-hover-scroll-x {
    &:hover {
      overflow-x: overlay;
    }
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .app-hover-scroll-y {
    overflow-x: hidden;
    overflow-y: overlay;
    &:hover {
      &::-webkit-scrollbar-thumb {
        background: #bdbdbd;
        border-radius: 3px;
      }
    }
    &::-webkit-scrollbar-button {
      position: absolute;
      display: none;
    }
    &::-webkit-scrollbar {
      width: 3px;
      background: ${APP_COLORS.transparent};
    }
    &::-webkit-scrollbar-thumb {
      background: ${APP_COLORS.transparent};
      border-radius: 3px;
    }
  }
  .app-hover-cs-scroll-y {
    overflow-x: hidden;
    overflow-y: hidden;
    &:hover {
      overflow-y: overlay;
    }
    &::-webkit-scrollbar {
      width: 3px;
      background: ${APP_COLORS.transparent};
    }
  }
  @media(min-width: 1512px){
    .app-container {
      max-width: 1512px;
    }
  }
  .app-mb {
    margin-bottom: 40px;
    @media (max-width: ${BREAK_POINT.mobile}) {
      margin-bottom: 20px;
    }
  }
  .app-mv {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .app-mt {
    margin-top: 40px;
    @media (max-width: ${BREAK_POINT.mobile}) {
      margin-top: 20px;
    }
  }
  .app-divider {
    width: 100%;
    height: 0px;
    border: 1px solid ${APP_COLORS.creamDark};
  }
  a {
    outline: none !important;
  }
  .app-page-inner {
    margin-top: ${APP_MOBILE_HEADER_HEIGHT};
    @media (min-width: ${BREAK_POINT.tablet}) {
      margin-top: ${APP_HEADER_HEIGHT};
    }
  }
  @media(min-width: 1366px) and (max-width:1511px){
  // 
  }
  @media(min-width:1200px) and (max-width:1365px){
  // 
  }
  @media(min-width:992px) and (max-width:1199px){
  // 
  }
  @media(min-width:768px) and (max-width:992px){
    // 
  }
  /*tablet*/
  @media (min-width:480px) and (max-width:768px){
  // 
  }
  /*mobile*/
  @media only screen and (min-width:240px) and (max-width:480px){
  
  }
`;
