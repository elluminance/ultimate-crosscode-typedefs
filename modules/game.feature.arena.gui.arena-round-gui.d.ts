// requires impact.feature.rumble.rumble
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.hud.right-hud
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.arena.arena-misc
// requires game.feature.arena.gui.arena-effect-display

export {};

declare global {
  namespace sc {
    interface ArenaRoundEndButtons extends ig.GuiElementBase {
      buttons: sc.ButtonGui[];
    }
    interface ArenaRoundEndButtonsConstructor extends ImpactClass<ArenaRoundEndButtons> {
      new (
        callback: (rushMode: boolean, buttonIndex: number, isLastRound: boolean) => void,
        info: sc.InfoBar,
        playerDeath: boolean,
      ): ArenaRoundEndButtons;
    }
    var ArenaRoundEndButtons: ArenaRoundEndButtonsConstructor;
  }
}
