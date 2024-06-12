import '@/mobile.scss';
import { AppEnum, IframeSyncEnum, ProjectEnum, WorkspaceEnum } from '@/enums';
import { getItem } from '@/utils/localStorage';
import { transformVarsType } from '@/utils/css';

import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import type { RecordObject, AppLocale, Project, ProjectVersion, WComponentVarType } from '@/types';

const STYLE_TAG_ID = 'VANT_THEME_TAG';

const V2_STYLE_TAG_ID = 'V2_VANT_THEME_TAG';

let _appLocale = getItem<AppLocale>(AppEnum.APP_LOCALE, 'zh-CN');

let _mobileVersion: ProjectVersion = ProjectEnum.VERSION_4;

let routeHistory: string[] = [];

let routeIndex = 0;

const initRouteHistory = () => {
  const route = unref(window.vueRouter.currentRoute);

  routeHistory = [];
  // routeHistory = [WorkspaceEnum.WORKSPACE_BASIC];
  routeHistory.push(route.path.split('/')[2] || WorkspaceEnum.WORKSPACE_BASIC);
  routeIndex = routeHistory.length - 1;
  console.log('init routeHistory', routeHistory);
  console.log('init routeIndex', routeIndex);
};

const addRouteHistory = (path: string) => {
  routeHistory.push(path);
  routeIndex = routeHistory.length - 1;

  console.log('add routeHistory', routeHistory);
  console.log('add routeIndex', routeIndex);
};

const initMobileVersion = () => {
  const metaTag = document.querySelector(
    'meta[name="vant-theme-mobile-version"]'
  ) as HTMLMetaElement;

  _mobileVersion = metaTag.content as ProjectVersion;
};

const initHtmlClass = () => {
  if (_mobileVersion === ProjectEnum.VERSION_2 || _mobileVersion === ProjectEnum.VERSION_3) {
    const htmlTag = document.querySelector('html') as HTMLHtmlElement;

    htmlTag.classList.add('van-theme-light');
  }
};

const createStyleTag = () => {
  const style = document.createElement('style');
  style.id = STYLE_TAG_ID;
  document.head.appendChild(style);

  if (_mobileVersion === ProjectEnum.VERSION_2) {
    const style = document.createElement('style');
    style.id = V2_STYLE_TAG_ID;
    document.head.appendChild(style);
  }
};

const createBackEl = () => {
  const oldBackEl = document.querySelector('.demo-nav__back') as HTMLElement;
  oldBackEl.remove();

  const newBackEl = document.createElement('div');
  const parentNode = document.querySelector('.demo-nav') as HTMLElement;
  parentNode.appendChild(newBackEl);

  const node = createApp({
    render: () =>
      h(
        'svg',
        {
          class: 'demo-nav__back',
          viewBox: '0 0 1000 1000',
          onClick
        },
        [
          h('path', {
            fill: '#969799',
            'fill-rule': 'evenodd',
            d: 'M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z'
          })
        ]
      )
  });

  const onClick = () => {
    syncPathToParent();
  };

  node.mount(newBackEl);
};

/**
 * 监听 父窗口 发起的 同步系统语言 请求
 */
const listenToSyncLocale = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.UPDATE_LOCALE) {
      const data = JSON.parse(event.data.value);

      const appLocale: AppLocale = data.appLocale;

      const project: Project = data.project;

      const currentRoute =
        project.version === ProjectEnum.VERSION_2
          ? window.vueRouter.currentRoute
          : window.vueRouter.currentRoute.value;

      const [, , component = WorkspaceEnum.WORKSPACE_BASIC] = currentRoute.path.split('/');

      _appLocale = appLocale;

      const nextPath = '/' + appLocale + '/' + component;

      window.vueRouter.replace(nextPath);
    }
  });
};

/**
 * 监听 父窗口 发起的 获取组件变量 请求
 */
const listenToSyncGetVar = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.GET_VAR) {
      const componentVar = JSON.parse(event.data.value);

      const vars = transformVarsType(componentVar, _mobileVersion);

      syncVarToParent(vars);
    }
  });
};

/**
 * 监听 父窗口 发起的 设置组件变量 请求
 */
const listenToSyncSetVar = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.SET_VAR) {
      const cvVar = JSON.parse(event.data.value);

      const _format = (modeCss: RecordObject) => {
        let css = '{';

        Object.entries(modeCss).forEach(([key, value]) => {
          const k =
            _mobileVersion !== ProjectEnum.VERSION_2
              ? key
              : key.replace(/@([a-z0-9-]+)/g, '--van-$1');

          const v =
            _mobileVersion !== ProjectEnum.VERSION_2
              ? value
              : value.replace(/@([a-z0-9-]+)/g, 'var(--van-$1)');

          css += `${k}: ${v}; `;
        });

        css += '}';

        return css;
      };

      const lightCss = _format(cvVar.light);

      const darkCss = _format(cvVar.dark);

      const styleTag = document.querySelector(`#${STYLE_TAG_ID}`);
      if (styleTag) {
        styleTag.innerHTML = `
          html.van-theme-light ${lightCss}
          html.van-theme-dark ${darkCss}
        `;
      }
    }
  });
};

/**
 * 监听 父窗口 发起的 设置组件变量 请求
 * 用于 v2 版本
 */
const listenToSyncSetVarV2 = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === IframeSyncEnum.SET_VAR_V2) {
      const cvVar = event.data.value;
      const styleTag = document.querySelector(`#${V2_STYLE_TAG_ID}`);
      if (styleTag) {
        styleTag.innerHTML = cvVar;
      }
    }
  });
};

/**
 * 同步 地址（组件）到父窗口
 */
const syncPathToParent = () => {
  routeHistory.pop();

  let nextPath;

  if (routeHistory.length === 0) {
    routeIndex = 0;

    nextPath = '/' + _appLocale + '/' + WorkspaceEnum.WORKSPACE_BASIC;
  } else {
    routeIndex = routeHistory.length - 1;

    const value = routeHistory.splice(routeIndex, 1);

    nextPath = '/' + _appLocale + '/' + value[0];
  }

  window.vueRouter.replace(nextPath);

  if (window.top) {
    window.top.postMessage(
      {
        type: IframeSyncEnum.REPLACE_PATH,
        value: nextPath
      },
      '*'
    );
  }
};

/**
 * 同步 组件变量 到父窗口
 */
const syncVarToParent = (vars: Record<string, WComponentVarType>) => {
  if (window.top) {
    window.top.postMessage(
      {
        type: IframeSyncEnum.GET_VAR,
        value: JSON.stringify(vars)
      },
      '*'
    );
  }
};

const init = () => {
  if (window.top) {
    window.top.postMessage({ type: IframeSyncEnum.MOBILE_READY }, '*');
  }

  initMobileVersion();

  initHtmlClass();

  createStyleTag();

  createBackEl();

  listenToSyncLocale();

  listenToSyncGetVar();

  listenToSyncSetVar();

  listenToSyncSetVarV2();

  initRouteHistory();

  window.vueRouter.beforeEach(
    (to: RouteLocationNormalized, form: RouteLocationNormalized, next: NavigationGuardNext) => {
      const path = to.path.split('/')[2] || WorkspaceEnum.WORKSPACE_BASIC;
      addRouteHistory(path);
      next();
    }
  );
};

init();
