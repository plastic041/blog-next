---
title: 'Aseprite 빌드해서 써보기'
excerpt: '오픈소스 프로그램인 Aseprite를 직접 빌드해보자'
date: '2021-08-16T05:35:07.322Z'
---

참고 링크: [https://github.com/aseprite/aseprite/blob/main/INSTALL.md](https://github.com/aseprite/aseprite/blob/main/INSTALL.md)

1. 소스 코드와 라이브러리 다운로드

   1. `git clone --recursive https://github.com/aseprite/aseprite.git`

   2. [https://cmake.org](https://cmake.org)

   3. [https://ninja-build.org](https://ninja-build.org)

      - `C:/aseprite/build/ninja.exe`에 위치

   4. [https://github.com/aseprite/skia/releases](https://github.com/aseprite/skia/releases)

   5. Visual Studio Community 2019 Installer에서 **C++ 개발 도구** 설치([https://imgur.com/a/7zs51IT](https://imgur.com/a/7zs51IT))

2. 빌드

   1. 1-1에서 다운로드한 코드를 `C:/aseprite`에 위치

   2. 1-4의 Skia 파일을 `C:/deps/skia`에 위치

   3. Developer Command Prompt for VS 2019에서 순서대로 실행

      ```powershell
      call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat" -arch=x64

      cd c:\aseprite
      mkdir build
      cd build

      chcp 65001
      # 인코딩을 utf-8로 변경한다. 안 하면 한국어 윈도우에서는 코드 문제로 컴파일 오류가 난다.

      cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DLAF_BACKEND=skia -DSKIA_DIR=C:\deps\skia -DSKIA_LIBRARY_DIR=C:\deps\skia\out\Release-x64 -DSKIA_LIBRARY=C:\deps\skia\out\Release-x64\skia.lib -G Ninja ..

      ninja aseprite
      ```

빌드한 Aseprite는 개인적/상업적 용도 모두에 사용할 수 있다. ([Aseprite faq](https://www.aseprite.org/faq/#if-aseprite-source-code-is-available-how-is-that-you-are-selling-it))
