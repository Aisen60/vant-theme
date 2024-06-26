import fs from 'fs-extra';
import { VANT_SOURCE, VANT_PUBLIC_PATH, VANT_VERSION_LIST, VANT_MOBILE_PAGE } from './constant.js';
import { logInfo, logSuccess } from './log.js';
import { pathResolve } from './utils.js';

export const createMobilePublic = async () => {
  logInfo(`create vant mobile public start`);
  await fs.ensureDir(pathResolve(VANT_PUBLIC_PATH));
  logSuccess(`create vant mobile public success`);
};

export const createMobilePage = async () => {
  logInfo(`create vant mobile page start`);
  const originFiles = VANT_VERSION_LIST.map((it) => {
    return {
      name: it,
      path:
        it === 'v4'
          ? pathResolve(`${VANT_SOURCE}/mobile.html`)
          : pathResolve(`${VANT_SOURCE}/${it}/mobile.html`)
    };
  });
  for (let i = 0; i < originFiles.length; i++) {
    const { name, path } = originFiles[i];
    const originContent = await fs.readFile(path, 'utf8');
    let nextContent = '';
    if (name === 'v4') {
      /**
       * vite 编译时，会加上 base_url，这里无需配置
       */
      nextContent = originContent.replace(/\/vant\/static\//g, '/vant/v4/assets/');

      // /**
      //  * 替换百度统计
      //  */
      // nextContent = nextContent.replace(
      //   'af5d41bc4e446e76665dbe3ec18d55c3',
      //   '80adfe034cfb8053f339574d36128324'
      // );

      // /**
      //  * 新增自定义处理逻辑
      //  */
      // nextContent = nextContent.replace(
      //   /(<div id="app"><\/div>)/,
      //   '$1<script type="module" src="/src/mobile.ts"></script>'
      // );
    }
    if (name === 'v3') {
      /**
       * vite 编译时，会加上 base_url，这里无需配置
       */
      nextContent = originContent.replace(/\/vant\/v3\/assets\//g, '/vant/v3/assets/');

      // /**
      //  * 替换百度统计
      //  */
      // nextContent = nextContent.replace(
      //   'af5d41bc4e446e76665dbe3ec18d55c3',
      //   '80adfe034cfb8053f339574d36128324'
      // );

      // /**
      //  * 新增自定义处理逻辑
      //  */
      // nextContent = nextContent.replace(
      //   /(<div id="app"><\/div>)/,
      //   '$1<script type="module" src="/src/mobile.ts"></script>'
      // );
    }
    if (name === 'v2') {
      /**
       * vite 编译时，会加上 base_url，这里无需配置
       */
      nextContent = originContent.replace(/\/vant\/v2\//g, '/vant/v2/assets/');

      // /**
      //  * 替换百度统计
      //  */
      // nextContent = nextContent.replace(
      //   'af5d41bc4e446e76665dbe3ec18d55c3',
      //   '80adfe034cfb8053f339574d36128324'
      // );

      // /**
      //  * 新增自定义处理逻辑
      //  */
      // nextContent = nextContent.replace(
      //   /(<div id="app"><\/div>)/,
      //   '$1<script type="module" src="/src/mobile.ts"></script>'
      // );
    }

    /**
     * 新增自定义处理逻辑
     */
    nextContent = nextContent.replace(
      /(<div id="app"><\/div>)/,
      '$1<script type="module" src="/src/mobile.ts"></script>'
    );

    /**
     * 新增自定义处理逻辑
     */
    nextContent = nextContent.replace(
      /(<\/head>)/,
      `<meta name="vant-theme-mobile-version" content="${name}" />$1`
    );

    /**
     * 如果是 v2 插入 css
     */
    if (name === 'v2') {
      nextContent = nextContent.replace(
        /(<div id="app"><\/div>)/,
        '$1<link rel="stylesheet" type="text/css" href="/mobile-v2.css" />'
      );
    }

    /**
     * 替换百度统计
     */
    nextContent = nextContent.replace(
      'af5d41bc4e446e76665dbe3ec18d55c3',
      '80adfe034cfb8053f339574d36128324'
    );

    const file = pathResolve(`${VANT_MOBILE_PAGE}/${name}.html`);
    await fs.outputFile(file, nextContent);
  }
  logSuccess(`create vant mobile page success`);
};

export const createMobileAssets = async () => {
  logInfo(`create vant mobile assets start`);
  for (let i = 0; i < VANT_VERSION_LIST.length; i++) {
    const v = VANT_VERSION_LIST[i];
    if (v === 'v4') {
      const source = pathResolve(`${VANT_SOURCE}/static`);
      const target = pathResolve(`${VANT_PUBLIC_PATH}/${v}/assets`);
      await fs.copy(source, target);
    }
    if (v === 'v3') {
      const source = pathResolve(`${VANT_SOURCE}/v3/assets`);
      const target = pathResolve(`${VANT_PUBLIC_PATH}/${v}/assets`);
      await fs.copy(source, target);
    }
    if (v === 'v2') {
      const source = pathResolve(`${VANT_SOURCE}/v2`);
      const target = pathResolve(`${VANT_PUBLIC_PATH}/${v}/assets`);
      await fs.copy(source, target);
    }
  }
  logSuccess(`create vant mobile assets success`);
};

export const replaceMobileAssets = async () => {
  logInfo(`replace vant mobile assets start`);
  for (let i = 0; i < VANT_VERSION_LIST.length; i++) {
    const v = VANT_VERSION_LIST[i];
    if (v === 'v4') {
      const file = await fs
        .readdir(pathResolve(`${VANT_PUBLIC_PATH}/${v}/assets/js`))
        .then((files) => files.find((file) => file.startsWith('mobile')));
      const filePath = `${VANT_PUBLIC_PATH}/${v}/assets/js/${file}`;
      let content = await fs.readFile(filePath, 'utf8');
      content = content.replace(/\/vant\//g, `${process.env.VANT_THEME_BASE}vant/v4/assets/`);
      content = content.replace(/static\/js\/async\//g, 'js/async/');
      content = content.replace(/static\/css\/async\//g, 'css/async/');
      await fs.outputFile(filePath, content);
    }
    if (v === 'v3') {
      const file = await fs
        .readdir(pathResolve(`${VANT_PUBLIC_PATH}/${v}/assets`))
        .then((files) => files.find((file) => file.startsWith('iframe-router')));
      const filePath = `${VANT_PUBLIC_PATH}/${v}/assets/${file}`;
      let content = await fs.readFile(filePath, 'utf8');
      content = content.replace(/\/vant\/v3\//g, `${process.env.VANT_THEME_BASE}vant/v3/`);
      await fs.outputFile(filePath, content);
    }
  }
  logSuccess(`replace vant mobile assets success`);
};
