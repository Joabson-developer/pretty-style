export const prettyStyle = {
  /**
   * @param {string} styles
   */
  set css(styles) {
    const thereIsNoStyleYet = document.styleSheets.length === 0;
    if (thereIsNoStyleYet)
      document.head.appendChild(document.createElement("style"));

    const styleSheet = document.styleSheets[0];
    const splitedRules = styles.split("}");

    for (let rule of splitedRules) {
      rule = rule.replace(/\n/gm, "");
      if (rule)
        styleSheet.insertRule((rule += "}"), styleSheet.cssRules.length);
    }
  },
};
