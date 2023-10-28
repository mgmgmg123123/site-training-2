class HamburgerMenu {
  menu: HTMLHtmlElement;
  button: HTMLHtmlElement;
  menuLinks: NodeListOf<HTMLAnchorElement>;
  isSupport: boolean;

  constructor() {
    this.menu = document.querySelector(".js-hamburger-menu")!;
    this.button = document.querySelector(".js-hamburger")!;
    this.menuLinks = this.menu.querySelectorAll("a")!;
    this.isSupport = CSS.supports("overscroll-behavior", "none");

    this.init();
  }
  init() {
    this.button.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });

    // ハンバーガー開けっぱなしで画面サイズをPCサイズへ変えた時に閉じる
    const mdSize = 768;
    const mediaQueryList = window.matchMedia(`(min-width: ${mdSize}px)`);
    mediaQueryList.addEventListener("change", (event) => {
      if (event.matches) {
        this.closeMenu();
      }
    });
  }
  menuLinkClicked() {
    // menu 内のリンククリックで閉じる
    for (let i = 0; i < this.menuLinks.length; i++) {
      this.menuLinks[i].addEventListener("click", () => {
        this.closeMenu();
      });
    }
  }
  toggleMenu() {
    this.menu.classList.contains("_isActive")
      ? this.closeMenu()
      : this.openMenu();
  }
  openMenu() {
    this.menu.classList.add("_isActive");
    this.button.setAttribute("aria-label", "メニューを開く");
    this.button.setAttribute("aria-expanded", "true");
    this.bodyLock();
  }
  closeMenu() {
    this.menu.classList.remove("_isActive");
    this.button.setAttribute("aria-label", "メニューを表示する");
    this.button.setAttribute("aria-expanded", "false");
    this.bodyUnlock();
  }
  bodyLock() {
    document.body.classList.add("_isScrollLock");
  }
  bodyUnlock() {
    document.body.classList.remove("_isScrollLock");
  }
}
export const hamburgerMenu = () => {
  new HamburgerMenu();
};
