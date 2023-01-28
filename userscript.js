// ==UserScript==
// @name         saivar kyo-kasyo one-shot-login for GIGA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  人間がやらんでいい作業は人間がやるな
// @author       GIG SCHOOL
// @match        https://manaviewer.jp/userlicense
// @match        https://www.lentrance.com/*
// @match        https://p01-admin.cloud.cho-textbook.jp/users/sign_in
// @match        https://prdlitlesson.b2clogin.com/prdlitlesson.onmicrosoft.com/*
// @match        https://stg-d52t538d5lr3139i.fsffl.jp/auth/*
// @icon

// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-end
// ==/UserScript==
window.onload = () => {
  (function () {
    "use strict";
    // Your code here...
    const URL = window.location.href;

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *       　まなビューア用ログインデータ
     *        （書式に沿って適宜追加してみてください）
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    const getManaviewrData = () => {
      /**  適宜変更ここから  */
      // 学校名, 学校ID, 管理者ID, 管理者パスワード
      const data = [
        ["テスト学校", "xxxx", "XXXXXXXX", "*******"],
        ["invalid test"],
        ["sample学校", "xxxx", "XXXXXXXXX", "******"],
      ];
      /**  適宜変更ここまで  */
      // プログラムのための整形（追加する人間のためじゃないよ）
      const ret = data.map((row) => {
        if (row.length !== 4) row = ["-- INVALID --", "", "", ""];
        const m = new Map();
        m.set("SchoolName", row[0]);
        m.set("SchoolId", row[1]);
        m.set("UserId", row[2]);
        m.set("WatchWord", row[3]);
        return m;
      });
      return ret;
    };

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *       　レントランス用ログインデータ
     *        （書式に沿って適宜追加してみてください）
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    const getLentranceData = () => {
      /**  適宜変更ここから  */
      // 学校名, 学校番号, ログインID, パスワード
      const data = [
        ["テスト学校", "99999999", "0000000000", "XXXXXXX"],
        ["invalid test"],
        ["sample学校", "999999999", "000000000", "XXXXXX"],
      ];
      /**  適宜変更ここまで  */
      // プログラムのための整形（追加する人間のためじゃないよ）
      const ret = data.map((row) => {
        if (row.length !== 4) row = ["-- INVALID --", "", "", ""];
        const m = new Map();
        m.set("SchoolName", row[0]);
        m.set("SchoolNumber", row[1]);
        m.set("UserId", row[2]);
        m.set("UserPassword", row[3]);
        return m;
      });
      return ret;
    };

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *       　超教科書用ログインデータ
     *        （書式に沿って適宜追加してみてください）
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    const getSuperKyokasyoData = () => {
      /**  適宜変更ここから  */
      // 学校名, 組織番号, ログインID, パスワード
      const data = [
        ["テスト学校", "XXXXXXXX", "xxxxxxxx", "*******"],
        ["invalid test"],
        ["sample学校", "XXXXXXX", "xxxxxxx", "*******"],
      ];
      /**  適宜変更ここまで  */
      // プログラムのための整形（追加する人間のためじゃないよ）
      const ret = data.map((row) => {
        if (row.length !== 4) row = ["-- INVALID --", "", "", ""];
        const m = new Map();
        m.set("SchoolName", row[0]);
        m.set("OrganizationCode", row[1]);
        m.set("LoginId", row[2]);
        m.set("LoginPassword", row[3]);
        return m;
      });
      return ret;
    };

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *       　Life Is Techログインデータ
     *        （書式に沿って適宜追加してみてください）
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    const getLifeIsTechData = () => {
      /**  適宜変更ここから  */
      // 学校名, SignInName, パスワード
      const data = [
        ["テスト学校", "XXXXXXXXXX", "00000000"],
        ["invalid test"],
        ["sample学校", "XXXXXX", "999999999"],
      ];
      /**  適宜変更ここまで  */
      // プログラムのための整形（追加する人間のためじゃないよ）
      const ret = data.map((row) => {
        if (row.length !== 3) row = ["-- INVALID --", "", ""];
        const m = new Map();
        m.set("SchoolName", row[0]);
        m.set("SigninName", row[1]);
        m.set("LoginPassword", row[2]);
        return m;
      });
      return ret;
    };

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *       　みらいスクールプラットフォームログインデータ
     *        （書式に沿って適宜追加してみてください）
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    const getMiraiSchoolPlatformData = () => {
      /**  適宜変更ここから  */
      // 学校名, ログインID, パスワード
      const data = [
        ["テスト学校", "XXXXXX", "00000000"],
        ["invalid test"],
        ["sample学校", "XXXXXX", "**********"],
      ];
      /**  適宜変更ここまで  */
      // プログラムのための整形（追加する人間のためじゃないよ）
      const ret = data.map((row) => {
        if (row.length !== 3) row = ["-- INVALID --", "", ""];
        const m = new Map();
        m.set("SchoolName", row[0]);
        m.set("SigninName", row[1]);
        m.set("LoginPassword", row[2]);
        return m;
      });
      return ret;
    };

    /**
     * URL Matcher
     * サービスごとに切り替える
     */
    {
      if (
        URL.match(/(https:\/\/|http:\/\/|)manaviewer\.jp\/userlicense/gi) !=
        null
      ) {
        console.log("まなビューア ログイン画面");
        const schoolInfo = getManaviewrData();
        onLoginManaviewer(schoolInfo);
      } else if (
        URL.match(
          /(https:\/\/|http:\/\/|)www\.lentrance\.com\/(school|schools\/\d+)\/login/gi
        ) != null
      ) {
        // レントランスはなんか過去にログインした形跡があったらそれ用のログインURLになるっぽいので対応
        console.log("レントランス　ログイン画面");
        const schoolInfo = getLentranceData();
        onLoginLentrance(schoolInfo);
      } else if (
        URL.match(
          /(https:\/\/|http:\/\/|)p01-admin\.cloud\.cho-textbook\.jp\/users\/sign_in/gi
        )
      ) {
        console.log("超教科書　ログイン画面");
        const schoolInfo = getSuperKyokasyoData();
        onSuperKyoksyo(schoolInfo);
      } else if (
        URL.match(
          /https:\/\/prdlitlesson\.b2clogin\.com\/prdlitlesson\.onmicrosoft\.com*/gi
        )
      ) {
        console.log("Life is Tech ログイン画面");
        const schoolInfo = getLifeIsTechData();
        onLifeIsTech(schoolInfo);
      } else if (
        URL.match(
          /(https:\/\/|http:\/\/|)stg-d52t538d5lr3139i\.fsffl\.jp\/auth*/gi
        )
      ) {
        console.log("みらいスクールプラットフォーム　ログイン画面");
        const schoolInfo = getMiraiSchoolPlatformData();
        onMiraiSchoolPlatform(schoolInfo);
      }
    }
    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *          for まなビューア
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    function onLoginManaviewer(schoolInfo) {
      // 標準のWeb画面のログインボタン
      const login_btn = document.getElementById("btn_login");
      // oneshotlogin用HTML構築
      // ログインページで使ってるbootstrapを流用してナビゲーションドロップダウンリストを使う
      let oneShotLoginList = "";
      for (let [idx, school] of schoolInfo.entries()) {
        oneShotLoginList += `<div class="dropdown-item lead border-bottom pre-auto py-2" name="onsehot" id="btn_${idx}">${school.get(
          "SchoolName"
        )}</div>`;
      }

      // リスト用HTML
      const login_cheat = `
      <div class="dropdown p-5">
        <button type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
          ワンショットログイン - まなビューア
        </button>
        <div class="dropdown-menu dropdown-menu-right" style="height:800px; overflow: auto;">
        ${oneShotLoginList}
        </div>
      </div>
      `;

      // 挿入
      document
        .querySelector(".header")
        .insertAdjacentHTML("afterend", login_cheat);

      // （pushしたらログインする）イベント追加
      const addEventsOnSchoolName = (schools) => {
        for (const [idx, school] of schools.entries()) {
          document
            .getElementById(`btn_${idx}`)
            .addEventListener("click", (e) => {
              document.getElementById("SchoolId").value =
                school.get("SchoolId");
              document.getElementById("UserId").value = school.get("UserId");
              document.getElementById("WatchWord").value =
                school.get("WatchWord");
              login_btn.click();
            });
        }
      };
      addEventsOnSchoolName(schoolInfo);
    }

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *          for レントランス
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    function onLoginLentrance(schoolInfo) {
      // dropdownmeu追加するためにbootstrap使う
      const head = document.getElementsByTagName("head")[0];
      const styleLink = document.createElement("link");
      head.appendChild(styleLink);
      styleLink.setAttribute("rel", "stylesheet");
      styleLink.setAttribute("type", "text/css");
      styleLink.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      );
      styleLink.setAttribute(
        "integrity",
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      );

      const jsSrc4BS = document.createElement("script");
      head.appendChild(jsSrc4BS);
      jsSrc4BS.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      );
      jsSrc4BS.setAttribute(
        "integrity",
        "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      );
      jsSrc4BS.setAttribute("crossorigin", "anonymous");

      // pushしたらログインするGUI上のボタン（lentranceはbutton要素じゃなくてinputをボタンにしてるっぽいけどクリックイベントは有効）
      const btn_login = document.querySelector("input.button");

      // 各学校のログインデータを整形するよ
      let oneShotLoginList = "";
      for (const [idx, school] of schoolInfo.entries()) {
        oneShotLoginList += `<div class="dropdown-item lead my-2 border-bottom pre-auto" name="oneshot" id="btn_${idx}">${school.get(
          "SchoolName"
        )}</div>`;
      }

      // ログイン情報をセット
      const login_button_go = `
    <li>
      <div class="dropdown">
        <button id="oneshot_btn" class="colorbox__btn--white dropdwon-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" p-1>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
          </svg>
      ワンショットでログイン
        </span>
        </button>
        <div class="dropdown-menu dropdown-menu-xl-start lead mx-2" aria-labelledby="oneshot_btn" style="height:500px; overflow: auto;">
          ${oneShotLoginList}
        </div>
      </div>
    </li>
    `;

      //　ワンショットログインをいい感じの並びにしれっと置く
      document
        .querySelector(".colorbox__list")
        .insertAdjacentHTML("beforeend", login_button_go);

      const addEventsOnSchoolName = (schools) => {
        for (const [idx, school] of schools.entries()) {
          document
            .getElementById(`btn_${idx}`)
            .addEventListener("click", (e) => {
              // ログイン情報が残っているかどうかで取得するIDが変わるっぽいので対応
              if (
                document.getElementById("school_school_user_school_number") !==
                null
              ) {
                document.getElementById(
                  "school_school_user_school_number"
                ).value = school.get("SchoolNumber");
              }
              if (
                document.getElementById("school_school_user_login") !== null
              ) {
                document.getElementById("school_school_user_login").value =
                  school.get("UserId");
              } else {
                document.getElementById("school_user_login").value =
                  school.get("UserId");
              }
              if (
                document.getElementById("school_school_user_password") !== null
              ) {
                document.getElementById("school_school_user_password").value =
                  school.get("UserPassword");
              } else {
                document.getElementById("school_user_password").value =
                  school.get("UserPassword");
              }
              btn_login.click();
            });
        }
      };

      addEventsOnSchoolName(schoolInfo);
    }

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *          for 超教科書
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */

    function onSuperKyoksyo(schoolInfo) {
      const login_btn = document.querySelector("input.btn");

      let oneShotLoginList = "";
      for (const [idx, school] of schoolInfo.entries()) {
        oneShotLoginList += `<div class="dropdown-item lead my-2 border-bottom pre-auto" name="onsehot" id="btn_${idx}">${school.get(
          "SchoolName"
        )}</div>`;
      }
      // もともと読み込んでるcssを流用する
      const login_cheat = `
      <div class="dropdown">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ワンショットログイン - 超教科書
        </button>
        <div class="dropdown-menu dropdown-menu-right" style="height:480px; overflow: auto;">
        ${oneShotLoginList}
        </div>
      </div>
      `;
      document
        .querySelector("div.text-center:nth-child(1)")
        .insertAdjacentHTML("beforeend", login_cheat);

      const addEventsOnSchoolName = (schools) => {
        for (const [idx, school] of schools.entries()) {
          document
            .getElementById(`btn_${idx}`)
            .addEventListener("click", (e) => {
              document.getElementById("organization_code").value =
                school.get("OrganizationCode");
              document.getElementById("login").value = school.get("LoginId");
              document.getElementById("password").value =
                school.get("LoginPassword");

              login_btn.click();
            });
        }
      };

      addEventsOnSchoolName(schoolInfo);
    }
    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *          for Life is tech
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    function onLifeIsTech(schoolInfo) {
      // dropdownmeu追加するためにbootstrap使う
      // サービスの管理画面でreactを使っているようで、アプリ部分のロードが（userscriptの即時関数より）遅いので、アプリ部分に埋め込む手法が取れない。無理やりヘッダーにねじこむ
      const head = document.querySelector("head");
      const styleLink = document.createElement("link");
      head.appendChild(styleLink);
      styleLink.setAttribute("rel", "stylesheet");
      styleLink.setAttribute("type", "text/css");
      styleLink.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      );
      styleLink.setAttribute(
        "integrity",
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      );
      const jsSrc4BS = document.createElement("script");
      head.appendChild(jsSrc4BS);
      jsSrc4BS.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      );
      jsSrc4BS.setAttribute(
        "integrity",
        "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      );
      jsSrc4BS.setAttribute("crossorigin", "anonymous");

      // 各学校のログインデータを整形するよ
      let oneShotLoginList = "";
      for (const [idx, school] of schoolInfo.entries()) {
        oneShotLoginList += `<div class="dropdown-item lead border-bottom pre-auto" name="onsehot" id="btn_${idx}">${school.get(
          "SchoolName"
        )}</div>`;
      }

      // ログイン情報をセット
      const login_button_go = `
          <div class="pt-5 px-5">
          <div class="dropdown">
            <button id="oneshot_btn" class="btn btn-lg btn-info dropdwon-toggle py-2 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
              </svg>
              LIFE IS HACKED
            </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="oneshot_btn" style="height:500px; overflow: auto;">
              ${oneShotLoginList}
            </div>
          </div>
          </div>
        `;

      /*
      document
        .querySelector(".makeStyles-avatar-7")
        .insertAdjacentHTML("beforeend", login_button_go);
      */
      // console.log(document.body.outerHTML);
      document
        .querySelector("body")
        .insertAdjacentHTML("afterbegin", login_button_go);

      const addEventsOnSchoolName = (schools) => {
        for (const [idx, school] of schools.entries()) {
          document
            .getElementById(`btn_${idx}`)
            .addEventListener("click", (e) => {
              document.getElementById("signInName").value =
                school.get("SigninName");
              document.getElementById("password").value =
                school.get("LoginPassword");
              // 標準のWeb画面のログインボタン
              // (レンダリング終了後じゃないと読み込めないのでここで読み込む)
              const login_btn = document.getElementById("next");
              login_btn.click();
            });
        }
      };

      addEventsOnSchoolName(schoolInfo);
    }

    /**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     *
     *          for みらいスクールプラットフォーム
     *
     * -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
     */
    function onMiraiSchoolPlatform(schoolInfo) {
      // dropdownmeu追加するためにbootstrap使う
      const head = document.querySelector("head");
      const styleLink = document.createElement("link");
      head.appendChild(styleLink);
      styleLink.setAttribute("rel", "stylesheet");
      styleLink.setAttribute("type", "text/css");
      styleLink.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      );
      styleLink.setAttribute(
        "integrity",
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      );
      const jsSrc4BS = document.createElement("script");
      head.appendChild(jsSrc4BS);
      jsSrc4BS.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      );
      jsSrc4BS.setAttribute(
        "integrity",
        "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      );
      jsSrc4BS.setAttribute("crossorigin", "anonymous");

      // みらいスクールプラットフォーム管理者ログイン画面が独自のnormalizeをかけてしまっているので、それの上書きしたやつを再度指定する（なんもないログイン画面なのでこんなもんでいいと思う）
      // head.insertAdjacentHTML(
      //   "beforeend",
      //   `<link rel="stylesheet" href="/auth/resources/3.4.3.final/login/ffl/css/normalize.css">`
      // );

      // みらいスクールプラットフォーム管理者ログイン画面がposition:absolute;を使いまくっててカスタマイズしにくいのでどうにか使えるレベルに修正する
      const section = document.querySelector("section");
      section.style.position = "static";
      section.style.marginTop = "5em";
      section.style.marginBottom = "5em";
      section.style.height = "auto";

      const article = document.querySelector("article");
      article.style.marginBottom = "5em";

      const form = document.getElementById("kc-form-login");
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.justifyContent = "center";
      form.style.alignItems = "center";

      const login_btn = document.getElementById("btchkinfo");
      login_btn.style.position = "static";
      login_btn.style.marginTop = "40px";
      login_btn.style.display = "flex";
      login_btn.style.flex = "auto";

      const msg = document.getElementById("d_info_msg");
      msg.style.position = "static";

      // 学校データ整形
      let oneShotLoginList = "";
      for (const [idx, school] of schoolInfo.entries()) {
        oneShotLoginList += `<div class="dropdown-item lead border-bottom pre-auto" name="onsehot" id="btn_${idx}">${school.get(
          "SchoolName"
        )}</div>`;
      }

      // WIP ログイン情報をセット
      const login_button_go = `
        <div class="pt-5 px-5">
        <div class="dropdown">
          <button id="oneshot_btn" class="btn btn-lg btn-outline-secondary dropdwon-toggle py-2 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
            </svg>
            ONESHOT LOGIN
          </span>
          </button>
          <div class="dropdown-menu" aria-labelledby="oneshot_btn" style="height:500px; overflow: auto;">
            ${oneShotLoginList}
          </div>
        </div>
        </div>
      `;
      document
        .getElementById("content")
        .insertAdjacentHTML("afterbegin", login_button_go);

      // set
      const addEventsOnSchoolName = (schools) => {
        for (const [idx, school] of schools.entries()) {
          document
            .getElementById(`btn_${idx}`)
            .addEventListener("click", (e) => {
              document.getElementById("uid").value = school.get("SigninName");
              document.getElementById("upw").value =
                school.get("LoginPassword");
              login_btn.click();
            });
        }
      };

      addEventsOnSchoolName(schoolInfo);
    }
  })();
};
