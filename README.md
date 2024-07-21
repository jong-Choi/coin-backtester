# coin-backtester

## nvm 설치
next js 14 버전을 활용하기 위해서는 node 버전이 18.17 이상이어야 한다.
`node -v` 명령어를 통해 현재 설치된 node 버전을 확인할 수 있다.


여러개의 node js 버전을 관리하기 위해 nvm을 설치한다.

[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
`nvm ls` : nvm이 관리하고 있는 node 버전들의 목록을 확인한다.


`nvm use 버전명`을 통해 특정 버전을 적용할 수 있다.


`nvm install 버전명`을 통해 특정 버전을 설치할 수 있다.
`nvm install lts` : 최신의 LTS 버전을 설치
`nvm install latest` : 최신의 node 버전을 설치

`nvm current` : 현재 사용중인 버전을 확인한다.
`nvm uninstall 버전명` : 특정 버전을 삭제한다.

NVM에서는 틸드와 캐럿(https://blog.outsider.ne.kr/1041)은 이용이 불가능하다. 


```
틸드(~)와 캐럿(^)

- npm 버전을 명시할 때에 >= 1.2.3 과 같이 명시할 수 있다.

- 틸드를 사용하면 현재의 버전 내에서만 자동으로 업데이트 한다.
~0.0.1 : >=0.0.1 <0.1.0
~0.1.1 : >=0.1.1 <0.2.0
~0.1 : >=0.1.0 <0.2.0
~0 : >=0.0 <1.0

- 캐럿은 SemVer(버전 번호를 MAJOR.MINOR.PATCH의 형식으로 표기하는 방식)을 따른다는 가정 하에, 지정한 버전을 하위호환하는 MAJOR 버전 중 최신으로 업데이트 한다.
^1.0.2 : >=1.0.2 <2.0
^1.0 : >=1.0.0 <2.0
^1 : >=1.0.0 <2.0
```

## Next JS 설치
`npx create-next-app` 를 통해 설치한다.

```
$ npx create-next-app .
npx: installed 1 in 1.17s
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... Yes
√ What import alias would you like configured? ... @/*
```

next js 14에서 CSS-in-JS를 사용하는 것에는 아직 한계가 있다. 

(가령 styled-components를 사용하는 경우, 해당 styled-component마다 'use client'를 걸어서 SSR로 실행해주어야 한다.)

따라서 SCSS 를 통해 바닐라로 구현하기로 한다. 이때 vs code에 'CSS Modules' 익스텐션을 설치하면 클래스명이 자동완성된다.


## 폰트 설정 - "next/font/google"
next/font에 인기있는 폰트들이 담겨있다.
이를 이용하여 폰트를 가져오고, 사용하면 된다.

```tsx
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        {children}
      </body>
    </html>
  );
}
```

## 크롬에서 다크모드 테스트하기
css에 다크모드를 판별하는 prefers-color-scheme 미디어 쿼리가 추가되었다.
이를 크롬의 개발자 도구에서 테스트할 수 있다.

`DevTools` - `More Tools` - `Rendering` - `Prefers-color-scheme : dark`

## 다크모드 적용하기
본 사이트는 기본으로 다크모드를 적용하고, color-scheme이 'light'일 때에만 밝게 변화하고자 한다.

아래와 같이 globals.css를 설정한다.

```css
:root {
}

html {
  color-scheme: dark;
}

@media (prefers-color-scheme: light) {
  :root {
  }

  html {
    color-scheme: light;
  }
}
```

주요 컬러는 [TradingVue](https://www.tradingview.com/) 사이트에서 따와서 css 변수를 지정하기로 한다.

그리고 간단한 css 초기화 설정을 넣어 마무리한다.

```css
:root {
  --background: #131722;
  --plus: #22ab94;
  --minus: #f23645;
  --inner: #d1d4dc;
  --link: #2962ff;
  --link__hover: #1e53e5;
  --label: #868993;
  --market-status__dot: #ff9800;

  --modal-background: #1e222d;
  --button-default: #2a2e39;
  --button-default-hover: #363a45;
  --button-primary-text: #fff;
}

html {
  color-scheme: dark;
}

@media (prefers-color-scheme: light) {
  :root {
    --background: #fff;
    --inner: #131722;
    --label: #6a6d78;

    --modal-background: #fff;
    --button-default: #f0f3fa;
    --button-default-hover: #e0e3eb;
  }

  html {
    color-scheme: light;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
```












### 구글 아이콘 사용하기

https://dev.to/sabbirsobhani/google-icons-from-google-fonts-with-nextjs-11pa
