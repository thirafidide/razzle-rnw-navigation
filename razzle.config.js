'use strict';

module.exports = {
  modify(config, { target, dev }, webpack) {
    // https://github.com/jaredpalmer/razzle/issues/842
    delete config.externals;

    // Since RN web takes care of CSS, we should remove it for a #perf boost
    config.module.rules = config.module.rules
      .filter(
        rule =>
          !(rule.test && rule.test.exec && rule.test.exec('./something.css'))
      )
      .filter(
        rule =>
          !(
            rule.test &&
            rule.test.exec &&
            rule.test.exec('./something.module.css')
          )
      );

    return config;
  },
};
