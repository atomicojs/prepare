import cac from "cac";
import { prepare } from "./module.js";
export { prepare } from "./module.js";

const cli = cac("devserver").version("PKG.VERSION");

cli.command("<...files>", "Build files")
    .option("--dest <dest>", "Choose a project type")
    .option("--types", "Generate the .d.ts files in root using typescript")
    .option("--exports", "Add the output files to package.json#exports")
    .option("--minify", "minify the code output")
    .option("--sourcemap", "generate the sourcemap")
    .example("prepare components/*.jsx")
    .example("prepare components/*.jsx --types")
    .example("prepare components/*.jsx --exports")
    .example("prepare components/*.jsx --types --exports")
    .action((src, { dest = "dest", types, exports, minify, sourcemap }) =>
        prepare({ src, dest, types, exports, minify, sourcemap })
    );

cli.help();

cli.parse();
