(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";
  const id = "freemium";
  const manifest = {
    id
  };
  function handleButton() {
    const sidebar = document.querySelector(".Sidebar.octo-sidebar");
    if (!sidebar || sidebar.closest("#focalboard-app") === null) {
      return;
    }
    if (window.innerWidth < 770) {
      const workspaceTitle = document.querySelector(".WorkspaceTitle");
      if (workspaceTitle && !sidebar.classList.contains("hidden")) {
        const sidebarSwitcher = workspaceTitle.querySelector(".sidebarSwitcher");
        if (sidebarSwitcher) {
          if (!workspaceTitle.querySelector(".back-button-freemium")) {
            const backButton = document.createElement("button");
            backButton.textContent = "🏠";
            backButton.className = "back-button-freemium";
            backButton.style.backgroundColor = "transparent";
            backButton.style.border = "none";
            backButton.style.marginLeft = "10px";
            backButton.addEventListener("click", () => {
              window.location.href = window.location.origin;
            });
            const last = sidebarSwitcher.parentNode.lastChild;
            if (last) {
              sidebarSwitcher.parentNode.insertBefore(backButton, last);
            }
          }
        }
      }
    }
    if (window.innerWidth >= 770 || sidebar.classList.contains("hidden")) {
      const backButton = document.querySelector(".back-button-freemium");
      if (backButton) {
        backButton.remove();
      }
    }
  }
  function main() {
    const target = document.body;
    const callback = (mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList" || mutation.type === "attributes") {
          handleButton();
        }
      }
    };
    const observer = new MutationObserver(callback);
    const config = {
      childList: true,
      attributes: true,
      subtree: true
    };
    observer.observe(target, config);
  }
  const boardsCSS = "/* Hide the feedback button in the boards page */\n.BoardComponent .top-head .TopBar {\n	display: none !important;\n}\n\n/* Fixes for the desktop boards page */\n.CalendarContainer {\n	width: 100%;\n	height: 100%;\n	margin-right: 0 !important;\n	margin-bottom: 0 !important;\n	padding-bottom: 10px !important;\n	padding-right: 80px !important;\n}\n\n.ShareBoardButton .Button.size--medium {\n	padding: 0 10px !important;\n	height: 30px !important;\n}\n\n.ViewTitle .add-buttons {\n	margin-top: 5px !important;\n}\n\n.focalboard-body .DateRange .Modal {\n	left: -240px !important;\n}\n\n@media only screen and (max-width: 768px) {\n	/* Fixes for the mobile boards page */\n	.BoardComponent .top-head .mid-head {\n		margin-top: 80px !important;\n		flex-wrap: wrap !important;\n		gap: 15px !important;\n	}\n\n	.focalboard-body .ViewTitle > .add-buttons .Button {\n		display: flex !important;\n	}\n\n	.mid-head {\n		margin-left: 6px;\n	}\n\n	.fc-toolbar-title {\n		text-align: center !important;\n	}\n\n	.fc-header-toolbar .fc-toolbar-chunk:nth-of-type(3) {\n		justify-content: center !important;\n		align-items: center !important;\n		display: flex !important;\n		flex-direction: row !important;\n		flex-wrap: wrap !important;\n	}\n\n	.fc-dayGridWeek-button {\n		margin-left: 12px;\n	}\n\n	.CalendarContainer {\n		padding-right: 20px !important;\n	}\n\n	.d-flex.justify-content-between.tabs-inputs {\n		flex-wrap: wrap;\n		gap: 15px;\n	}\n\n	.focalboard-body .ShareBoardDialog .tabs-content .tabs-inputs .input-container {\n		width: 100% !important;\n	}\n\n	.WorkspaceTitle {\n		margin-bottom: 15px;\n	}\n\n	.octo-sidebar-header.show-button:hover {\n		background-color: var(--center-channel-bg) !important;\n	}\n}\n\n@media only screen and (max-width: 975px) {\n	/* Fixes for the boards mobile card detail popup */\n	.dialog:has(.CardDetail) {\n		border-radius: 0 !important;\n	}\n}\n\n@media only screen and (max-width: 430px) {\n	/* Fixes for other boards mobile popups */\n	.Menu.noselect {\n		width: 100vw !important;\n		max-width: 100vw !important;\n		min-height: 100vh !important;\n		background-color: var(--center-channel-bg) !important;\n		padding: 40px !important;\n		display: flex !important;\n	}\n\n	.focalboard-body .DateRange .Modal {\n		position: fixed !important;\n		overflow: scroll !important;\n		margin: 40px !important;\n		left: 0 !important;\n	}\n\n	.CardDetail {\n		overflow-x: scroll !important;\n	}\n\n	.focalboard-body .SubMenuOption .SubMenu.Menu.noselect.bottom {\n		background-color: var(--center-channel-bg) !important;\n	}\n\n	.menu-option.menu-cancel {\n		justify-content: center !important;\n		border-radius: 5px !important;\n	}\n\n	.Menu.noselect .menu-contents {\n		justify-content: center !important;\n	}\n\n	.MenuOption {\n		border-radius: 5px !important;\n	}\n\n	.ModalWrapper .Modal.bottom {\n		top: 0 !important;\n		max-width: 100vw !important;\n	}\n\n	.Modal.bottom .toolbar {\n		visibility: hidden !important;\n	}\n\n	.FilterComponent {\n		padding-right: 30px;\n		max-width: 100%;\n	}\n\n	.SwitchOption .Switch {\n		margin-left: 10px;\n	}\n\n	.dialog .toolbar {\n		padding-left: 0px !important;\n	}\n\n	.cardFollowBtn {\n		padding: 0 10px !important;\n	}\n\n	.BoardSwitcherDialog .toolbar {\n		width: 100% !important;\n		padding-left: 20px !important;\n	}\n\n	.BoardSwitcherDialog .dialog {\n		width: 80% !important;\n	}\n\n	.BoardSwitcherDialog .noResults {\n		visibility: hidden !important;\n	}\n\n	.BoardSwitcherDialog .dialog-subtitle {\n		display: none !important;\n	}\n}\n";
  const premiumCSS = '/* Hide the Mattermost name, icon and free label tag from the home page */\n[class^="ProductBrandingTeamEditionContainer"] {\n	display: none !important;\n}\n\n/* Hide the Mattermost name, icon and free label tag from the login page */\n.header-logo-link:has(> .freeBadge) {\n	display: none !important;\n}\n\n/* Hide the team edition warning in the bottom of the open top left corner menu */\n#startTrial {\n	display: none !important;\n}\n\n/* Hide the leftover menu divider that was above the warning */\nli.menu-divider:has(+ #startTrial) {\n	display: none !important;\n}\n\n/* Hide the free trial banner / upgrade card in the admin console license page */\n.admin-console__banner_section:has(.AlertBanner.info.AlertBanner--sys) {\n	display: none !important;\n}\n\n/* Hide the TeamEditionRightPanel card in the right panel of the admin console license page */\n.right-panel:has(> .panel-card + .compare-plans-text) {\n	display: none !important;\n}\n\n/* Hide any upgrade dialogs that pop up*/\ndiv[role="dialog"]:has(> #StartTrialFormModal) {\n	display: none !important;\n}\n\n/* Hide the footer notice text */\n.footer-copyright {\n	display: none !important;\n}\n\n/* Hide the view plans button in the top right corner of the dashboard */\n#RightControlsContainer #UpgradeButton {\n	display: none !important;\n}\n\n/* Hide the paid "User Groups" menu item in product switcher */\n#product-switcher-menu-dropdown #userGroups {\n	display: none !important;\n}\n\n/* Hide the premium setting to highlight keywords */\n#accountSettingsModal .section-min.isDisabled {\n	display: none !important;\n}\n';
  class Plugin {
    initialize(registry, _store) {
      const style = document.createElement("style");
      style.textContent = [
        // Import as raw and join the contents to be added to the DOM, additional styles can be appended here
        premiumCSS,
        boardsCSS
      ].join("\n");
      document.head.appendChild(style);
      registry.registerGlobalComponent(() => {
        main();
        return null;
      });
    }
    uninitialize() {
    }
  }
  window.registerPlugin(manifest.id, new Plugin());
});
//# sourceMappingURL=plugin-umd.js.map
