class HamburgerMenu {
  menu: HTMLHtmlElement;
  button: HTMLHtmlElement;
  menuLinks: NodeListOf<HTMLAnchorElement>;

  constructor() {
    this.menu = document.querySelector(".js-hamburger-menu")!;
    this.button = document.querySelector(".js-hamburger")!;
    this.menuLinks = this.menu.querySelectorAll("a")!;
    console.log("constructor!");
    this.init();
  }
  init() {
    this.button.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    this.button.addEventListener("click", () => {
      this.toggleMenu();
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
  }
  closeMenu() {
    this.menu.classList.remove("_isActive");
    this.button.setAttribute("aria-label", "メニューを表示する");
    this.button.setAttribute("aria-expanded", "false");
  }
}
export const hamburgerMenu = () => {
  new HamburgerMenu();
  console.log("!!");
};
